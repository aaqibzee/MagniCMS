using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface ICourseRepository
    {
        /// <summary>
        /// Get sll Courses
        /// </summary>
        /// <returns></returns>
        Task<List<Course >> GetAll();
        /// <summary>
        /// Get a specific course by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Course > Get(int id);
        /// <summary>
        ///  Delete a specific course
        /// </summary>
        /// <param name="course"></param>
        /// <returns></returns>
        Task<int> Delete(Course  course );
        /// <summary>
        /// Add a new course
        /// </summary>
        /// <param name="course"></param>
        /// <returns></returns>
        Task<int> Add(Course  course );
        /// <summary>
        /// Update a specific course
        /// </summary>
        /// <param name="course"></param>
        /// <returns></returns>
        Task<int> Update(Course  course );

    }
}
