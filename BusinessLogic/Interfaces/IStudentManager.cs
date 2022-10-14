using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public interface IStudentManager
    {
        /// <summary>
        ///  Get all students
        /// </summary>
        /// <returns></returns>
        Task<List<StudentDTO>> GetAll();
        /// <summary>
        ///  Get a specific student by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<StudentDTO> Get(int id);
        /// <summary>
        /// Delete a specific student
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new student
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        Task<int> Add(StudentDTO student);
        /// <summary>
        /// Update a specific student
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        Task<int> Update(StudentDTO student);
    }
}
