using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class TeacherRepository: ITeacherRepository
    {
        private readonly MagniDBContext dbContext;
        public TeacherRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Teacher> GetAll()
        {
            return dbContext.Teachers
                .Include(x => x.Subjects)
                .Include(x => x.Courses)
                .ToList();
        }

        public Teacher Get(int id)
        {
            return dbContext.Teachers.Find(id);
        }

        public void Delete(Teacher teacher)
        {
            dbContext.Teachers.Remove(teacher);
            dbContext.SaveChanges();
        }

        public void Add(Teacher teacher)
        {
            dbContext.Entry(teacher).State = EntityState.Modified;
            dbContext.Teachers.Add(teacher);
            dbContext.SaveChanges();

        }

        public void Update(Teacher teacher)
        {
            dbContext.Teachers.Attach(teacher);
            dbContext.Entry(teacher).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
