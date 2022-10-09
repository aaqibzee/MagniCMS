﻿using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;
using System.Threading.Tasks;

namespace DataAccess.Interfaces
{
    public  class GradeRepository: IGradeRepository
    {
        private readonly MagniDBContext dbContext;
        public GradeRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public Task<List<Grade>> GetAll()
        {
            return dbContext.Grades
                .ToListAsync();
        }

        public Task<Grade> Get(int id)
        {
            return dbContext.Grades.FindAsync(id);
        }

        public Task<int> Delete(Grade grade)
        {
            dbContext.Grades.Remove(grade);
            return dbContext.SaveChangesAsync();
        }

        public Task<int> Add(Grade grade)
        {
            dbContext.Entry(grade).State = EntityState.Modified;
            dbContext.Grades.Add(grade);
            return dbContext.SaveChangesAsync();
        }

        public Task<int> Update(Grade grade)
        {
            dbContext.Entry(grade).State = EntityState.Modified;
            return dbContext.SaveChangesAsync();
        }
    }
}
