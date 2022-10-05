namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Table_Teacher : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "Name", c => c.String());
            DropColumn("dbo.Teachers", "FirstName");
            DropColumn("dbo.Teachers", "LastName");
            DropColumn("dbo.Teachers", "Gender");
            DropColumn("dbo.Teachers", "Address");
            DropColumn("dbo.Teachers", "ContactNumber");
            DropColumn("dbo.Teachers", "Email");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Teachers", "Email", c => c.String());
            AddColumn("dbo.Teachers", "ContactNumber", c => c.String());
            AddColumn("dbo.Teachers", "Address", c => c.String());
            AddColumn("dbo.Teachers", "Gender", c => c.String());
            AddColumn("dbo.Teachers", "LastName", c => c.String());
            AddColumn("dbo.Teachers", "FirstName", c => c.String());
            DropColumn("dbo.Teachers", "Name");
        }
    }
}
