using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class ResultDAL : IResultDAL
    {
        private IResultRepository repository;
        public ResultDAL(IResultRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Result>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Result> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Result Result)
        {
            return repository.Delete(Result);
        }

        public Task<int> Add(Result Result)
        {
            return repository.Add(Result);
        }

        public Task<int> Update(Result Result)
        {
            return repository.Add(Result);
        }
    }
}
