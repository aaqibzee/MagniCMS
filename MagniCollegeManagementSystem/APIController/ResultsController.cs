﻿using System;
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
using System.Text.Json;
using MagniCollegeManagementSystem.Common;

namespace MagniCollegeManagementSystem.APIController
{
    public class ResultsController : ApiController
    {
        private readonly MagniDBContext _databaseContext;
        private readonly IHubContext magniSyncHub;
        private readonly IResultRepository repository;
        private readonly IMagniLogger logger;
        public ResultsController(MagniDBContext database, IResultRepository repository, IMagniLogger logger)
        {
            this.repository = repository;
            this._databaseContext = database;
            this.logger = logger;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Results
        public async Task<IHttpActionResult> GetResults()
        {
            try
            {
                logger.Info("GetResults call started");
                var result = await repository.GetAll();
                var response = new List<ResultDTO>();

                foreach (var item in result)
                {
                    response.Add(ResultMapper.Map(item));
                }
                logger.Info("GetResults call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetResults call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Results/5
        [ResponseType(typeof(ResultDTO))]
        public async Task<IHttpActionResult> GetResult(int id)
        {
            try
            {
                logger.Info("GetResult call started Id:" + id);
                Result response = await repository.Get(id);
                if (response == null)
                {
                    logger.Info("GetResult call completed. Result:" + "No content");
                    return NotFound();
                }
                logger.Info("GetResult call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetResult call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Results/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutResult(int id, ResultDTO Result)
        {
            try
            {
                logger.Info("PutResult call started Request:" + JsonSerializer.Serialize(Result));
                if (!ModelState.IsValid)
                {
                    logger.Info("PutResult call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                if (id != Result.Id)
                {
                    logger.Info("PutResult call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutResult call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                ResultMapper.Map(dbEntity, Result, _databaseContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
                logger.Info("PutResult call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutResult call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // POST: api/Results
        [ResponseType(typeof(Result))]
        public async Task<IHttpActionResult> PostResult(ResultDTO request)
        {
            try
            {
                logger.Info("PostResult call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostResult call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = ResultMapper.Map(new Result(), request, _databaseContext);
                repository.Add(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
                logger.Info("PostResult call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostResult call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // DELETE: api/Results/5
        [ResponseType(typeof(Result))]
        public async Task<IHttpActionResult> DeleteResult(int id)
        {
            try
            {
                logger.Info("DeleteResult call started. Id:" + id);
                Result dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteResult call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.resultsUpdated();
                logger.Info("DeleteResult call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(dbEntity);
            }
            catch (Exception ex)
            {
                logger.Error("DeleteResult call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _databaseContext.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}