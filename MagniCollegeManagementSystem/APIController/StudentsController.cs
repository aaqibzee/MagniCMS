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
using MagniCollegeManagementSystem.Models;

namespace MagniCollegeManagementSystem.APIController
{
    public class StudentsController : ApiController
    {
        private MagniDBContext db = new MagniDBContext();

        // GET: api/Students
        public List<Student> GetStudents()
        {
            return db.Students.Include(x => x.Course).Include(x => x.Grade).ToList();
        }

        // GET: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult GetStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudent(int id, Student student)
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

            db.Students.Attach(dbEntity);

            //Update Course
            dbEntity.Course = student.Course;
            var listOfSubject=dbEntity.Subjects.ToList();

            //Remove subjects references
            foreach (var item in listOfSubject)
            {
                var subject = student.Subjects.FirstOrDefault(c => c.Id == item.Id);
                if (subject == null)
                {
                    dbEntity.Subjects.Remove(item);
                }
            }

            //Add subjects references
            foreach (var item in student.Subjects)
            {
                var subject = dbEntity.Subjects.FirstOrDefault(c => c.Id == item.Id);
                if (subject == null)
                {
                    dbEntity.Subjects.Add(db.Subjects.FirstOrDefault(x => x.Id.Equals(item.Id)));
                }
            }


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
        [ResponseType(typeof(Student))]
        public IHttpActionResult PostStudent(Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(student.Course).State = EntityState.Modified;

            var subjectsSelectedByUser = student.Subjects.ToList();
            student.Subjects.Clear();

            foreach (var item in subjectsSelectedByUser)
            {
                var entity = db.Subjects.SingleOrDefault(c => c.Id == item.Id);
                if (entity != null)
                {
                    student.Subjects.Add(entity);
                    db.Entry(entity).State = EntityState.Modified;
                }
            }

            db.Students.Add(student);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(Student))]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student student = db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            db.Students.Remove(student);
            db.SaveChanges();

            return Ok(student);
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