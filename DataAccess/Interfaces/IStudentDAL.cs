using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface IStudentDAL
    {
        /// <summary>
        /// Get sll Students
        /// </summary>
        /// <returns></returns>
        Task<List<Student >> GetAll();
        /// <summary>
        /// Get a specific Student by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Student > Get(int id);
        /// <summary>
        ///  Delete a specific Student
        /// </summary>
        /// <param name="Student"></param>
        /// <returns></returns>
        Task<int> Delete(Student  Student );
        /// <summary>
        /// Add a new Student
        /// </summary>
        /// <param name="Student"></param>
        /// <returns></returns>
        Task<int> Add(Student  Student );
        /// <summary>
        /// Update a specific Student
        /// </summary>
        /// <param name="Student"></param>
        /// <returns></returns>
        Task<int> Update(Student  Student );

    }
}
