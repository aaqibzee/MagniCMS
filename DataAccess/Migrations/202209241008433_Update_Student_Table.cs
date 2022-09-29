namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Student_Table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "RemainingCreditHours", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Students", "RemainingCreditHours");
        }
    }
}
