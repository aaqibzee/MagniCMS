using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Interfaces
{
    public  interface ISubjectRepository
    {
        /// <summary>
        ///  Get all subjects
        /// </summary>
        /// <returns></returns>
        Task<List<Subject>> GetAll();
        /// <summary>
        ///  Get a specific subject by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Subject> Get(int id);
        /// <summary>
        /// Delete a specific subject
        /// </summary>
        /// <param name="subject"></param>
        /// <returns></returns>
        Task<int> Delete(Subject subject);
        /// <summary>
        /// Add a new subject
        /// </summary>
        /// <param name="subject"></param>
        /// <returns></returns>
        Task<int> Add(Subject subject);
        /// <summary>
        /// Update a specific subject
        /// </summary>
        /// <param name="subject"></param>
        /// <returns></returns>
        Task<int> Update(Subject subject);
    }
}
