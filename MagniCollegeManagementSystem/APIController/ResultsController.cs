using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
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
        public async Task<IHttpActionResult> GetResults()
        {
            try
            {
                var result = await repository.GetAll();
                var response = new List<ResultDTO>();

                foreach (var item in result)
                {
                    response.Add(ResultMapper.Map(item));
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Results/5
        [ResponseType(typeof(ResultDTO))]
        public async Task<IHttpActionResult> GetResult(int id)
        {
            try
            {
                Result dbEntity = await repository.Get(id);
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

        // PUT: api/Results/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutResult(int id, ResultDTO Result)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != Result.Id)
                {
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                ResultMapper.Map(dbEntity, Result, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // POST: api/Results
        [ResponseType(typeof(Result))]
        public async Task<IHttpActionResult> PostResult(ResultDTO request)
        {
            try
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
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Results/5
        [ResponseType(typeof(Result))]
        public async Task<IHttpActionResult> DeleteResult(int id)
        {
            try
            {
                Result dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
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