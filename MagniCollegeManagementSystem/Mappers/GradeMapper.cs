using DataAccess.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Linq;
using DataAccess.DatabseContexts;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class GradeMapper
    {
        public static Grade Map(Grade grade, GradeDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            grade.Id = source.Id;
            grade.Title = source.Title;
            grade.StartingMarks = source.StartingMarks;
            grade.EndingMarks = source.EndingMarks;

            if (!(source.Students is null))
            {
                var dbStudents = db.Students;
                grade.Students.Clear();
                foreach (var item in source.Students)
                {
                    grade.Students.Add(dbStudents.FirstOrDefault
                    (
                        x => x.Id.Equals(item)
                    ));
                }
            }

            if (!(source.Course is null))
                grade.Course = db.Courses.FirstOrDefault(x => x.Id.Equals(source.Course.Id));

            return grade;
        }

        public static GradeDTO Map(Grade source)
        {
            if (source is null)
                return null;

            var grade = new GradeDTO
            {
                Id = source.Id,
                Title = source.Title,
                StartingMarks = source.StartingMarks,
                EndingMarks=source.EndingMarks,
            };

            if (!(source.Students is null))
                foreach (var item in source.Students)
                {
                    grade.Students.Add(item.Id);
                }

            if (!(source.Course is null))
                grade.Course = CourseMapper.Map(source.Course);

            return grade;
        }
    }
}