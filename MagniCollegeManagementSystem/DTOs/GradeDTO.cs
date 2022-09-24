using System.Collections.Generic;

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