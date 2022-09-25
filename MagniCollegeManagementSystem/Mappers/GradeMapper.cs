using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using MagniCollegeManagementSystem.DatabseContexts;
using System.Linq;

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
            grade.Marks = source.Marks;
            grade.SubjectId = source.SubjectId;

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
                Marks = source.Marks,
                SubjectId = source.SubjectId
            };

            if (!(source.Students is null))
                foreach (var item in source.Students)
                {
                    grade.Students.Add(item.Id);
                }

            return grade;
        }
    }
}