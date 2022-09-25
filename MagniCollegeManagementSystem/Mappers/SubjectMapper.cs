using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;
using System.Collections.Generic;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class SubjectMapper
    {
        public static Subject Map(Subject subject, SubjectDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            subject.Id = source.Id;
            subject.Name = source.Name;
            subject.Code = source.Code;
            subject.CreditHours = source.CreditHours;
            subject.Students = new List<Student>();

            if (!(source.Teacher is null))
            {
                subject.Teacher = db.Teachers.FirstOrDefault
                (
                    x => x.Id.Equals(source.Teacher.Id)
                );
            }


            if (!(source.Course is null))
            {
                subject.Course = db.Courses.FirstOrDefault
                (
                    x => x.Id.Equals(source.Course.Id)
                );
            }

            if (!(source.Students is null))
            {
                var dbStudents = db.Students;
                subject.Students.Clear();
                foreach (var item in source.Students)
                {
                    subject.Students.Add(dbStudents.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
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
                CreditHours = source.CreditHours,
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