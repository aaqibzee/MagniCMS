using DataAccess.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Linq;
using DataAccess.DatabseContexts;

namespace MagniCollegeManagementSystem.Mappers
{
    public static class ResultMapper
    {
        public static Result Map(Result Result, ResultDTO source, MagniDBContext db)
        {
            if (source is null)
                return null;

            Result.ObtainedMarks = source.ObtainedMarks;

            if (!(source.Course is null))
            {
                Result.Course = db.Courses.FirstOrDefault
                (
                    x => x.Id.Equals(source.Course.Id)
                );
            }

            if (!(source.Student is null))
            {
                Result.Student = db.Students.FirstOrDefault
                (
                    x => x.Id.Equals(source.Student.Id)
                );
            }

            if (!(source.Subject is null))
            {
                Result.Subject = db.Subjects.FirstOrDefault
                (
                    x => x.Id.Equals(source.Subject.Id)
                );
            }

            if (!(source.Grade is null))
            {
                Result.Grade = db.Grades.FirstOrDefault
                (
                    x => x.Id.Equals(source.Grade.Id)
                );
            }


            return Result;
        }

        public static ResultDTO Map(Result source)
        {
            if (source is null)
                return null;


            var Result = new ResultDTO
            {
                Id = source.Id,
                ObtainedMarks=source.ObtainedMarks
            };
            if (!(source.Course is null))
                Result.Course = CourseMapper.Map(source.Course);

            if (!(source.Student is null))
                Result.Student = StudentMapper.Map(source.Student);

            if (!(source.Subject is null))
                Result.Subject = SubjectMapper.Map(source.Subject);
            
            if (!(source.Grade is null))
                Result.Grade = GradeMapper.Map(source.Grade);

            return Result;
        }
    }
}