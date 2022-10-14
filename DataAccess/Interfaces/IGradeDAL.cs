using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface IGradeDAL
    {
        /// <summary>
        /// Get sll Grades
        /// </summary>
        /// <returns></returns>
        Task<List<Grade >> GetAll();
        /// <summary>
        /// Get a specific Grade by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Grade > Get(int id);
        /// <summary>
        ///  Delete a specific Grade
        /// </summary>
        /// <param name="Grade"></param>
        /// <returns></returns>
        Task<int> Delete(Grade  Grade );
        /// <summary>
        /// Add a new Grade
        /// </summary>
        /// <param name="Grade"></param>
        /// <returns></returns>
        Task<int> Add(Grade  Grade );
        /// <summary>
        /// Update a specific Grade
        /// </summary>
        /// <param name="Grade"></param>
        /// <returns></returns>
        Task<int> Update(Grade  Grade );

    }
}
