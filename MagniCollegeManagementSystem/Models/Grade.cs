﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MagniCollegeManagementSystem.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Marks { get; set; }
        public int SubjectId { get; set; }

    }
}