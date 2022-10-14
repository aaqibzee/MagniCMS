using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class ResultManager: IResultManager
    {
        private IResultRepository repository;
        private IResultMapper mapper;

        public ResultManager(IResultRepository repository, IResultMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<ResultDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<ResultDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<ResultDTO> Get(int id)
        {
            var Result = await repository.Get(id);
            return mapper.Map(Result);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(ResultDTO Result)
        {
            var dbEntity = mapper.Map(new Result(), Result);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(ResultDTO Result)
        {
            var dbEntity = await repository.Get(Result.Id);
            mapper.Map(dbEntity, Result);
            return await repository.Update(dbEntity);
        }
    }
}
