using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Hubs;
using MagniCollegeManagementSystem.Mappers;
using MagniCollegeManagementSystem.Models;
using Microsoft.AspNet.SignalR;

namespace MagniCollegeManagementSystem.APIController
{
    public class StudentsController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        public StudentsController(MagniDBContext db)
        {
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Students
        public List<StudentDTO> GetStudents()
        {
            var result = dbContext.Students
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
            Student dbEntity = dbContext.Students.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(StudentMapper.Map(dbEntity));
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

            var dbEntity = dbContext.Students.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            StudentMapper.Map(dbEntity, student, dbContext);
            dbContext.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                dbContext.SaveChanges();
                magniSyncHub.Clients.All.studentsUpdated();

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

            var dbEntity = StudentMapper.Map(new Student(), request, dbContext);

            dbContext.Entry(dbEntity).State = EntityState.Modified;

            dbContext.Students.Add(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.studentsUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student dbEntity = dbContext.Students.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            dbContext.Students.Remove(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.studentsUpdated();

            return Ok(StudentMapper.Map(dbEntity));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentExists(int id)
        {
            return dbContext.Students.Count(e => e.Id == id) > 0;
        }
    }
}