using System;
using System.Collections.Generic;
using DataAccess.Interfaces;
using DataAccess.Models;
using MagniCollegeManagementSystem.APIController;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Web.Http.Results;
using DataAccess.DatabseContexts;
using MagniCollegeManagementSystem.Common;
using MagniCollegeManagementSystem.DTOs;
using Newtonsoft.Json;

namespace UnitTests.Controller
{
    /// <summary>
    /// Summary description for StudentControllerTests
    /// </summary>
    [TestClass]
    public class StudentControllerTests
    {
        Mock<IStudentRepository> mockStudentRepo;
        Mock<IMagniLogger> mockMagniLogger;
        Mock<MagniDBContext> mockContext = new Mock<MagniDBContext>();
        private StudentsController controller;
        public StudentControllerTests()
        {
            var mockContext = new Mock<MagniDBContext>();
            mockStudentRepo = new Mock<IStudentRepository>();
            mockMagniLogger = new Mock<IMagniLogger>();
            controller = new StudentsController(mockContext.Object, mockStudentRepo.Object, mockMagniLogger.Object);
            controller.Configuration = new System.Web.Http.HttpConfiguration();
            controller.Request = new System.Net.Http.HttpRequestMessage();
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
                    Name = "ABC_1",
                    Birthday = new DateTime(1992,2,12)
                },
                new Student()
                {
                    Id = 2,
                    Name = "ABC_2",
                    Birthday = new DateTime(1995,2,12)
                },
                new Student()
                {
                    Id = 3,
                    Name = "ABC_3",
                    Birthday = new DateTime(1996,2,12)
                }
            };

            var expectedResponse = new List<StudentDTO>()
            {
                new StudentDTO()
                {
                    Id = 1,
                    Name = "ABC_1",
                    Birthday = "1992-02-12"
                },
                new StudentDTO()
                {
                    Id = 2,
                    Name = "ABC_2",
                    Birthday = "1995-02-12"
                },
                new StudentDTO()
                {
                    Id = 3,
                    Name = "ABC_3",
                    Birthday = "1996-02-12"
                }
            };

            var mockSet = new Mock<DbSet<Student>>();
            var source = new CancellationTokenSource();
            var token = source.Token;

            mockSet.Object.AddRange(students);
            mockStudentRepo.Setup(x => x.GetAll()).ReturnsAsync(students);
            
           

            //Act
            var httpActionResult = controller.GetStudents().Result;
            var content = httpActionResult.ExecuteAsync(token).Result.Content;
            var json= content.ReadAsStringAsync().Result;
            var actualResponse = JsonConvert.DeserializeObject<List<StudentDTO>>(json);
            
            var expectedIds = expectedResponse.Select(x=>x.Id).ToList();
            var actualIds = actualResponse.Select(x => x.Id).ToList();

            //Assert
            CollectionAssert.AreEqual(expectedIds, actualIds);
            Assert.IsInstanceOfType(httpActionResult, typeof(OkNegotiatedContentResult<List<StudentDTO>>));
        }
    }
}
