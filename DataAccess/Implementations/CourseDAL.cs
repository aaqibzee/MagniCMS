using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public class CourseDAL : ICourseDAL
    {
        private ICourseRepository repository;
        public CourseDAL(ICourseRepository repository)
        {
              this.repository= repository;
        }
        public Task<List<Course>> GetAll()
        {
            return repository.GetAll();
        }

        public Task<Course> Get(int id)
        {
            return repository.Get(id);
        }

        public Task<int> Delete(Course course)
        {
            return repository.Delete(course);
        }

        public Task<int> Add(Course course)
        {
            return repository.Add(course);
        }

        public Task<int> Update(Course course)
        {
            return repository.Add(course);
        }
    }
}
