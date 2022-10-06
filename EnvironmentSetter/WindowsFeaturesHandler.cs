using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Dism;
using Microsoft.Web.Administration;

namespace EnvironmentSetter
{
    static class WindowsFeaturesHandler
    {
        private static readonly List<string> features = new List<string>()
        {   
            "IIS-WebServerRole",
            "IIS-WebServer",
            "IIS-CommonHttpFeatures",
            "IIS-HttpErrors",
            "IIS-HttpRedirect",
            "IIS-ApplicationDevelopment",
            "IIS-Security",
            "IIS-RequestFiltering",
            "IIS-HttpLogging",
            "IIS-LoggingLibraries",
            "IIS-RequestMonitor",
            "IIS-HttpTracing",
            "IIS-HttpCompressionDynamic",
            "IIS-WebServerManagementTools",
            "IIS-ManagementScriptingTools",
            "IIS-IIS6ManagementCompatibility",
            "IIS-Metabase",
            "IIS-StaticContent",
            "IIS-DefaultDocument",
            "IIS-DirectoryBrowsing",
            "IIS-WebDAV",
            "IIS-WebSockets",
            "IIS-ApplicationInit",
            "IIS-ASPNET",
            "IIS-ASPNET45",
            "IIS-HttpCompressionStatic",
            "IIS-ManagementConsole",
            "IIS-ManagementService",
            "IIS-WMICompatibility",
            "IIS-WindowsAuthentication",
            "IIS-ODBCLogging",
        };
        public static void EnableFeatures()
        {
            var installedFeatures = GetInstalledFeatures();

            foreach (var feature in features)
            {
                if (!installedFeatures.Contains(feature))
                {
                    EnableFeature(feature);
                }
            }
        }

        private static IEnumerable<string> GetInstalledFeatures()
        {
            var installedFeatures = new List<string>();
            DismApi.Initialize(DismLogLevel.LogErrorsWarningsInfo);

            try
            {
                using (var session = DismApi.OpenOnlineSessionEx(new DismSessionOptions() { }))
                {
                    var features = DismApi.GetFeatures(session);

                    foreach (var feature in features)
                    {
                        if (feature.State == DismPackageFeatureState.Installed)
                            installedFeatures.Add(feature.FeatureName);
                    }
                }
                
            }
            finally
            {
                DismApi.Shutdown();
            }

            return installedFeatures;
        }

        private static void EnableFeature(string featureName)
        {
            DismApi.Initialize(DismLogLevel.LogErrorsWarningsInfo);
            try
            {
                using (var session = DismApi.OpenOnlineSession())
                {
                    DismApi.EnableFeature(session, featureName, false, true, null, progress =>
                    {
                        Console.SetCursorPosition(Console.CursorLeft, Console.CursorTop);
                        Console.Write($"{progress.Total} / {progress.Current}");
                    });
                    Console.WriteLine();
                }
            }
            finally
            {
                DismApi.Shutdown();
            }
        }
    }

}
