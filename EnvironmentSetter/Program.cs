using System;
using System.Configuration;
using EnvironmentSetter.Common;
using Handlres;

namespace EnvironmentSetter
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("<<<<Environment Setup Started>>>>\n");
            var steps = ConfigurationManager.AppSettings[Constants.ConfigurationStepsKey].Split(',');
            int castedValue;

            foreach (var step in steps)
            {
                if (int.TryParse(step, out castedValue))
                {
                    PerformConfiguration(castedValue);
                }
                else
                {
                    Console.WriteLine("Invalid character" + step + " in app.config against key <ConfigurationSteps>: Please provide a valid step number between  1 to 6\n");
                    PrintStepDescription();
                }

            }

            Console.WriteLine("\n<<<<Environment Setup Completed Successfully>>>>\n\n Press any key to exit");
            Console.ReadKey();

        }

        static void PerformConfiguration(int step)
        {
            switch (step)
            {
                case 1:
                    Console.WriteLine("Step 1 started");
                    Console.WriteLine("Activating necessary windows features for the IIS");
                    EnableWindowsFeatures();
                    Console.WriteLine("Step 1  Ended\n\n");
                    break;
                case 2:
                    Console.WriteLine("Step 2 started");
                    Console.WriteLine("Creating DB");
                    CreateDatabase();
                    Console.WriteLine("Step 2 Ended\n\n");
                    break;
                case 3:
                    Console.WriteLine("Step 3 started");
                    Console.WriteLine("Creating IIS Application");
                    CreateIISApplication();
                    Console.WriteLine("IIS Application created successfully");
                    Console.WriteLine("Step 3 Ended\n\n");
                    break;
                case 4:
                    Console.WriteLine("Step 4 started");
                    Console.WriteLine("Logging entry for the site in host file");
                    CreateHostFileEntry();
                    Console.WriteLine("Logged entry for the site in host file successfully");
                    Console.WriteLine("Step 4 Ended\n\n");
                    break;
                case 5:
                    Console.WriteLine("Step 5 started");
                    Console.WriteLine("Creating IIS Identity Pool login in sql server");
                    CreateIISLoginOnSqlServer();
                    Console.WriteLine("Created IIS Identity Pool login in sql server successfully");
                    Console.WriteLine("Step 5 Ended\n\n");
                    break;
                case 6:
                    Console.WriteLine("Step 6 started");
                    Console.WriteLine("Launching Website");
                    LaunchWebsite();
                    Console.WriteLine("Launched Website");
                    Console.WriteLine("Step 6 Ended");
                    break;
                default:
                    Console.WriteLine("Invalid step number " + step + " in app.config against key <ConfigurationSteps>: Please provide a valid step number between  1 to 6\n");
                    PrintStepDescription();
                    break;
            }

        }

        static void PrintStepDescription()
        {
            Console.WriteLine("1: Windows features activation for the IIS\n" +
                              "2: Creating the DB\n" +
                              "3: Creating applicaiton on IIS\n" +
                              "4: Modifying host file in driver / etc / hosts\n" +
                              "5: Creating a user login on SQL server, to allo IIS app pool, login into DB using Windows Authentication\n" +
                              "6: Launching the configured website\n");
        }
        static void EnableWindowsFeatures()
        {
            WindowsFeaturesHandler.EnableFeatures();
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
            System.Diagnostics.Process.Start("http://" + ConfigurationManager.AppSettings[Constants.HostNameKey]);
        }

    }
}
