using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;

namespace DataAccess.Interfaces
{
    public  class ResultRepository: IResultRepository
    {
        private readonly MagniDBContext dbContext;
        public ResultRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public List<Result> GetAll()
        {
            return dbContext.Results.ToList();
        }

        public Result Get(int id)
        {
            return dbContext.Results.Find(id);
        }

        public void Delete(Result result)
        {
            dbContext.Results.Remove(result);
            dbContext.SaveChanges();
        }

        public void Add(Result result)
        {
            dbContext.Entry(result).State = EntityState.Modified;
            dbContext.Results.Add(result);
            dbContext.SaveChanges();
        }

        public void Update(Result result)
        {
            dbContext.Results.Attach(result);
            dbContext.Entry(result).State = EntityState.Modified;
            dbContext.SaveChanges();
        }
    }
}
