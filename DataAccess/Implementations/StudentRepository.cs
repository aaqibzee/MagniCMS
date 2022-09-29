using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class StudentRepository: IStudentRepository
    {
        private readonly MagniDBContext dbContext;
        public StudentRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Student> GetAll()
        {
            return dbContext.Students
                .Include(x => x.Subjects)
                .Include(x => x.Teachers)
                .ToList();
        }

        public Student Get(int id)
        {
            return dbContext.Students.Find(id);
        }

        public void Delete(Student student)
        {
            dbContext.Students.Remove(student);
            dbContext.SaveChanges();
        }

        public void Add(Student student)
        {
            dbContext.Entry(student).State = EntityState.Modified;
            dbContext.Students.Add(student);
            dbContext.SaveChanges();

        }

        public void Update(Student student)
        {
            dbContext.Entry(student).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
