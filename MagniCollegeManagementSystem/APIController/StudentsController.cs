using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using DataAccess.Interfaces;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Hubs;
using MagniCollegeManagementSystem.Mappers;
using DataAccess.Models;
using Microsoft.AspNet.SignalR;
using DataAccess.DatabseContexts;

namespace MagniCollegeManagementSystem.APIController
{
    public class StudentsController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IStudentRepository repository;
        private readonly IHubContext magniSyncHub;
        public StudentsController(MagniDBContext db)
        {
            this.repository = new StudentRepository(db);
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Students
        public List<StudentDTO> GetStudents()
        {
            var result = repository.GetAll();
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
            Student dbEntity = repository.Get(id);
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

            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            StudentMapper.Map(dbEntity, student, dbContext);

            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (repository.Get(id) is null)
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

            repository.Add(dbEntity);
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

            repository.Delete(dbEntity);
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
    }
}