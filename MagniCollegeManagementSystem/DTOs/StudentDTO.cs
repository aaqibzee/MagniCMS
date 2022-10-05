﻿using System.Collections.Generic;

namespace MagniCollegeManagementSystem.DTOs
{
    public class StudentDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Birthday { get; set; }
        public string RegisterationNumber { get; set; }
        public GradeDTO Grade { get; set; }
        public CourseDTO Course { get; set; }
        public List<int> Subjects { get; set; }
        public List<int> Teachers { get; set; }
    }
}