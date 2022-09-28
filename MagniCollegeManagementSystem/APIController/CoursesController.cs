using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Mappers;
using MagniCollegeManagementSystem.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.Hubs;
using Microsoft.AspNet.SignalR;


namespace MagniCollegeManagementSystem.APIController
{
    public class CoursesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        public CoursesController(MagniDBContext db)
        {
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Courses
        public List<CourseDTO> GetCourses()
        {
            var result = dbContext.Courses
                .Include(x => x.Students)
                .Include(x => x.Subjects)
                .Include(x => x.Teachers);

            var response = new List<CourseDTO>();
            foreach (var item in result)
            {
                response.Add(CourseMapper.Map(item));
            }

            return response;
        }

        // GET: api/Courses/5
        [ResponseType(typeof(CourseDTO))]
        public IHttpActionResult GetCourse(int id)
        {
            Course dbEntity = dbContext.Courses.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(CourseMapper.Map(dbEntity));
        }

        // PUT: api/Courses/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCourse(int id, CourseDTO course)
        {
            var dbEntity = dbContext.Courses.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            CourseMapper.Map(dbEntity,course, dbContext);
            dbContext.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                dbContext.SaveChanges();
                magniSyncHub.Clients.All.coursesUpdated();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Courses
        [ResponseType(typeof(Course))]
        public IHttpActionResult PostCourse(CourseDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = CourseMapper.Map(new Course(), request, dbContext);

            dbContext.Entry(dbEntity).State = EntityState.Modified;
            dbContext.Courses.Add(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.coursesUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Courses/5
        [ResponseType(typeof(Course))]
        public IHttpActionResult DeleteCourse(int id)
        {
            Course dbEntity = dbContext.Courses.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            dbContext.Courses.Remove(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.coursesUpdated();

            return Ok(dbEntity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CourseExists(int id)
        {
            return dbContext.Courses.Count(e => e.Id == id) > 0;
        }
    }
}