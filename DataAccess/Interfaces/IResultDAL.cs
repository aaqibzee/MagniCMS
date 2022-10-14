using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface IResultDAL
    {
        /// <summary>
        /// Get sll Results
        /// </summary>
        /// <returns></returns>
        Task<List<Result >> GetAll();
        /// <summary>
        /// Get a specific Result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Result > Get(int id);
        /// <summary>
        ///  Delete a specific Result
        /// </summary>
        /// <param name="Result"></param>
        /// <returns></returns>
        Task<int> Delete(Result  Result );
        /// <summary>
        /// Add a new Result
        /// </summary>
        /// <param name="Result"></param>
        /// <returns></returns>
        Task<int> Add(Result  Result );
        /// <summary>
        /// Update a specific Result
        /// </summary>
        /// <param name="Result"></param>
        /// <returns></returns>
        Task<int> Update(Result  Result );

    }
}
