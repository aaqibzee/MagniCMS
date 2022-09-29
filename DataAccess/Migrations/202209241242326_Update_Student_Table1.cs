namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Student_Table1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "FirstName", c => c.String());
            AddColumn("dbo.Students", "LastName", c => c.String());
            AddColumn("dbo.Students", "Gender", c => c.String());
            AddColumn("dbo.Students", "Address", c => c.String());
            AddColumn("dbo.Students", "ContactNumber", c => c.String());
            DropColumn("dbo.Students", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "Name", c => c.String());
            DropColumn("dbo.Students", "ContactNumber");
            DropColumn("dbo.Students", "Address");
            DropColumn("dbo.Students", "Gender");
            DropColumn("dbo.Students", "LastName");
            DropColumn("dbo.Students", "FirstName");
        }
    }
}
