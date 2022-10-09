using System;
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
        public async Task<IHttpActionResult> GetGrades()
        {
            try
            {
                var dbEntity =await repository.GetAll();
                var response = new List<GradeDTO>();

                foreach (var item in dbEntity)
                {
                    response.Add(GradeMapper.Map(item));
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // GET: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public async Task<IHttpActionResult> GetGrade(int id)
        {
            try
            {
                Grade dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }

                return Ok(GradeMapper.Map(dbEntity));
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        // PUT: api/Grades/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGrade(int id, GradeDTO grade)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != grade.Id)
                {
                    return BadRequest();
                }

                var dbEntity = await repository.Get(id);
                if (dbEntity is null)
                {
                    return BadRequest();
                }

                dbEntity = GradeMapper.Map(dbEntity, grade, dbContext);
                await repository.Update(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }


        }

        // POST: api/Grades
        [ResponseType(typeof(Grade))]
        public async Task<IHttpActionResult> PostGrade(GradeDTO request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var dbEntity = GradeMapper.Map(new Grade(), request, dbContext);
                await repository.Add(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }

        }

        // DELETE: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public async Task<IHttpActionResult> DeleteGrade(int id)
        {
            try
            {
                Grade dbEntity = await repository.Get(id);
                if (dbEntity == null)
                {
                    return NotFound();
                }
                await repository.Delete(dbEntity);
                magniSyncHub.Clients.All.gardesUpdated();
                return Ok(GradeMapper.Map(dbEntity));
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