using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface IResultRepository
    {
        /// <summary>
        ///  Get all results
        /// </summary>
        /// <returns></returns>
        Task<List<Result>> GetAll();
        /// <summary>
        ///  Get a specific result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Result> Get(int id);
        /// <summary>
        /// Delete a specific result
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        Task<int> Delete(Result result);
        /// <summary>
        /// Add a new result
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        Task<int> Add(Result result);
        /// <summary>
        /// Update a specific result
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        Task<int> Update(Result result);
    }
}
