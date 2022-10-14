using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface IGradeRepository
    {
        /// <summary>
        /// Get All Grades
        /// </summary>
        /// <returns></returns>
        Task<List<Grade>> GetAll();
        /// <summary>
        /// Get a specific grade by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Grade> Get(int id);
        /// <summary>
        /// Delete a specific grade
        /// </summary>
        /// <param name="grade"></param>
        /// <returns></returns>
        Task<int> Delete(Grade grade);
        /// <summary>
        /// Add a new grade
        /// </summary>
        /// <param name="grade"></param>
        /// <returns></returns>
        Task<int> Add(Grade grade);
        /// <summary>
        /// Update a specific grade
        /// </summary>
        /// <param name="grade"></param>
        /// <returns></returns>
        Task<int> Update(Grade grade);
    }
}
