using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Models;

namespace DataAccess.Repositories.Interfaces
{
    public  interface ISubjectDAL
    {
        /// <summary>
        /// Get sll Subjects
        /// </summary>
        /// <returns></returns>
        Task<List<Subject >> GetAll();
        /// <summary>
        /// Get a specific Subject by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Subject > Get(int id);
        /// <summary>
        ///  Delete a specific Subject
        /// </summary>
        /// <param name="Subject"></param>
        /// <returns></returns>
        Task<int> Delete(Subject  Subject );
        /// <summary>
        /// Add a new Subject
        /// </summary>
        /// <param name="Subject"></param>
        /// <returns></returns>
        Task<int> Add(Subject  Subject );
        /// <summary>
        /// Update a specific Subject
        /// </summary>
        /// <param name="Subject"></param>
        /// <returns></returns>
        Task<int> Update(Subject  Subject );

    }
}
