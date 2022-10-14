using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class CourseManager: ICourseManager
    {
        private ICourseRepository repository;
        private ICourseMapper mapper;

        public CourseManager(ICourseRepository repository, ICourseMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<CourseDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<CourseDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<CourseDTO> Get(int id)
        {
            var Course = await repository.Get(id);
            return mapper.Map(Course);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(CourseDTO Course)
        {
            var dbEntity = mapper.Map(new Course(), Course);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(CourseDTO Course)
        {
            var dbEntity = await repository.Get(Course.Id);
            mapper.Map(dbEntity, Course);
            return await repository.Update(dbEntity);
        }
    }
}
