using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagniCollegeManagementSystem.DTOs
{
    public class SubjectDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public virtual TeacherDTO Teacher { get; set; }
        public virtual CourseDTO Course { get; set; }
        public List<int> Students { get; set; }
    }
}