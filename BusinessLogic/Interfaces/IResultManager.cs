using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;

namespace BusinessLogic.Interfaces
{
    public interface IResultManager
    {
        /// <summary>
        ///  Get all Results
        /// </summary>
        /// <returns></returns>
        Task<List<ResultDTO>> GetAll();
        /// <summary>
        ///  Get a specific Result by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<ResultDTO> Get(int id);
        /// <summary>
        /// Delete a specific Result
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new Result
        /// </summary>
        /// <param name="Result"></param>
        /// <returns></returns>
        Task<int> Add(ResultDTO Result);
        /// <summary>
        /// Update a specific Result
        /// </summary>
        /// <param name="Result"></param>
        /// <returns></returns>
        Task<int> Update(ResultDTO Result);
    }
}
