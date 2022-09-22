using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;
using System.Collections.Generic;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class SubjectMapper
    {
        public static Subject Map(SubjectDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            var subject= new Subject
            {
                Id = source.Id,
                Name = source.Name,
                Code = source.Code,
                Students = new List<Student>()
            };

            if (!(source.Teacher is null))
                subject.Teacher = TeacherMapper.Map(source.Teacher,db);

            if (!(source.Course is null))
                subject.Course = CourseMapper.Map(source.Course,db);

            if (!(source.Students is null))
                foreach (var item in source.Students)
            {
                subject.Students.Add(db.Students.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
            }

            return subject;
        }
        public static SubjectDTO Map(Subject source)
        {
            if (source is null)
                return null;

            var subject = new SubjectDTO
            {
                Id = source.Id,
                Name = source.Name,
                Code = source.Code,
                Students = new List<int>()
            };

            if (!(source.Teacher is null))
                subject.Teacher = TeacherMapper.Map(source.Teacher);

            if (!(source.Course is null))
                subject.Course = CourseMapper.Map(source.Course);

            if (!(source.Students is null))
                foreach (var item in source.Students)
            {
                subject.Students.Add(item.Id);
            }

            return subject;
        }
    }
}