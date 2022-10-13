using System;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using DataAccess.Interfaces;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Hubs;
using MagniCollegeManagementSystem.Mappers;
using DataAccess.Models;
using Microsoft.AspNet.SignalR;
using DataAccess.DatabseContexts;
using MagniCollegeManagementSystem.Common;

namespace MagniCollegeManagementSystem.APIController
{
    public class StudentsController : ApiController
    {
        private readonly MagniDBContext _databaseContext;
        private readonly IStudentRepository repository;
        private readonly IHubContext magniSyncHub;
        private readonly IMagniLogger logger;
        public StudentsController(MagniDBContext database, IStudentRepository studentRepository, IMagniLogger logger)
        {
            this.repository = studentRepository;
            this._databaseContext = database;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
            this.logger = logger;
        }

        // GET: api/Students
        public async Task<IHttpActionResult> GetStudents()
        {
            try
            {
                logger.Info("GetStudents call started");
                var result = await repository.GetAll();
                var response = new List<StudentDTO>();

                foreach (var item in result)
                {
                    response.Add(StudentMapper.Map(item));
                }

                logger.Info("GetStudents call completed. Result:"+JsonSerializer.Serialize(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetStudents call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> GetStudent(int id)
        {
            try
            {
                logger.Info("GetStudent call started Id:"+id);
                Student response = await repository.Get(id);
                if (response == null)
                {
                    logger.Info("GetStudent call completed. Result:" + "No content");
                    return NotFound();
                }

                logger.Info("GetStudent call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(StudentMapper.Map(response));
            }
            catch (Exception ex)
            {
                logger.Error("GetStudent call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Students/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutStudent(int id, StudentDTO student)
        {
            try
            {
                logger.Info("PutStudent call started Request:" + JsonSerializer.Serialize(student));
                if (!ModelState.IsValid)
                {
                    logger.Info("PutStudent call aborted due to invalid model state. Model state:" +JsonSerializer.Serialize(ModelState) );
                    return BadRequest(ModelState);
                }

                if (id != student.Id)
                {
                    logger.Info("PutStudent call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutStudent call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                StudentMapper.Map(dbEntity, student, _databaseContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                logger.Info("PutStudent call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutStudent call failed. Exception:" + ex.Message);
                return InternalServerError();
            }

        }

        // POST: api/Students
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> PostStudent(StudentDTO request)
        {
            try
            {
                logger.Info("PostStudent call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostStudent call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = StudentMapper.Map(new Student(), request, _databaseContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                logger.Info("PostStudent call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostStudent call failed. Exception:" + ex.Message);
                return InternalServerError();
            }

        }

        // DELETE: api/Students/5
        [ResponseType(typeof(StudentDTO))]
        public async Task<IHttpActionResult> DeleteStudent(int id)
        {
            try
            {
                logger.Info("DeleteStudent call started. Id:" + id);
                Student dbEntity = _databaseContext.Students.Find(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteStudent call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.studentsUpdated();
                logger.Info("DeleteStudent call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(StudentMapper.Map(dbEntity));
            }
            catch (Exception ex)
            {
                logger.Error("DeleteStudent call failed. Exception:" + ex.Message);
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