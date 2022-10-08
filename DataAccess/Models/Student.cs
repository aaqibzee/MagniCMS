using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Student
    {
        public Student(Student student)
        {
            Id = student.Id;
            Name = student.Name;
            RegisterationNumber = student.RegisterationNumber;
            Birthday = student.Birthday;
            Subjects = student.Subjects;
            Results = student.Results;
            Course = student.Course;
        }

        public Student()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string RegisterationNumber { get; set; }
        [Column(TypeName = "Date")]
        public DateTime Birthday { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
        public virtual ICollection<Result> Results { get; set; }
        public virtual  Course Course { get; set; }
    }
}