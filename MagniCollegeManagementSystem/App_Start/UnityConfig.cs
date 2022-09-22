using AutoMapper;
using MagniCollegeManagementSystem.APIController;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace MagniCollegeManagementSystem
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

            var mapperConfigs = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<StudentDTO, Student>();
                cfg.CreateMap<SubjectDTO, Subject>();
                cfg.CreateMap<CourseDTO, Course>();
                cfg.CreateMap<GradeDTO, Grade>();
                cfg.CreateMap<TeacherDTO, Teacher>();

                cfg.CreateMap<Student,StudentDTO>();
                cfg.CreateMap<Subject,SubjectDTO>();
                cfg.CreateMap<Course,CourseDTO>();
                cfg.CreateMap<Grade,GradeDTO>();
                cfg.CreateMap<Teacher,TeacherDTO>();
            }
               );

            IMapper mapper = mapperConfigs.CreateMapper();
            container.RegisterInstance(mapper);
            container.RegisterType<MagniDBContext, MagniDBContext>();
            container.RegisterType<CoursesController, CoursesController>();
        }
    }
}