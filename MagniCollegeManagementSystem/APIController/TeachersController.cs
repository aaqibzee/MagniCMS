using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Mappers;
using MagniCollegeManagementSystem.Models;

namespace MagniCollegeManagementSystem.APIController
{
    public class TeachersController : ApiController
    {
        private MagniDBContext db = new MagniDBContext();

        // GET: api/Teachers
        public List<TeacherDTO> GetTeachers()
        {
            var result= db.Teachers
                .Include(x => x.Students)
                .Include(x=>x.Students)
                .Include(x => x.Subjects)
                .ToList();

            var response = new List<TeacherDTO>();

            foreach (var item in result)
            {
                response.Add(TeacherMapper.Map(item));
            }

            return response;
        }

        // GET: api/Teachers/5
        [ResponseType(typeof(TeacherDTO))]
        public IHttpActionResult GetTeacher(int id)
        {
            Teacher dbEntity = db.Teachers.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(dbEntity);
        }

        // PUT: api/Teachers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTeacher(int id, TeacherDTO teacher)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != teacher.Id)
            {
                return BadRequest();
            }

            var dbEntity = db.Teachers.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            db.Teachers.Attach(dbEntity);
            dbEntity = TeacherMapper.Map(dbEntity, teacher, db);
            db.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeacherExists(id))
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

        // POST: api/Teachers
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult PostTeacher(TeacherDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = TeacherMapper.Map(new Teacher(), request, db);

            db.Entry(dbEntity).State = EntityState.Modified;
            db.Teachers.Add(dbEntity);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Teachers/5
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult DeleteTeacher(int id)
        {
            Teacher dbEntity = db.Teachers.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            db.Teachers.Remove(dbEntity);
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

        private bool TeacherExists(int id)
        {
            return db.Teachers.Count(e => e.Id == id) > 0;
        }
    }
}