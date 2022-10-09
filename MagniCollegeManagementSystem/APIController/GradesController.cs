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
    public class GradesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly IGradeRepository repository;
        private readonly Logger logger = LogManager.GetLogger(ConfigurationManager.AppSettings.Get("LoggerName"));
        public GradesController(MagniDBContext db)
        {
            this.repository = new GradeRepository(db);
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Grades
        public async Task<IHttpActionResult> GetGrades()
        {
            try
            {
                logger.Info("GetGrades call started");
                var dbEntity =await repository.GetAll();
                var response = new List<GradeDTO>();

                foreach (var item in dbEntity)
                {
                    response.Add(GradeMapper.Map(item));
                }
                logger.Info("GetGrades call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetGrades call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public async Task<IHttpActionResult> GetGrade(int id)
        {
            try
            {
                logger.Info("GetGrade call started Id:" + id);
                Grade response = await repository.Get(id);
                if (response == null)
                {
                    logger.Info("GetGrade call completed. Result:" + "No content");
                    return NotFound();
                }
                logger.Info("GetGrade call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(GradeMapper.Map(response));
            }
            catch (Exception ex)
            {
                logger.Error("GetGrade call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Grades/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGrade(int id, GradeDTO grade)
        {
            try
            {
                logger.Info("PutGrade call started Request:" + JsonSerializer.Serialize(grade));
                if (!ModelState.IsValid)
                {
                    logger.Info("PutGrade call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                if (id != grade.Id)
                {
                    logger.Info("PutGrade call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutGrade call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                dbEntity = GradeMapper.Map(dbEntity, grade, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                logger.Info("PutGrade call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutGrade call failed. Exception:" + ex.Message);
                return InternalServerError();
            }


        }

        // POST: api/Grades
        [ResponseType(typeof(Grade))]
        public async Task<IHttpActionResult> PostGrade(GradeDTO request)
        {
            try
            {
                logger.Info("PostGrade call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostGrade call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = GradeMapper.Map(new Grade(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                logger.Info("PostGrade call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostGrade call failed. Exception:" + ex.Message);
                return InternalServerError();
            }

        }

        // DELETE: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public async Task<IHttpActionResult> DeleteGrade(int id)
        {
            try
            {
                logger.Info("DeleteGrade call started. Id:" + id);
                Grade dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteGrade call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                logger.Info("DeleteGrade call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(GradeMapper.Map(dbEntity));
            }
            catch (Exception ex)
            {
                logger.Error("DeleteGrade call failed. Exception:" + ex.Message);
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