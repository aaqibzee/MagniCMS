using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.Hubs;
using MagniCollegeManagementSystem.Mappers;
using MagniCollegeManagementSystem.Models;
using Microsoft.AspNet.SignalR;

namespace MagniCollegeManagementSystem.APIController
{
    public class GradesController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        public GradesController(MagniDBContext db)
        {
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Grades
        public List<GradeDTO> GetGrades()
        {
            var dbEntity = dbContext.Grades.Include(x => x.Students).ToList();
            var response = new List<GradeDTO>();

            foreach (var item in dbEntity)
            {
                response.Add(GradeMapper.Map(item));
            }

            return response;
        }

        // GET: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult GetGrade(int id)
        {
            Grade dbEntity = dbContext.Grades.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(GradeMapper.Map(dbEntity));
        }

        // PUT: api/Grades/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGrade(int id, GradeDTO grade)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != grade.Id)
            {
                return BadRequest();
            }

            var dbEntity = dbContext.Grades.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            dbContext.Grades.Attach(dbEntity);
            dbEntity = GradeMapper.Map(dbEntity,grade, dbContext);
            dbContext.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                dbContext.SaveChanges();
                magniSyncHub.Clients.All.gardesUpdated();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GradeExists(id))
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

        // POST: api/Grades
        [ResponseType(typeof(Grade))]
        public IHttpActionResult PostGrade(GradeDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = GradeMapper.Map(new Grade() ,request, dbContext);

            dbContext.Entry(dbEntity).State = EntityState.Modified;
            dbContext.Grades.Add(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.gardesUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
           
        }

        // DELETE: api/Grades/5
        [ResponseType(typeof(GradeDTO))]
        public IHttpActionResult DeleteGrade(int id)
        {
            Grade dbEntity = dbContext.Grades.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            dbContext.Grades.Remove(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.gardesUpdated();

            return Ok(GradeMapper.Map(dbEntity));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GradeExists(int id)
        {
            return dbContext.Grades.Count(e => e.Id == id) > 0;
        }
    }
}