using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface ITeacherRepository
    {
        List<Teacher> GetAll();
        Teacher Get(int id);
        void Delete(Teacher teacher);
        void Add(Teacher teacher);
        void Update(Teacher teacher);
    }
}
