namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Table_Student1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "RegisterationNumber", c => c.String());
            DropColumn("dbo.Students", "RegistrationNumber");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "RegistrationNumber", c => c.String());
            DropColumn("dbo.Students", "RegisterationNumber");
        }
    }
}
