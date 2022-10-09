using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public interface IStudentRepository
    {
        /// <summary>
        ///  Get all students
        /// </summary>
        /// <returns></returns>
        Task<List<Student>> GetAll();
        /// <summary>
        ///  Get a specific student by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Student> Get(int id);
        /// <summary>
        /// Delete a specific student
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        Task<int> Delete(Student student);
        /// <summary>
        /// Add a new student
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        Task<int> Add(Student student);
        /// <summary>
        /// Update a specific student
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
        Task<int> Update(Student student);
    }
}
