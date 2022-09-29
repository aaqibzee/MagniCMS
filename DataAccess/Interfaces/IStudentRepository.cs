using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface IStudentRepository
    {
        List<Student> GetAll();
        Student Get(int id);
        void Delete(Student student);
        void Add(Student student);
        void Update(Student student);
    }
}
