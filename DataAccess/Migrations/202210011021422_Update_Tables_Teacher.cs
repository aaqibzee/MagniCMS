namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Tables_Teacher : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "Birthday", c => c.DateTime(nullable: false, storeType: "date"));
            AddColumn("dbo.Teachers", "Salary", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Teachers", "Salary");
            DropColumn("dbo.Teachers", "Birthday");
        }
    }
}
