using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;
using System.Collections.Generic;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class TeacherMapper
    {
        public static Teacher Map(Teacher teacher, TeacherDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            teacher.Id = source.Id;
            teacher.Name = source.Name;
            teacher.Students = new List<Student>();
            teacher.Subjects = new List<Subject>();
            teacher.Courses = new List<Course>();

            if (!(source.Subjects is null))
            {
                teacher.Subjects.Clear();
                foreach (var item in source.Subjects)
                {
                    teacher.Subjects.Add(db.Subjects.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
                }
            }

            if (!(source.Students is null))
            {
                teacher.Students.Clear();
                foreach (var item in source.Students)
                {
                    teacher.Students.Add(db.Students.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
                }
            }

            if (!(source.Courses is null))
            {
                teacher.Courses.Clear();
                foreach (var item in source.Courses)
                {
                    teacher.Courses.Add(db.Courses.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
                }
            }



            return teacher;
        }

        public static TeacherDTO Map(Teacher source)
        {
            if (source is null)
                return null;

            var teacher = new TeacherDTO
            {
                Id = source.Id,
                Name = source.Name,
                Students = new List<int>(),
                Subjects = new List<int>(),
                Courses = new List<int>(),
            };


            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    teacher.Subjects.Add(item.Id);
                }

            if (!(source.Students is null))
                foreach (var item in source.Students)
                {
                    teacher.Students.Add(item.Id);
                }

            if (!(source.Courses is null))
                foreach (var item in source.Courses)
                {
                    teacher.Courses.Add(item.Id);
                }

            return teacher;
        }
    }
}