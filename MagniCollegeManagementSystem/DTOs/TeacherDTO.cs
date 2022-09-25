using System.Collections.Generic;

namespace MagniCollegeManagementSystem.DTOs
{
    public class TeacherDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public List<int> Students { get; set; }
        public List<int> Subjects { get; set; }
        public List<int> Courses { get; set; }
    }
}