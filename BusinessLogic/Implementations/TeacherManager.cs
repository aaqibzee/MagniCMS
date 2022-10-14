using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class TeacherManager: ITeacherManager
    {
        private ITeacherRepository repository;
        private ITeacherMapper mapper;

        public TeacherManager(ITeacherRepository repository, ITeacherMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<TeacherDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<TeacherDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<TeacherDTO> Get(int id)
        {
            var Teacher = await repository.Get(id);
            return mapper.Map(Teacher);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(TeacherDTO Teacher)
        {
            var dbEntity = mapper.Map(new Teacher(), Teacher);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(TeacherDTO Teacher)
        {
            var dbEntity = await repository.Get(Teacher.Id);
            mapper.Map(dbEntity, Teacher);
            return await repository.Update(dbEntity);
        }
    }
}
