namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Tables_Updated_Result_Grade : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Results", "Course_Id", c => c.Int());
            AddColumn("dbo.Grades", "Subject_Id", c => c.Int());
            CreateIndex("dbo.Results", "Course_Id");
            CreateIndex("dbo.Grades", "Subject_Id");
            AddForeignKey("dbo.Results", "Course_Id", "dbo.Courses", "Id");
            AddForeignKey("dbo.Grades", "Subject_Id", "dbo.Subjects", "Id");
            DropColumn("dbo.Grades", "SubjectId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Grades", "SubjectId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Grades", "Subject_Id", "dbo.Subjects");
            DropForeignKey("dbo.Results", "Course_Id", "dbo.Courses");
            DropIndex("dbo.Grades", new[] { "Subject_Id" });
            DropIndex("dbo.Results", new[] { "Course_Id" });
            DropColumn("dbo.Grades", "Subject_Id");
            DropColumn("dbo.Results", "Course_Id");
        }
    }
}
