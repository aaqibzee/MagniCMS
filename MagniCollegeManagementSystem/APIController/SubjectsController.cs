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
    public class SubjectsController : ApiController
    {
        private MagniDBContext db = new MagniDBContext();

        // GET: api/Subjects
        public List<SubjectDTO> GetSubjects()
        {
            var result = db.Subjects
                .Include(x => x.Students)
                .ToList();
            
            var response = new List<SubjectDTO>();

            foreach (var item in result)
            {
                response.Add(SubjectMapper.Map(item));
            }

            return response;
        }

        // GET: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public IHttpActionResult GetSubject(int id)
        {
            Subject dbEntity = db.Subjects.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(SubjectMapper.Map(dbEntity));
        }

        // PUT: api/Subjects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubject(int id, SubjectDTO subject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subject.Id)
            {
                return BadRequest();
            }

            var dbEntity = db.Subjects.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            db.Subjects.Attach(dbEntity);
            dbEntity = SubjectMapper.Map(dbEntity,subject, db);
            db.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubjectExists(id))
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

        // POST: api/Subjects
        [ResponseType(typeof(Subject))]
        public IHttpActionResult PostSubject(SubjectDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = SubjectMapper.Map(new Subject(),request, db);

            db.Entry(dbEntity).State = EntityState.Modified;

            db.Subjects.Add(dbEntity);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public IHttpActionResult DeleteSubject(int id)
        {
            Subject dbEntity = db.Subjects.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            db.Subjects.Remove(dbEntity);
            db.SaveChanges();

            return Ok(SubjectMapper.Map(dbEntity));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubjectExists(int id)
        {
            return db.Subjects.Count(e => e.Id == id) > 0;
        }
    }
}