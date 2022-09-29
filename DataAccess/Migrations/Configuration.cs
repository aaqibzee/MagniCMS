
using DataAccess.DatabseContexts;
using System.Data.Entity.Migrations;
namespace MagniCollegeManagementSystem.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<MagniDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MagniDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
        }
    }
}
