using System.Collections.Generic;

namespace MagniCollegeManagementSystem.DTOs
{
    public class StudentDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public int RemainingCreditHours { get; set; }
        public GradeDTO Grade { get; set; }
        public CourseDTO Course { get; set; }
        public List<int> Subjects { get; set; }
        public List<int> Teachers { get; set; }
    }
}