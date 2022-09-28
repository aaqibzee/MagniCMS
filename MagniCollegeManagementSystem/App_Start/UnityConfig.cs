using AutoMapper;
using MagniCollegeManagementSystem.APIController;
using MagniCollegeManagementSystem.DatabseContexts;
using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;
using System.Web.Http;
using MagniCollegeManagementSystem.Hubs;
using Microsoft.AspNet.SignalR;
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


            container.RegisterType<MagniDBContext, MagniDBContext>();
            container.RegisterType<CoursesController, CoursesController>();
        }
    }
}