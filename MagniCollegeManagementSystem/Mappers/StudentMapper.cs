using DataAccess.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Linq;
using System.Collections.Generic;
using DataAccess.DatabseContexts;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class StudentMapper
    {
        public static Student Map(Student student, StudentDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            student.Id = source.Id;
            student.FirstName = source.FirstName;
            student.LastName = source.LastName;
            student.Gender= source.Gender;
            student.Address = source.Address;
            student.ContactNumber = source.ContactNumber;
            student.RemainingCreditHours = source.RemainingCreditHours;
            student.Subjects = new List<Subject>();


            if (!(source.Course is null))
            {
                student.Course = db.Courses.FirstOrDefault
                (
                    x => x.Id.Equals(source.Course.Id)
                );
            }


            if (!(source.Subjects is null))
            {
                var dbSubjects = db.Subjects;
                student.Subjects.Clear();
                foreach (var item in source.Subjects)
                {
                    student.Subjects.Add(dbSubjects.FirstOrDefault
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
                FirstName = source.FirstName,
                LastName = source.LastName,
                Gender = source.Gender,
                Address = source.Address,
                ContactNumber = source.ContactNumber,
                RemainingCreditHours = source.RemainingCreditHours,

                Subjects = new List<int>(),
                Teachers = new List<int>(),
            };

            if (!(source.Course is null))
                student.Course = CourseMapper.Map(source.Course);

            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    student.Subjects.Add(item.Id);
                }

            return student;
        }
    }
}