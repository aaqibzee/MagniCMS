using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Mappers;
using DataAccess.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.Hubs;
using Microsoft.AspNet.SignalR;
using DataAccess.DatabseContexts;
using DataAccess.Interfaces;

namespace MagniCollegeManagementSystem.APIController
{
    public class CoursesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly ICourseRepository repository;
        public CoursesController(MagniDBContext db)
        {
            this.dbContext = db;
            this.repository = new CourseRepository(db);
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Courses
        public List<CourseDTO> GetCourses()
        {
            var result = repository.GetAll();

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
            Course dbEntity =repository.Get(id);
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
            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            CourseMapper.Map(dbEntity,course, dbContext);

            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (repository.Get(dbEntity.Id) is null)
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

            repository.Add(dbEntity);
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

            repository.Delete(dbEntity);
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
    }
}