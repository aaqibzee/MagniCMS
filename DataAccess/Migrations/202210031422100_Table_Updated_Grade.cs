namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Table_Updated_Grade : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Grades", "Course_Id", c => c.Int());
            CreateIndex("dbo.Grades", "Course_Id");
            AddForeignKey("dbo.Grades", "Course_Id", "dbo.Courses", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Grades", "Course_Id", "dbo.Courses");
            DropIndex("dbo.Grades", new[] { "Course_Id" });
            DropColumn("dbo.Grades", "Course_Id");
        }
    }
}
