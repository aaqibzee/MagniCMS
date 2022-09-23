using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
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
    public class StudentsController : ApiController
    {
        private MagniDBContext db;
        public StudentsController()
        {
            db = new MagniDBContext();
        }

        // GET: api/Students
        public List<StudentDTO> GetStudents()
        {
            var result = db.Students
                .Include(x => x.Course)
                .Include(x => x.Grade)
                .ToList();

            var response = new List<StudentDTO>();

            foreach (var item in result)
            {
                response.Add(StudentMapper.Map(item));
            }

            return response;
        }

        // GET: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public IHttpActionResult GetStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(StudentMapper.Map(student));
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudent(int id, StudentDTO student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.Id)
            {
                return BadRequest();
            }

            var dbEntity = db.Students.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            StudentMapper.Map(dbEntity,student, db);
            db.Entry(dbEntity).State = EntityState.Modified;
            
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        // POST: api/Students
        [ResponseType(typeof(StudentDTO))]
        public IHttpActionResult PostStudent(StudentDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var student = StudentMapper.Map(new Student(),request,db);

            db.Entry(student).State = EntityState.Modified;

            db.Students.Add(student);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            db.Students.Remove(student);
            db.SaveChanges();

            return Ok(StudentMapper.Map(student));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentExists(int id)
        {
            return db.Students.Count(e => e.Id == id) > 0;
        }
    }
}