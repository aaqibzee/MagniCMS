using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.DatabseContexts;
using System.Data.Entity;
using System.Threading.Tasks;

namespace DataAccess.Interfaces
{
    public  class ResultRepository: IResultRepository
    {
        private readonly MagniDBContext dbContext;
        public ResultRepository(MagniDBContext db)
        {
            dbContext = db;
        }
        public  Task<List<Result>> GetAll()
        {
            return dbContext.Results.ToListAsync();
        }

        public Task<Result> Get(int id)
        {
            return dbContext.Results.FindAsync(id);
        }

        public Task<int>Delete(Result result)
        {
            dbContext.Results.Remove(result);
            return dbContext.SaveChangesAsync();
        }

        public Task<int> Add(Result result)
        {
            dbContext.Entry(result).State = EntityState.Modified;
            dbContext.Results.Add(result);
            return dbContext.SaveChangesAsync();
        }

        public Task<int> Update(Result result)
        {
            dbContext.Results.Attach(result);
            dbContext.Entry(result).State = EntityState.Modified;
            return dbContext.SaveChangesAsync();
        }
    }
}
