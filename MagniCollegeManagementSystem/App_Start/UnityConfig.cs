using System.Web.Http;
using DataAccess.Interfaces;
using Unity;
using System.Data.Entity;
using System.Web;
using DataAccess.DatabseContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using MagniCollegeManagementSystem.App_Start;
using MagniCollegeManagementSystem.Common;
using Unity.Lifetime;

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
        }
    }
}