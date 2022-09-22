using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagniCollegeManagementSystem.DTOs
{
    public class GradeDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Marks { get; set; }
        public int SubjectId { get; set; }
        public List<int> Students { get; set; }
    }
}