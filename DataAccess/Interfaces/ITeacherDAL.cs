using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface ITeacherDAL
    {
        /// <summary>
        /// Get sll Teachers
        /// </summary>
        /// <returns></returns>
        Task<List<Teacher >> GetAll();
        /// <summary>
        /// Get a specific Teacher by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Teacher > Get(int id);
        /// <summary>
        ///  Delete a specific Teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Delete(Teacher  Teacher );
        /// <summary>
        /// Add a new Teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Add(Teacher  Teacher );
        /// <summary>
        /// Update a specific Teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Update(Teacher  Teacher );

    }
}
