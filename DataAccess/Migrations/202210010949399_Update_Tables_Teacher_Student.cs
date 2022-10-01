namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Tables_Teacher_Student : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.TeacherStudents", "Teacher_Id", "dbo.Teachers");
            DropForeignKey("dbo.TeacherStudents", "Student_Id", "dbo.Students");
            DropIndex("dbo.TeacherStudents", new[] { "Teacher_Id" });
            DropIndex("dbo.TeacherStudents", new[] { "Student_Id" });
            DropTable("dbo.TeacherStudents");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.TeacherStudents",
                c => new
                    {
                        Teacher_Id = c.Int(nullable: false),
                        Student_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Teacher_Id, t.Student_Id });
            
            CreateIndex("dbo.TeacherStudents", "Student_Id");
            CreateIndex("dbo.TeacherStudents", "Teacher_Id");
            AddForeignKey("dbo.TeacherStudents", "Student_Id", "dbo.Students", "Id", cascadeDelete: true);
            AddForeignKey("dbo.TeacherStudents", "Teacher_Id", "dbo.Teachers", "Id", cascadeDelete: true);
        }
    }
}
