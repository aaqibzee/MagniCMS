namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Table_Student : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "Name", c => c.String());
            DropColumn("dbo.Students", "FirstName");
            DropColumn("dbo.Students", "LastName");
            DropColumn("dbo.Students", "Gender");
            DropColumn("dbo.Students", "Address");
            DropColumn("dbo.Students", "ContactNumber");
            DropColumn("dbo.Students", "RemainingCreditHours");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "RemainingCreditHours", c => c.Int(nullable: false));
            AddColumn("dbo.Students", "ContactNumber", c => c.String());
            AddColumn("dbo.Students", "Address", c => c.String());
            AddColumn("dbo.Students", "Gender", c => c.String());
            AddColumn("dbo.Students", "LastName", c => c.String());
            AddColumn("dbo.Students", "FirstName", c => c.String());
            DropColumn("dbo.Students", "Name");
        }
    }
}
