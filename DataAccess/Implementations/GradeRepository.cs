using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class GradeRepository: IGradeRepository
    {
        private readonly MagniDBContext dbContext;
        public GradeRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Grade> GetAll()
        {
            return dbContext.Grades
                .Include(x => x.Students)
                .ToList();
        }

        public Grade Get(int id)
        {
            return dbContext.Grades.Find(id);
        }

        public void Delete(Grade grade)
        {
            dbContext.Grades.Remove(grade);
            dbContext.SaveChanges();
        }

        public void Add(Grade grade)
        {
            dbContext.Entry(grade).State = EntityState.Modified;
            dbContext.Grades.Add(grade);
            dbContext.SaveChanges();

        }

        public void Update(Grade grade)
        {
            dbContext.Entry(grade).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
