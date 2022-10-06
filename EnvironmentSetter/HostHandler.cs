using System;
using System.IO;
using System.Linq;
using Microsoft.Web.Administration;

namespace EnvironmentSetter
{
    static class HostHandler
    {
        public static void CreateHostFileEntry()
        {
            string ip = "127.0.0.1",
                host = Constants.Host,
                entry = ip + " " + host;

            if (ModifyHostsFile(entry))
            {
                Console.WriteLine("Host File modified successfully");
            }
        }

        private static bool ModifyHostsFile(string entry)
        {
            try
            {
                if (IsEntryExists(entry))
                {
                    Console.WriteLine("Host file is already modified, skipping this part.");
                    return false;
                }
                using (StreamWriter streamWriter = File.AppendText(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.System), @"drivers\etc\hosts")))
                {
                    streamWriter.WriteLine(entry);
                    return true;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("An exception occurred while modifying host file. Exception:" + ex.Message);
                return false;
            }
        }

        private static bool IsEntryExists(string entry)
        {

            bool isMatch = false;
            string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.System), @"drivers\etc\hosts");
            using (StreamReader sr = File.OpenText(path))
            {
                string[] lines = File.ReadAllLines(path);

                for (int x = 0; x < lines.Length - 1; x++)
                {
                    if (entry == lines[x])
                    {
                        sr.Close();
                        isMatch = true;
                    }
                }
                if (!isMatch)
                {
                    sr.Close();
                }
            }

            return isMatch;
        }
    }
}
