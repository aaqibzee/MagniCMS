using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;
using System.Collections.Generic;
using System.Data.Entity;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class StudentMapper
    {
        public static Student Map(Student student, StudentDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            student.Id = source.Id;
            student.Name = source.Name;
            student.Teachers = new List<Teacher>();
            student.Subjects = new List<Subject>();

            if (!(source.Grade is null))
            {
                student.Grade = db.Grades.FirstOrDefault
                (
                    x => x.Id.Equals(source.Grade.Id)
                );
            }


            if (!(source.Course is null))
            {
                student.Course = db.Courses.FirstOrDefault
                (
                    x => x.Id.Equals(source.Course.Id)
                );
            }


            if (!(source.Subjects is null))
            {
                student.Subjects.Clear();
                foreach (var item in source.Subjects)
                {
                    student.Subjects.Add(db.Subjects.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }


            if (!(source.Teachers is null))
            {
                student.Teachers.Clear();
                foreach (var item in source.Teachers)
                {
                    student.Teachers.Add(db.Teachers.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }

            return student;
        }
        public static StudentDTO Map(Student source)
        {
            if (source is null)
                return null;

            var student = new StudentDTO
            {
                Id = source.Id,
                Name = source.Name,
                Subjects = new List<int>(),
                Teachers = new List<int>(),
            };

            if (!(source.Grade is null))
                student.Grade = GradeMapper.Map(source.Grade);

            if (!(source.Course is null))
                student.Course = CourseMapper.Map(source.Course);

            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    student.Subjects.Add(item.Id);
                }

            if (!(source.Teachers is null))
                foreach (var item in source.Teachers)
                {
                    student.Teachers.Add(item.Id);
                }

            return student;
        }
    }
}