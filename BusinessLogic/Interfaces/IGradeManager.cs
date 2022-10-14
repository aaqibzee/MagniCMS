using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;

namespace BusinessLogic.Interfaces
{
    public interface IGradeManager
    {
        /// <summary>
        ///  Get all Grades
        /// </summary>
        /// <returns></returns>
        Task<List<GradeDTO>> GetAll();
        /// <summary>
        ///  Get a specific Grade by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<GradeDTO> Get(int id);
        /// <summary>
        /// Delete a specific Grade
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new Grade
        /// </summary>
        /// <param name="Grade"></param>
        /// <returns></returns>
        Task<int> Add(GradeDTO Grade);
        /// <summary>
        /// Update a specific Grade
        /// </summary>
        /// <param name="Grade"></param>
        /// <returns></returns>
        Task<int> Update(GradeDTO Grade);
    }
}
