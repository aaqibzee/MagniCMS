using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class SubjectDAL : ISubjectDAL
    {
        private ISubjectRepository repository;
        public SubjectDAL(ISubjectRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Subject>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Subject> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Subject Subject)
        {
            return repository.Delete(Subject);
        }

        public Task<int> Add(Subject Subject)
        {
            return repository.Add(Subject);
        }

        public Task<int> Update(Subject Subject)
        {
            return repository.Add(Subject);
        }
    }
}
