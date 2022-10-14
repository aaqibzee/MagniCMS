using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;

namespace BusinessLogic.Interfaces
{
    public interface ICourseManager
    {
        /// <summary>
        ///  Get all Courses
        /// </summary>
        /// <returns></returns>
        Task<List<CourseDTO>> GetAll();
        /// <summary>
        ///  Get a specific Course by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<CourseDTO> Get(int id);
        /// <summary>
        /// Delete a specific Course
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new Course
        /// </summary>
        /// <param name="Course"></param>
        /// <returns></returns>
        Task<int> Add(CourseDTO Course);
        /// <summary>
        /// Update a specific Course
        /// </summary>
        /// <param name="Course"></param>
        /// <returns></returns>
        Task<int> Update(CourseDTO Course);
    }
}
