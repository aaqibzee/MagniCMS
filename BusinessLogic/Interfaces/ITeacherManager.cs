using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public interface ITeacherManager
    {
        /// <summary>
        ///  Get all Teachers
        /// </summary>
        /// <returns></returns>
        Task<List<TeacherDTO>> GetAll();
        /// <summary>
        ///  Get a specific Teacher by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TeacherDTO> Get(int id);
        /// <summary>
        /// Delete a specific Teacher
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new Teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Add(TeacherDTO Teacher);
        /// <summary>
        /// Update a specific Teacher
        /// </summary>
        /// <param name="Teacher"></param>
        /// <returns></returns>
        Task<int> Update(TeacherDTO Teacher);
    }
}
