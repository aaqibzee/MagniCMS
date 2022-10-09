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

namespace MagniCollegeManagementSystem.APIController
{
    public class CoursesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        private readonly ICourseRepository repository;
        public CoursesController(MagniDBContext db)
        {
            this.dbContext = db;
            this.repository = new CourseRepository(db);
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Courses
        public async Task<IHttpActionResult>  GetCourses()
        {
            try
            {
                var result = await repository.GetAll();

                var response = new List<CourseDTO>();
                foreach (var item in result)
                {
                    response.Add(CourseMapper.Map(item));
                }
                return  Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Courses/5
        [ResponseType(typeof(CourseDTO))]
        public async Task<IHttpActionResult> GetCourse(int id)
        {
            try
            {
                Course dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                return Ok(CourseMapper.Map(dbEntity));
            }
            catch (Exception e)
            {
                return InternalServerError();
            }

           
        }

        // PUT: api/Courses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCourse(int id, CourseDTO course)
        {
            try
            {
                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                CourseMapper.Map(dbEntity, course, dbContext);

                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // POST: api/Courses
        [ResponseType(typeof(Course))]
        public async Task<IHttpActionResult> PostCourse(CourseDTO request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var dbEntity = CourseMapper.Map(new Course(), request, dbContext);

                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();

                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // DELETE: api/Courses/5
        [ResponseType(typeof(Course))]
        public async Task<IHttpActionResult> DeleteCourse(int id)
        {
            try
            {
                Course dbEntity = dbContext.Courses.Find(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.coursesUpdated();

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