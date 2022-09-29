using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class SubjectRepository: ISubjectRepository
    {
        private readonly MagniDBContext dbContext;
        public SubjectRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Subject> GetAll()
        {
            return dbContext.Subjects
                .Include(x => x.Students)
                .ToList();
        }

        public Subject Get(int id)
        {
            return dbContext.Subjects.Find(id);
        }

        public void Delete(Subject Subject)
        {
            dbContext.Subjects.Remove(Subject);
            dbContext.SaveChanges();
        }

        public void Add(Subject Subject)
        {
            dbContext.Entry(Subject).State = EntityState.Modified;
            dbContext.Subjects.Add(Subject);
            dbContext.SaveChanges();

        }

        public void Update(Subject subject)
        {
            dbContext.Entry(subject).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
