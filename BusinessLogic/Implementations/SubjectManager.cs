using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.DTOs;
using DataAccess.Interfaces;
using DataAccess.Models;

namespace BusinessLogic.Interfaces
{
    public  class SubjectManager: ISubjectManager
    {
        private ISubjectRepository repository;
        private ISubjectMapper mapper;

        public SubjectManager(ISubjectRepository repository, ISubjectMapper mapper)
        {
            this.repository= repository;
            this.mapper = mapper;
        }

        public async Task<List<SubjectDTO>> GetAll()
        {
            var result =  await repository.GetAll();
            var response = new List<SubjectDTO>();

            foreach (var item in result)
            {
                response.Add(mapper.Map(item));
            }

            return response;
        }

        public  async Task<SubjectDTO> Get(int id)
        {
            var Subject = await repository.Get(id);
            return mapper.Map(Subject);
        }

        public async Task<int> Delete(int id)
        {
            var entity = await repository.Get(id);
            return await repository.Delete(entity);
        }

        public async Task<int> Add(SubjectDTO Subject)
        {
            var dbEntity = mapper.Map(new Subject(), Subject);
            return await repository.Add(dbEntity);
        }

        public async Task<int> Update(SubjectDTO Subject)
        {
            var dbEntity = await repository.Get(Subject.Id);
            mapper.Map(dbEntity, Subject);
            return await repository.Update(dbEntity);
        }
    }
}
