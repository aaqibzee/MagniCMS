using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public interface ISubjectManager
    {
        /// <summary>
        ///  Get all Subjects
        /// </summary>
        /// <returns></returns>
        Task<List<SubjectDTO>> GetAll();
        /// <summary>
        ///  Get a specific Subject by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<SubjectDTO> Get(int id);
        /// <summary>
        /// Delete a specific Subject
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<int> Delete(int id);
        /// <summary>
        /// Add a new Subject
        /// </summary>
        /// <param name="Subject"></param>
        /// <returns></returns>
        Task<int> Add(SubjectDTO Subject);
        /// <summary>
        /// Update a specific Subject
        /// </summary>
        /// <param name="Subject"></param>
        /// <returns></returns>
        Task<int> Update(SubjectDTO Subject);
    }
}
