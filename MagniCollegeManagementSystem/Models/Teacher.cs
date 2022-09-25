using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagniCollegeManagementSystem.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public virtual ICollection<Student> Students { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
    }
}