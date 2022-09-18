using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagniCollegeManagementSystem.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public virtual ICollection<Student> Students { get; set; }
        public Teacher Teacher { get; set; }
        public Course Course { get; set; }
    }
}