using System;
using System.Collections.Generic;
using DataAccess.Interfaces;
using DataAccess.Models;
using MagniCollegeManagementSystem.APIController;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Data.Entity;
using System.Security.Cryptography.X509Certificates;
using DataAccess.DatabseContexts;

namespace UnitTests.Controller
{
    /// <summary>
    /// Summary description for StudentControllerTests
    /// </summary>
    [TestClass]
    public class StudentControllerTests
    {
        Mock<IStudentRepository> mockStudentRepo;
        Mock<MagniDBContext> mockContext = new Mock<MagniDBContext>();
        private StudentsController controller;
        public StudentControllerTests()
        {
            var mockContext = new Mock<MagniDBContext>();
            mockStudentRepo = new Mock<IStudentRepository>();
            //controller = new StudentsController(mockContext.Object, "MagniCMCSTestLoggerRule");
        }

        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }
        
        [TestCleanup]
        public void CleanUp()
        {
            mockStudentRepo.Reset();
        }
        [TestMethod]
        public void  GetStudents_ShouldReturn_StudentsList_When_Called()
        {
            //Arrange
            var students = new List<Student>()
            {
                new Student()
                {
                    Id = 1,
                    Name = "ABC_1"
                },
                new Student()
                {
                    Id = 2,
                    Name = "ABC_2"
                },
                new Student()
                {
                    Id = 3,
                    Name = "ABC_3"
                }
            };

            var mockSet = new Mock<DbSet<Student>>();
            mockSet.Object.AddRange(students);
            mockStudentRepo.Setup(x => x.GetAll()).ReturnsAsync(students);
            //Act
            var result = controller.GetStudents();
            //Assert
            Assert.AreEqual(result, students);
        }
    }
}
