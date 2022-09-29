using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface ISubjectRepository
    {
        List<Subject> GetAll();
        Subject Get(int id);
        void Delete(Subject subject);
        void Add(Subject subject);
        void Update(Subject subject);
    }
}
