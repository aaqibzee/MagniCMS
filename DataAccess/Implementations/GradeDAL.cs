using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class GradeDAL : IGradeDAL
    {
        private IGradeRepository repository;
        public GradeDAL(IGradeRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Grade>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Grade> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Grade Grade)
        {
            return repository.Delete(Grade);
        }

        public Task<int> Add(Grade Grade)
        {
            return repository.Add(Grade);
        }

        public Task<int> Update(Grade Grade)
        {
            return repository.Add(Grade);
        }
    }
}
