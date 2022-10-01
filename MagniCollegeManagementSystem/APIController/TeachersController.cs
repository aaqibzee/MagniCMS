using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Hubs;
using MagniCollegeManagementSystem.Mappers;
using DataAccess.Models;
using Microsoft.AspNet.SignalR;
using DataAccess.DatabseContexts;
using DataAccess.Interfaces;

namespace MagniCollegeManagementSystem.APIController
{
    public class TeachersController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly ITeacherRepository repository;
        public TeachersController(MagniDBContext db)
        {
            this.repository = new TeacherRepository(db);
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Teachers
        public List<TeacherDTO> GetTeachers()
        {
            var result = repository.GetAll();
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
            Teacher dbEntity = repository.Get(id);
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

            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            TeacherMapper.Map(dbEntity, teacher, dbContext);

            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
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

        // POST: api/Teachers
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult PostTeacher(TeacherDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = TeacherMapper.Map(new Teacher(), request, dbContext);

            repository.Add(dbEntity);
            magniSyncHub.Clients.All.teachersUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Teachers/5
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult DeleteTeacher(int id)
        {
            Teacher dbEntity = dbContext.Teachers.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            repository.Delete(dbEntity);
            magniSyncHub.Clients.All.teachersUpdated();

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