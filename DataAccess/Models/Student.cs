using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public int RemainingCreditHours { get; set; }
        public string RegistrationNumber { get; set; }
        [Column(TypeName = "Date")]
        public DateTime Birthday { get; set; }
        public virtual ICollection<Subject> Subjects { get; set; }
        public virtual ICollection<Result> Results { get; set; }
        public virtual  Course Course { get; set; }
    }
}