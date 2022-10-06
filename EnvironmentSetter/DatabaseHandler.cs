using System;
using System.Data;
using System.Data.SqlClient;

namespace EnvironmentSetter
{
    static class DatabaseHandler
    {
        //TODO: Replace the actual values with test values
        static string dbName = Constants.DbName, query;
        static string applicationPoolName = "Test Magni";
        public static void CreateDatabase()
        {
            query = "IF NOT EXISTS(SELECT* FROM sys.databases WHERE name =  '"+ dbName +"')" +
                    " BEGIN CREATE DATABASE " + dbName + "; END";

            if (ExecuteQuery(query))
            {
                Console.WriteLine("Database created successfully");
            }
            else
            {
                Console.WriteLine("Unable to create database");
            }
        }

        public static void AddIISAppPoolLogin()
        {
            query = "IF SUSER_ID (N'IIS APPPOOL\\" + applicationPoolName + "') IS NULL BEGIN " +
                    "CREATE LOGIN[IIS APPPOOL\\" + applicationPoolName + "] FROM WINDOWS; END  " +
                    "exec sp_defaultdb " +
                    "@loginame = 'IIS APPPOOL\\" + applicationPoolName + "', " +
                    "@defdb = '" + dbName + "'; " +
                    "USE[" + dbName + "] " +
                    "EXEC sp_changedbowner " +
                    "'IIS APPPOOL\\" + applicationPoolName + "'";

            if (ExecuteQuery(query))
            {
                Console.WriteLine("Application Pool login Created Successfully");
            }
            else
            {
                Console.WriteLine("Unable to create Application Pool login");
            }
        }
        private static bool ExecuteQuery(string query)
        {

            var result = false;
            var myConn = new SqlConnection("Data Source=.; integrated security=true; ");
            var myCommand = new SqlCommand(query, myConn);

            try
            {
                myConn.Open();
                myCommand.ExecuteNonQuery();
                result=true;
            }
            catch (System.Exception ex)
            {
                Console.WriteLine("There was error while executing the SQL", ex.ToString());
            }
            finally
            {
                if (myConn.State == ConnectionState.Open)
                {
                    myConn.Close();
                }
            }

            return result;
        }

    }
}
