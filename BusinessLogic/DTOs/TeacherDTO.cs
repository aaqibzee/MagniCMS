using System.Collections.Generic;
namespace BusinessLogic.DTOs
{
    public class TeacherDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Birthday { get; set; }
        public decimal Salary { get; set; }
        public List<int> Students { get; set; }
        public List<int> Subjects { get; set; }
        public List<int> Courses { get; set; }
    }
}