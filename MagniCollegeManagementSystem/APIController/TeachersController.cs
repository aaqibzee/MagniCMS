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
    public class TeachersController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly ITeacherRepository repository;
        private readonly Logger logger = LogManager.GetLogger(ConfigurationManager.AppSettings.Get("LoggerName"));
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
                logger.Info("GetTeachers call started");
                var result = await repository.GetAll();
                var response = new List<TeacherDTO>();

                foreach (var item in result)
                {
                    response.Add(TeacherMapper.Map(item));
                }
                logger.Info("GetTeachers call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetTeachers call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Teachers/5
        [ResponseType(typeof(TeacherDTO))]
        public async Task<IHttpActionResult> GetTeacher(int id)
        {
            try
            {
                logger.Info("GetTeacher call started Id:" + id);
                Teacher response = await repository.Get(id);
                if (response == null)
                {
                    logger.Info("GetTeacher call completed. Result:" + "No content");
                    return NotFound();
                }
                logger.Info("GetTeacher call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetTeacher call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Teachers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTeacher(int id, TeacherDTO teacher)
        {
            try
            {
                logger.Info("PutTeacher call started. Request:" + JsonSerializer.Serialize(teacher));
                if (!ModelState.IsValid)
                {
                    logger.Info("PutTeacher call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                if (id != teacher.Id)
                {
                    logger.Info("PutTeacher call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutTeacher call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                TeacherMapper.Map(dbEntity, teacher, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                logger.Info("PutTeacher call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutTeacher call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // POST: api/Teachers
        [ResponseType(typeof(Teacher))]
        public async Task<IHttpActionResult> PostTeacher(TeacherDTO request)
        {
            try
            {
                logger.Info("PostTeacher call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostTeacher call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = TeacherMapper.Map(new Teacher(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                logger.Info("PostTeacher call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostTeacher call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // DELETE: api/Teachers/5
        [ResponseType(typeof(Teacher))]
        public async Task<IHttpActionResult> DeleteTeacher(int id)
        {
            try
            {
                logger.Info("DeleteTeacher call started. Id:" + id);
                Teacher dbEntity = dbContext.Teachers.Find(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteTeacher call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.teachersUpdated();
                logger.Info("DeleteTeacher call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(dbEntity);
            }
            catch (Exception ex)
            {
                logger.Error("DeleteTeacher call failed. Exception:" + ex.Message);
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