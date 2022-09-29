namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Course_Table_And_Subject_Table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "TotalCreditHours", c => c.Int(nullable: false));
            AddColumn("dbo.Subjects", "CreditHours", c => c.Int(nullable: false));
            DropColumn("dbo.Courses", "NumberOfSubjectsAllowed");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "NumberOfSubjectsAllowed", c => c.Int(nullable: false));
            DropColumn("dbo.Subjects", "CreditHours");
            DropColumn("dbo.Courses", "TotalCreditHours");
        }
    }
}
