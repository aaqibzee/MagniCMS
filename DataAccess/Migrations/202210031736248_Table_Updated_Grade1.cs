namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Table_Updated_Grade1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Grades", "StartingMarks", c => c.Int(nullable: false));
            AddColumn("dbo.Grades", "EndingMarks", c => c.Int(nullable: false));
            DropColumn("dbo.Grades", "Marks");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Grades", "Marks", c => c.Int(nullable: false));
            DropColumn("dbo.Grades", "EndingMarks");
            DropColumn("dbo.Grades", "StartingMarks");
        }
    }
}
