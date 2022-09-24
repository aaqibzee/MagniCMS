using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;
using System.Collections.Generic;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class CourseMapper
    {
        public static Course Map(Course course, CourseDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            course.Id = source.Id;
            course.Name = source.Name;
            course.Code = source.Code;
            course.NumberOfSubjectsAllowed = source.NumberOfSubjectsAllowed;
            course.Students = new List<Student>();
            course.Subjects = new List<Subject>();
            course.Teachers = new List<Teacher>();


            if (!(source.Students is null))
            {
                course.Students.Clear();
                foreach (var item in source.Students)
                {
                    course.Students.Add(db.Students.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }


            if (!(source.Subjects is null))
            {
                course.Subjects.Clear();
                foreach (var item in source.Subjects)
                {
                    course.Subjects.Add(db.Subjects.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }

            if (!(source.Teachers is null))
            {
                course.Teachers.Clear();
                foreach (var item in source.Teachers)
                {
                    course.Teachers.Add(db.Teachers.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }

            return course;
        }

        public static CourseDTO Map(Course source)
        {
            if (source is null)
                return null;

            var course = new CourseDTO
            {
                Id = source.Id,
                Name = source.Name,
                Code = source.Code,
                Students = new List<int>(),
                Subjects = new List<int>(),
                Teachers = new List<int>(),
                NumberOfSubjectsAllowed = source.NumberOfSubjectsAllowed
            };

            if (!(source.Students is null))
                foreach (var item in source.Students)
                {
                    course.Students.Add(item.Id);
                }

            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    course.Subjects.Add(item.Id);
                }

            if (!(source.Teachers is null))
                foreach (var item in source.Teachers)
                {
                    course.Teachers.Add(item.Id);
                }

            return course;
        }
    }
}