using DataAccess.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Linq;
using System.Collections.Generic;
using DataAccess.DatabseContexts;
using System;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class TeacherMapper
    {
        public static Teacher Map(Teacher teacher, TeacherDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            teacher.Id = source.Id;
            teacher.FirstName = source.FirstName;
            teacher.LastName = source.LastName;
            teacher.Gender = source.Gender;
            teacher.Salary = source.Salary;
            teacher.Birthday = DateTime.Parse(source.Birthday??null);
            teacher.Address = source.Address;
            teacher.ContactNumber = source.ContactNumber;
            teacher.Email = source.Email;
            teacher.Subjects = new List<Subject>();
            teacher.Courses = new List<Course>();

            if (!(source.Subjects is null))
            {
                var dbSubjects = db.Subjects;
                teacher.Subjects.Clear();
                foreach (var item in source.Subjects)
                {
                    teacher.Subjects.Add(dbSubjects.FirstOrDefault
                        (
                            x => x.Id.Equals(item)
                        ));
                }
            }

            if (!(source.Courses is null))
            {
                var dbCourses = db.Courses;
                teacher.Courses.Clear();
                foreach (var item in source.Courses)
                {
                    teacher.Courses.Add(dbCourses.FirstOrDefault
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
                FirstName = source.FirstName,
                LastName = source.LastName,
                Gender = source.Gender,
                Salary = source.Salary,
                Birthday = source.Birthday.Date.ToString("yyyy-MM-dd"),
                Address = source.Address,
                ContactNumber = source.ContactNumber,
                Email = source.Email,
                Students = new List<int>(),
                Subjects = new List<int>(),
                Courses = new List<int>(),
            };


            if (!(source.Subjects is null))
                foreach (var item in source.Subjects)
                {
                    teacher.Subjects.Add(item.Id);
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