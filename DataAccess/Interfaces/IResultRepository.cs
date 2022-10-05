using System.Collections.Generic;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface IResultRepository
    {
        List<Result> GetAll();
        Result Get(int id);
        void Delete(Result result);
        void Add(Result result);
        void Update(Result result);
    }
}
