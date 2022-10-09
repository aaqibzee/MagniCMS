using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
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
        public async Task<IHttpActionResult>GetTeachers()
        {
            try
            {
                var result = await repository.GetAll();
                var response = new List<TeacherDTO>();

                foreach (var item in result)
                {
                    response.Add(TeacherMapper.Map(item));
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Teachers/5
        [ResponseType(typeof(TeacherDTO))]
        public async Task<IHttpActionResult> GetTeacher(int id)
        {
            try
            {
                Teacher dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                return Ok(dbEntity);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // PUT: api/Teachers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTeacher(int id, TeacherDTO teacher)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != teacher.Id)
                {
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                TeacherMapper.Map(dbEntity, teacher, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // POST: api/Teachers
        [ResponseType(typeof(Teacher))]
        public async Task<IHttpActionResult> PostTeacher(TeacherDTO request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var dbEntity = TeacherMapper.Map(new Teacher(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Teachers/5
        [ResponseType(typeof(Teacher))]
        public async Task<IHttpActionResult> DeleteTeacher(int id)
        {
            try
            {
                Teacher dbEntity = dbContext.Teachers.Find(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                return Ok(dbEntity);
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