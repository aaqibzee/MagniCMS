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
        public List<SubjectDTO> GetSubjects()
        {
            var result = repository.GetAll();
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
            Subject dbEntity = repository.Get(id);
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

            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            SubjectMapper.Map(dbEntity, subject, dbContext);

            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
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

            var dbEntity = SubjectMapper.Map(new Subject(),request, dbContext);

            repository.Add(dbEntity);
            magniSyncHub.Clients.All.subjectsUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public IHttpActionResult DeleteSubject(int id)
        {
            Subject dbEntity = dbContext.Subjects.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            repository.Delete(dbEntity);
            magniSyncHub.Clients.All.subjectsUpdated();

            return Ok(SubjectMapper.Map(dbEntity));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubjectExists(int id)
        {
            return dbContext.Subjects.Count(e => e.Id == id) > 0;
        }
    }
}