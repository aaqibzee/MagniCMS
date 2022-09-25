namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Teacher_Table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "FirstName", c => c.String());
            AddColumn("dbo.Teachers", "LastName", c => c.String());
            AddColumn("dbo.Teachers", "Gender", c => c.String());
            AddColumn("dbo.Teachers", "Address", c => c.String());
            AddColumn("dbo.Teachers", "ContactNumber", c => c.String());
            AddColumn("dbo.Teachers", "Email", c => c.String());
            DropColumn("dbo.Teachers", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Teachers", "Name", c => c.String());
            DropColumn("dbo.Teachers", "Email");
            DropColumn("dbo.Teachers", "ContactNumber");
            DropColumn("dbo.Teachers", "Address");
            DropColumn("dbo.Teachers", "Gender");
            DropColumn("dbo.Teachers", "LastName");
            DropColumn("dbo.Teachers", "FirstName");
        }
    }
}
