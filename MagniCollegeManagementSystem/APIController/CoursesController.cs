using System;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Mappers;
using DataAccess.Models;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.Hubs;
using Microsoft.AspNet.SignalR;
using DataAccess.DatabseContexts;
using DataAccess.Interfaces;
using System.Text.Json;
using MagniCollegeManagementSystem.Common;

namespace MagniCollegeManagementSystem.APIController
{
    public class CoursesController : ApiController
    {
        private readonly MagniDBContext _databaseContext;
        private readonly IHubContext magniSyncHub;
        private readonly ICourseRepository repository;
        private readonly IMagniLogger logger;
        public CoursesController(MagniDBContext database, ICourseRepository repository, IMagniLogger logger)
        {
            this._databaseContext = database;
            this.repository = repository;
            this.logger = logger;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Courses
        public async Task<IHttpActionResult>  GetCourses()
        {
            try
            {
                logger.Info("GetCourses call started");
                var result = await repository.GetAll();
                var response = new List<CourseDTO>();
                foreach (var item in result)
                {
                    response.Add(CourseMapper.Map(item));
                }
                logger.Info("GetCourses call completed. Result:" + JsonSerializer.Serialize(response));
                return  Ok(response);
            }
            catch (Exception ex)
            {
                logger.Error("GetCourses call failed  Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // GET: api/Courses/5
        [ResponseType(typeof(CourseDTO))]
        public async Task<IHttpActionResult> GetCourse(int id)
        {
            try
            {
                logger.Info("GetCourse call started Id:" + id);
                Course response = await repository.Get(id);

                if (response == null)
                {
                    logger.Info("GetCourse call completed. Result:" + "No content");
                    return NotFound();
                }

                logger.Info("GetCourse call completed. Result:" + JsonSerializer.Serialize(response));
                return Ok(CourseMapper.Map(response));
            }
            catch (Exception ex)
            {
                logger.Error("GetCourse call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // PUT: api/Courses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCourse(int id, CourseDTO course)
        {
            try
            {
                logger.Info("PutCourse call started Request:" + JsonSerializer.Serialize(course));
                
                if (!ModelState.IsValid)
                {
                    logger.Info("PutCourse call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }


                if (id != course.Id)
                {
                    logger.Info("PutCourse call aborted due to invalid request. Id:" + id);
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    logger.Info("PutCourse call aborted due to invalid request. No DB entity was found for the given Id:" + id);
                    return BadRequest();
                }

                CourseMapper.Map(dbEntity, course, _databaseContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();
                logger.Info("PutCourse call completed successfully");
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception ex)
            {
                logger.Error("PutCourse call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // POST: api/Courses
        [ResponseType(typeof(Course))]
        public async Task<IHttpActionResult> PostCourse(CourseDTO request)
        {
            try
            {
                logger.Info("PostCourse call started. Request:" + JsonSerializer.Serialize(request));
                if (!ModelState.IsValid)
                {
                    logger.Info("PostCourse call aborted due to invalid model state. Model state:" + JsonSerializer.Serialize(ModelState));
                    return BadRequest(ModelState);
                }

                var dbEntity = CourseMapper.Map(new Course(), request, _databaseContext);

                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();
                logger.Info("PostCourse call completed successfully");
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception ex)
            {
                logger.Error("PostCourse call failed. Exception:" + ex.Message);
                return InternalServerError();
            }
        }

        // DELETE: api/Courses/5
        [ResponseType(typeof(Course))]
        public async Task<IHttpActionResult> DeleteCourse(int id)
        {
            try
            {
                logger.Info("DeleteCourse call started. Id:" + id);
                Course dbEntity = _databaseContext.Courses.Find(id);
                if (dbEntity == null)
                {
                    logger.Info("DeleteCourse call completed. Result:No content. No db entity was found to delete");
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();
                logger.Info("DeleteCourse call completed successfully for entiry" + JsonSerializer.Serialize(dbEntity));
                return Ok(dbEntity);
            }
            catch (Exception ex)
            {
                logger.Error("DeleteCourse call failed. Exception:" + ex.Message);
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