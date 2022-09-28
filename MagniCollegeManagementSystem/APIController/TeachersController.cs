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
    public class TeachersController : ApiController
    {
        private readonly MagniDBContext dbContext;
        private readonly IHubContext magniSyncHub;
        public TeachersController(MagniDBContext db)
        {
            this.dbContext = db;
            this.magniSyncHub = GlobalHost.ConnectionManager.GetHubContext<MagniSyncHub>();
        }

        // GET: api/Teachers
        public List<TeacherDTO> GetTeachers()
        {
            var result= dbContext.Teachers
                .Include(x => x.Students)
                .Include(x=>x.Students)
                .Include(x => x.Subjects)
                .ToList();

            var response = new List<TeacherDTO>();

            foreach (var item in result)
            {
                response.Add(TeacherMapper.Map(item));
            }

            return response;
        }

        // GET: api/Teachers/5
        [ResponseType(typeof(TeacherDTO))]
        public IHttpActionResult GetTeacher(int id)
        {
            Teacher dbEntity = dbContext.Teachers.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            return Ok(dbEntity);
        }

        // PUT: api/Teachers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTeacher(int id, TeacherDTO teacher)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != teacher.Id)
            {
                return BadRequest();
            }

            var dbEntity = dbContext.Teachers.First(x => x.Id.Equals(id));
            if (dbEntity is null)
            {
                return BadRequest();
            }

            dbContext.Teachers.Attach(dbEntity);
            dbEntity = TeacherMapper.Map(dbEntity, teacher, dbContext);
            dbContext.Entry(dbEntity).State = EntityState.Modified;

            try
            {
                dbContext.SaveChanges();
                magniSyncHub.Clients.All.teachersUpdated();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeacherExists(id))
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

        // POST: api/Teachers
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult PostTeacher(TeacherDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dbEntity = TeacherMapper.Map(new Teacher(), request, dbContext);

            dbContext.Entry(dbEntity).State = EntityState.Modified;
            dbContext.Teachers.Add(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.teachersUpdated();

            return CreatedAtRoute("DefaultApi", new { id = request.Id }, request);
        }

        // DELETE: api/Teachers/5
        [ResponseType(typeof(Teacher))]
        public IHttpActionResult DeleteTeacher(int id)
        {
            Teacher dbEntity = dbContext.Teachers.Find(id);
            if (dbEntity == null)
            {
                return NotFound();
            }

            dbContext.Teachers.Remove(dbEntity);
            dbContext.SaveChanges();
            magniSyncHub.Clients.All.teachersUpdated();

            return Ok(dbEntity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TeacherExists(int id)
        {
            return dbContext.Teachers.Count(e => e.Id == id) > 0;
        }
    }
}