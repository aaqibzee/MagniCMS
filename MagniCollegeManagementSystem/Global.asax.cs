using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using AutoMapper;
using MagniCollegeManagementSystem.Models;
using MagniCollegeManagementSystem.DTOs;

namespace MagniCollegeManagementSystem
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //BundleConfig.RegisterBundles(BundleTable.Bundles);

            HttpConfiguration config = GlobalConfiguration.Configuration;

            config.Formatters.JsonFormatter
                .SerializerSettings
                .ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            UnityConfig.RegisterComponents();
        }
    }
}
