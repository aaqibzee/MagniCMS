using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Threading.Tasks;
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
        public async Task<IHttpActionResult> GetStudents()
        {
            try
            {

                var result = await repository.GetAll();
                var response = new List<StudentDTO>();

                foreach (var item in result)
                {
                    response.Add(StudentMapper.Map(item));
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> GetStudent(int id)
        {
            try
            {
                Student dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }
                return Ok(StudentMapper.Map(dbEntity));
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutStudent(int id, StudentDTO student)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != student.Id)
                {
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                StudentMapper.Map(dbEntity, student, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }

        }

        // POST: api/Students
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> PostStudent(StudentDTO request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var dbEntity = StudentMapper.Map(new Student(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }

        }

        // DELETE: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> DeleteStudent(int id)
        {
            try
            {
                Student dbEntity = dbContext.Students.Find(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                return Ok(StudentMapper.Map(dbEntity));
            }
            catch (Exception e)
            {
                return InternalServerError();
            }

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