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
        public static Student Map(StudentDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            var student = new Student
            {
                Id = source.Id,
                Name = source.Name,
                Teachers = new List<Teacher>(),
                Subjects = new List<Subject>(),
            };

            if (!(source.Grade is null))
            {
                //var dbGrade = db.Grades.FirstOrDefault(x => x.Id.Equals(source.Grade.Id));
                //db.Entry(dbGrade).State = EntityState.Detached;
                student.Grade = GradeMapper.Map(source.Grade, db);
            }


            if (!(source.Course is null))
            {
               // var dbCourse = db.Courses.FirstOrDefault(x => x.Id.Equals(source.Course.Id));
               // db.Entry(dbCourse).State = EntityState.Modified;
                student.Course = CourseMapper.Map(source.Course, db);
            }
                

            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    student.Subjects.Add(db.Subjects.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
                }

            if (!(source.Teachers is null))
                foreach (var item in source.Teachers)
                {
                    student.Teachers.Add(db.Teachers.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
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