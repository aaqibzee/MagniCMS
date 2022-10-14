using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface ITeacherRepository
    {
        /// <summary>
        ///  Get all teachers
        /// </summary>
        /// <returns></returns>
        Task<List<Teacher>> GetAll();
        /// <summary>
        ///  Get a specific teacher by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Teacher> Get(int id);
        /// <summary>
        /// Delete a specific teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Delete(Teacher Teacher);
        /// <summary>
        /// Add a new teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Add(Teacher Teacher);
        /// <summary>
        /// Update a specific teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Update(Teacher Teacher);
    }
}
