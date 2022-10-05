﻿using System.Collections.Generic;

namespace MagniCollegeManagementSystem.DTOs
{
    public class GradeDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int StartingMarks { get; set; }
        public int EndingMarks { get; set; }
        //public SubjectDTO Subject { get; set; }
        public CourseDTO Course { get; set; }
        public List<int> Students { get; set; }
    }
}