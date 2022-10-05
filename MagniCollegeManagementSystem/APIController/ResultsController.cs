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
    public class ResultsController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly IResultRepository repository;
        public ResultsController(MagniDBContext db)
        {
            this.repository = new ResultRepository(db);
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Results
        public List<ResultDTO> GetResults()
        {
            var result = repository.GetAll();
            var response = new List<ResultDTO>();

            foreach (var item in result)
            {
                response.Add(ResultMapper.Map(item));
            }

            return response;
        }

        // GET: api/Results/5
        [ResponseType(typeof(ResultDTO))]
        public IHttpActionResult GetResult(int id)
        {
            Result dbEntity = repository.Get(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(dbEntity);
        }

        // PUT: api/Results/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutResult(int id, ResultDTO Result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Result.Id)
            {
                return BadRequest();
            }

            var dbEntity = repository.Get(id);
            if (dbEntity is null)
            {
                return BadRequest();
            }

            ResultMapper.Map(dbEntity, Result, dbContext);

            try
            {
                repository.Update(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
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

        // POST: api/Results
        [ResponseType(typeof(Result))]
        public IHttpActionResult PostResult(ResultDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = ResultMapper.Map(new Result(), request, dbContext);

            repository.Add(dbEntity);
            magniSyncHub.Clients.All.resultsUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Results/5
        [ResponseType(typeof(Result))]
        public IHttpActionResult DeleteResult(int id)
        {
            Result dbEntity = dbContext.Results.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            repository.Delete(dbEntity);
            magniSyncHub.Clients.All.resultsUpdated();

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