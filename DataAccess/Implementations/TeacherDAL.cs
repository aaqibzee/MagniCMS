using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class TeacherDAL : ITeacherDAL
    {
        private ITeacherRepository repository;
        public TeacherDAL(ITeacherRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Teacher>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Teacher> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Teacher Teacher)
        {
            return repository.Delete(Teacher);
        }

        public Task<int> Add(Teacher Teacher)
        {
            return repository.Add(Teacher);
        }

        public Task<int> Update(Teacher Teacher)
        {
            return repository.Add(Teacher);
        }
    }
}
