using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class CourseRepository: ICourseRepository
    {
        private readonly MagniDBContext dbContext;
        public CourseRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Course> GetAll()
        {
            return dbContext.Courses
                .Include(x => x.Students)
                .Include(x => x.Subjects)
                .Include(x => x.Teachers)
                .ToList();
        }

        public Course Get(int id)
        {
            return dbContext.Courses.Find(id);
        }

        public void Delete(Course course)
        {
            dbContext.Courses.Remove(course);
            dbContext.SaveChanges();
        }

        public void Add(Course course)
        {
            dbContext.Entry(course).State = EntityState.Modified;
            dbContext.Courses.Add(course);
            dbContext.SaveChanges();

        }

        public void Update(Course course)
        {
            dbContext.Entry(course).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
