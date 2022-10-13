using System;
using System.Collections.Generic;
using System.Configuration;
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
using NLog;
using System.Text.Json;

namespace MagniCollegeManagementSystem.APIController
{
    public class SubjectsController : ApiController
    {
        private readonly MagniDBContext _databaseContext;
        private readonly IHubContext magniSyncHub;
        private readonly ISubjectRepository repository;
        private readonly Logger logger = LogManager.GetLogger(ConfigurationManager.AppSettings.Get("LoggerName"));
        public SubjectsController(MagniDBContext database, ISubjectRepository repository)
        {
            this._databaseContext = database;
            this.repository = repository;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Subjects
        public async Task<IHttpActionResult> GetSubjects()
        {
            try
            {
                logger.Info("GetSubjects call started");
                var result = await repository.GetAll();
                var response = new List<SubjectDTO>();

                foreach (var item in result)
                {
                    response.Add(SubjectMapper.Map(item));
                }
                logger.Info("GetSubjects call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetSubjects call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public async Task<IHttpActionResult> GetSubject(int id)
        {
            try
            {
                logger.Info("GetSubject call started Id:" + id);
                Subject response = await repository.Get(id);
                if (response == null)
                {
                    logger.Info("GetSubject call completed. Result:" + "No content");
                    return NotFound();
                }
                logger.Info("GetSubject call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(SubjectMapper.Map(response));
            }
            catch (Exception ex)
            {
                logger.Error("GetSubject call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Subjects/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSubject(int id, SubjectDTO subject)
        {
            try
            {
                logger.Info("PutSubject call started Request:" + JsonSerializer.Serialize(subject));
                if (!ModelState.IsValid)
                {
                    logger.Info("PutSubject call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                if (id != subject.Id)
                {
                    logger.Info("PutSubject call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutSubject call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                SubjectMapper.Map(dbEntity, subject, _databaseContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                logger.Info("PutSubject call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutSubject call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // POST: api/Subjects
        [ResponseType(typeof(Subject))]
        public async Task<IHttpActionResult> PostSubject(SubjectDTO request)
        {
            try
            {
                logger.Info("PostSubject call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostSubject call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = SubjectMapper.Map(new Subject(), request, _databaseContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                logger.Info("PostSubject call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostSubject call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // DELETE: api/Subjects/5
        [ResponseType(typeof(SubjectDTO))]
        public async Task<IHttpActionResult> DeleteSubject(int id)
        {
            try
            {
                logger.Info("DeleteSubject call started. Id:" + id);
                Subject dbEntity = _databaseContext.Subjects.Find(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteSubject call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.subjectsUpdated();
                logger.Info("DeleteSubject call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(SubjectMapper.Map(dbEntity));
            }
            catch (Exception ex)
            {
                logger.Error("DeleteSubject call failed. Exception:" + ex.Message);
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