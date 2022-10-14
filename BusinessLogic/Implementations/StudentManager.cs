using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class StudentManager: IStudentManager
    {
        private IStudentRepository repository;
        private IStudentMapper mapper;

        public StudentManager(IStudentRepository repository, IStudentMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<StudentDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<StudentDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<StudentDTO> Get(int id)
        {
            var student = await repository.Get(id);
            return mapper.Map(student);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(StudentDTO student)
        {
            var dbEntity = mapper.Map(new Student(), student);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(StudentDTO student)
        {
            var dbEntity = await repository.Get(student.Id);
            mapper.Map(dbEntity, student);
            return await repository.Update(dbEntity);
        }
    }
}
