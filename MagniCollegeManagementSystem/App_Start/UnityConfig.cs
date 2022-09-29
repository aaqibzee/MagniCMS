using MagniCollegeManagementSystem.APIController;
using System.Web.Http;
using DataAccess.Interfaces;
using Unity;
using Unity.Injection;
using Unity.Lifetime;
using Unity.WebApi;
using System.Configuration;
using DataAccess.DatabseContexts;

namespace MagniCollegeManagementSystem
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            var magniDbContext = new MagniDBContext();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            container.RegisterType<MagniDBContext, MagniDBContext>();

            //container.RegisterInstance(magniDbContext);
            
            container.RegisterType<IStudentRepository, StudentRepository>();
            container.RegisterType<ICourseRepository, CourseRepository>();
            container.RegisterType<ISubjectRepository, SubjectRepository>();
            container.RegisterType<ITeacherRepository, TeacherRepository>();
            container.RegisterType<IGradeRepository, GradeRepository>();
        }
    }
}