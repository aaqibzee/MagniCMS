using System;
using System.Linq;
using Microsoft.Web.Administration;

namespace EnvironmentSetter
{
    static class IISHandler
    {
       public static void CreateIISApplication()
        {
            try
            {
                string webAppName= "MagniCollegeManagementSystem",
                    siteName = "Test Magni",
                    applicationPoolName = "Test Magni",
                    host = "magnicmc.com",
                    ipAddress = "*",
                    bindinginfo = ipAddress + ":80:" + host,
                    physcialPath = AppDomain.CurrentDomain.BaseDirectory + "..\\..\\..\\"+ webAppName,
                    bindingProtocol = "http",
                    toDelete = "EnvironmentSetter\\bin\\Debug\\..\\..\\..\\";

                ServerManager serverMgr = new ServerManager();
                physcialPath = physcialPath.Replace(toDelete, "");

                if (serverMgr.ApplicationPools.FirstOrDefault(x => x.Name.Equals(applicationPoolName)) == null)
                {
                    ApplicationPool pool = serverMgr.ApplicationPools.Add(applicationPoolName);
                    serverMgr.CommitChanges();
                    Console.WriteLine("Pool Added Successfully");
                }
                else
                {
                    Console.WriteLine("Application pool already exists. Skipping this part");
                }


                if (serverMgr.Sites.FirstOrDefault(x => x.Name.Equals(siteName)) == null)
                {
                    var site = serverMgr.Sites.Add(siteName, bindingProtocol, bindinginfo, physcialPath);
                    site.ApplicationDefaults.ApplicationPoolName = applicationPoolName;
                    site.TraceFailedRequestsLogging.Enabled = true;
                    site.TraceFailedRequestsLogging.Directory = "C:\\inetpub\\" + siteName + "\\site";
                    serverMgr.CommitChanges();
                    Console.WriteLine("Site Added Successfully");
                }
                else
                {
                    Console.WriteLine("Site already exist. Skipping this part");
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine("Error occurred while adding the site. Error:\n" + exception.Message);
            }
        }
    }
}
