using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Mappers;
using MagniCollegeManagementSystem.Models;

namespace MagniCollegeManagementSystem.APIController
{
    public class GradesController : ApiController
    {
        private MagniDBContext db = new MagniDBContext();

        // GET: api/Grades
        public List<GradeDTO> GetGrades()
        {
            var result = db.Grades.Include(x => x.Students).ToList();
            var response = new List<GradeDTO>();

            foreach (var item in result)
            {
                response.Add(GradeMapper.Map(item));
            }

            return response;
        }

        // GET: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult GetGrade(int id)
        {
            Grade grade = db.Grades.Find(id);
            if (grade == null)
            {
                return NotFound();
            }

            return Ok(GradeMapper.Map(grade));
        }

        // PUT: api/Grades/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGrade(int id, GradeDTO grade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != grade.Id)
            {
                return BadRequest();
            }

            var dbEntity = db.Grades.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            db.Grades.Attach(dbEntity);
            dbEntity = GradeMapper.Map(dbEntity,grade, db);
            db.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GradeExists(id))
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

        // POST: api/Grades
        [ResponseType(typeof(Grade))]
        public IHttpActionResult PostGrade(GradeDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var grade = GradeMapper.Map(new Grade() ,request, db);

            db.Entry(grade).State = EntityState.Modified;
            db.Grades.Add(grade);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
           
        }

        // DELETE: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult DeleteGrade(int id)
        {
            Grade grade = db.Grades.Find(id);
            if (grade == null)
            {
                return NotFound();
            }

            db.Grades.Remove(grade);
            db.SaveChanges();

            return Ok(GradeMapper.Map(grade));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GradeExists(int id)
        {
            return db.Grades.Count(e => e.Id == id) > 0;
        }
    }
}