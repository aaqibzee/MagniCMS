using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class GradeManager: IGradeManager
    {
        private IGradeRepository repository;
        private IGradeMapper mapper;

        public GradeManager(IGradeRepository repository, IGradeMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<GradeDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<GradeDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<GradeDTO> Get(int id)
        {
            var Grade = await repository.Get(id);
            return mapper.Map(Grade);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(GradeDTO Grade)
        {
            var dbEntity = mapper.Map(new Grade(), Grade);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(GradeDTO Grade)
        {
            var dbEntity = await repository.Get(Grade.Id);
            mapper.Map(dbEntity, Grade);
            return await repository.Update(dbEntity);
        }
    }
}
