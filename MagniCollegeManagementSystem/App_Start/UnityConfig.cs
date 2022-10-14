using System.Web.Http;
using DataAccess.Interfaces;
using Unity;
using DataAccess.DatabseContexts;
using BusinessLogic.Implementations;
using BusinessLogic.Interfaces;
using MagniCollegeManagementSystem.App_Start;
using MagniCollegeManagementSystem.Common;
using MagniCollegeManagementSystem.Hubs;
using Microsoft.AspNet.SignalR;

namespace MagniCollegeManagementSystem
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            container.RegisterType<MagniDBContext, MagniDBContext>(new PerRequestLifetimeManagerCustom());
            container.RegisterType<IMagniLogger, MagniLogger>();

            container.RegisterType<IStudentRepository, StudentRepository>();
            container.RegisterType<ICourseRepository, CourseRepository>();
            container.RegisterType<ISubjectRepository, SubjectRepository>();
            container.RegisterType<ITeacherRepository, TeacherRepository>();
            container.RegisterType<IGradeRepository, GradeRepository>();
            container.RegisterType<IResultRepository, ResultRepository>();

            container.RegisterType<ICourseMapper, CourseMapper>();
            container.RegisterType<IGradeMapper, GradeMapper>();
            container.RegisterType<ITeacherMapper, TeacherMapper>();
            container.RegisterType<ISubjectMapper, SubjectMapper>();
            container.RegisterType<IStudentMapper, StudentMapper>();
            container.RegisterType<IResultMapper, ResultMapper>();

            container.RegisterType<IStudentManager, StudentManager>();
            container.RegisterType<ITeacherManager, TeacherManager>();
            container.RegisterType<ISubjectManager, SubjectManager>();
            container.RegisterType<ICourseManager, CourseManager>();
            container.RegisterType<IGradeManager, GradeManager>();
            container.RegisterType<IResultManager, ResultManager>();
        }
    }
}