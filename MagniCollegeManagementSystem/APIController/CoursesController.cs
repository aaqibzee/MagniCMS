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


namespace MagniCollegeManagementSystem.APIController
{
    public class CoursesController : ApiController
    {
        private MagniDBContext db;
        public CoursesController()
        {
            this.db = new MagniDBContext();

        }

        // GET: api/Courses
        public List<CourseDTO> GetCourses()
        {
            var result = db.Courses
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
            Course dbEntity = db.Courses.Find(id);
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
            var dbEntity = db.Courses.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            CourseMapper.Map(dbEntity,course, db);
            db.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
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

            var dbEntity = CourseMapper.Map(new Course(), request, db);

            db.Entry(dbEntity).State = EntityState.Modified;
            db.Courses.Add(dbEntity);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Courses/5
        [ResponseType(typeof(Course))]
        public IHttpActionResult DeleteCourse(int id)
        {
            Course dbEntity = db.Courses.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            db.Courses.Remove(dbEntity);
            db.SaveChanges();

            return Ok(dbEntity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CourseExists(int id)
        {
            return db.Courses.Count(e => e.Id == id) > 0;
        }
    }
}