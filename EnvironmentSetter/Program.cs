using Microsoft.Web.Administration;
using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace EnvironmentSetter
{
    class Program
    {
        static void Main(string[] args)
        {
            if (true)
            {
                WindowsFeaturesHandler.EnableFeatures();
            }
            else
            {


                Console.WriteLine("<<<<Environment Setup Started>>>>\n\n");

                Console.WriteLine("Step 1/5 started");
                Console.WriteLine("Creating DB");
                CreateDatabase();
                Console.WriteLine("Step 1/5 completed successfully\n\n");

                Console.WriteLine("Step 2/5 started");
                Console.WriteLine("Creating IIS Application");
                CreateIISApplication();
                Console.WriteLine("IIS Application created successfully");
                Console.WriteLine("Step 2/5 completed successfully\n\n");

                Console.WriteLine("Step 3/5 started");
                Console.WriteLine("Logging entry for the site in host file");
                CreateHostFileEntry();
                Console.WriteLine("Logged entry for the site in host file successfully");
                Console.WriteLine("Step 3/5 completed successfully\n\n");

                Console.WriteLine("Step 4/5 started");
                Console.WriteLine("Creating IIS Identity Pool login in sql server");
                CreateIISLoginOnSqlServer();
                Console.WriteLine("Created IIS Identity Pool login in sql server successfully");
                Console.WriteLine("Step 4/5 completed successfully\n\n");

                Console.WriteLine("Step 5/5 started");
                Console.WriteLine("Launching Website");
                LaunchWebsite();
                Console.WriteLine("Launched Website");
                Console.WriteLine("Step 5/5 completed successfully");

                Console.WriteLine("<<<<Environment Setup Completed Successfully>>>>\n\n Press any key to exit");
            }

            Console.ReadKey();

        }
        static void CreateDatabase()
        {
            DatabaseHandler.CreateDatabase();
        }

        static void CreateIISApplication()
        {
           IISHandler.CreateIISApplication();
        }

        static void CreateHostFileEntry()
        {
           HostHandler.CreateHostFileEntry();
        }

        static void CreateIISLoginOnSqlServer()
        {
            DatabaseHandler.AddIISAppPoolLogin();
        }

        static void LaunchWebsite()
        {
            System.Diagnostics.Process.Start("http://"+Constants.Host);
        }

    }
}
