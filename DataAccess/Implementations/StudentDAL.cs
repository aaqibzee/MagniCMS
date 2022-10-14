using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class StudentDAL : IStudentDAL
    {
        private IStudentRepository repository;
        public StudentDAL(IStudentRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Student>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Student> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Student Student)
        {
            return repository.Delete(Student);
        }

        public Task<int> Add(Student Student)
        {
            return repository.Add(Student);
        }

        public Task<int> Update(Student Student)
        {
            return repository.Add(Student);
        }
    }
}
