using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
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
    public class GradesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly IGradeRepository repository;
        public GradesController(MagniDBContext db)
        {
            this.repository = new GradeRepository(db);
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Grades
        public List<GradeDTO> GetGrades()
        {
            var dbEntity = repository.GetAll();
            var response = new List<GradeDTO>();

            foreach (var item in dbEntity)
            {
                response.Add(GradeMapper.Map(item));
            }

            return response;
        }

        // GET: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult GetGrade(int id)
        {
            Grade dbEntity = repository.Get(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(GradeMapper.Map(dbEntity));
        }

        // PUT: api/Grades/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGrade(int id, GradeDTO grade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != grade.Id)
            {
                return BadRequest();
            }

            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            dbEntity = GradeMapper.Map(dbEntity,grade, dbContext);
            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
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

        // POST: api/Grades
        [ResponseType(typeof(Grade))]
        public IHttpActionResult PostGrade(GradeDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = GradeMapper.Map(new Grade() ,request, dbContext);

            repository.Add(dbEntity);
            magniSyncHub.Clients.All.gardesUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
           
        }

        // DELETE: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult DeleteGrade(int id)
        {
            Grade dbEntity = dbContext.Grades.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            repository.Delete(dbEntity);
            magniSyncHub.Clients.All.gardesUpdated();

            return Ok(GradeMapper.Map(dbEntity));
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