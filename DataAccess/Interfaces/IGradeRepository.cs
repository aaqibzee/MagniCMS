using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface IGradeRepository
    {
        List<Grade> GetAll();
        Grade Get(int id);
        void Delete(Grade grade);
        void Add(Grade grade);
        void Update(Grade grade);
    }
}
