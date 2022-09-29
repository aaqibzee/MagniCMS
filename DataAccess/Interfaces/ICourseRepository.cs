using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface ICourseRepository
    {
        List<Course> GetAll();
        Course Get(int id);
        void Delete(Course course);
        void Add(Course course);
        void Update(Course course);
    }
}
