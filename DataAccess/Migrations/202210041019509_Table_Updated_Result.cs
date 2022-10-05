namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Table_Updated_Result : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Results", "ObtainedMarks", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Results", "ObtainedMarks");
        }
    }
}
