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
    public class SubjectsController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly ISubjectRepository repository;
        public SubjectsController(MagniDBContext db)
        {
            this.dbContext = db;
            this.repository = new SubjectRepository(db);
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Subjects
        public async Task<IHttpActionResult> GetSubjects()
        {
            try
            {

                var result = await repository.GetAll();
                var response = new List<SubjectDTO>();

                foreach (var item in result)
                {
                    response.Add(SubjectMapper.Map(item));
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public async Task<IHttpActionResult> GetSubject(int id)
        {
            try
            {
                Subject dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                return Ok(SubjectMapper.Map(dbEntity));
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // PUT: api/Subjects/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSubject(int id, SubjectDTO subject)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != subject.Id)
                {
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                SubjectMapper.Map(dbEntity, subject, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // POST: api/Subjects
        [ResponseType(typeof(Subject))]
        public async Task<IHttpActionResult> PostSubject(SubjectDTO request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var dbEntity = SubjectMapper.Map(new Subject(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public async Task<IHttpActionResult> DeleteSubject(int id)
        {
            try
            {
                Subject dbEntity = dbContext.Subjects.Find(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                return Ok(SubjectMapper.Map(dbEntity));
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