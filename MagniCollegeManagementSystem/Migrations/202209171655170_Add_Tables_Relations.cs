namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_Tables_Relations : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SubjectStudents",
                c => new
                    {
                        Subject_Id = c.Int(nullable: false),
                        Student_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Subject_Id, t.Student_Id })
                .ForeignKey("dbo.Subjects", t => t.Subject_Id, cascadeDelete: true)
                .ForeignKey("dbo.Students", t => t.Student_Id, cascadeDelete: true)
                .Index(t => t.Subject_Id)
                .Index(t => t.Student_Id);
            
            CreateTable(
                "dbo.TeacherCourses",
                c => new
                    {
                        Teacher_Id = c.Int(nullable: false),
                        Course_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Teacher_Id, t.Course_Id })
                .ForeignKey("dbo.Teachers", t => t.Teacher_Id, cascadeDelete: true)
                .ForeignKey("dbo.Courses", t => t.Course_Id, cascadeDelete: true)
                .Index(t => t.Teacher_Id)
                .Index(t => t.Course_Id);
            
            CreateTable(
                "dbo.TeacherStudents",
                c => new
                    {
                        Teacher_Id = c.Int(nullable: false),
                        Student_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Teacher_Id, t.Student_Id })
                .ForeignKey("dbo.Teachers", t => t.Teacher_Id, cascadeDelete: true)
                .ForeignKey("dbo.Students", t => t.Student_Id, cascadeDelete: true)
                .Index(t => t.Teacher_Id)
                .Index(t => t.Student_Id);
            
            AddColumn("dbo.Students", "Course_Id", c => c.Int());
            AddColumn("dbo.Students", "Grade_Id", c => c.Int());
            AddColumn("dbo.Subjects", "Course_Id", c => c.Int());
            AddColumn("dbo.Subjects", "Teacher_Id", c => c.Int());
            CreateIndex("dbo.Students", "Course_Id");
            CreateIndex("dbo.Students", "Grade_Id");
            CreateIndex("dbo.Subjects", "Course_Id");
            CreateIndex("dbo.Subjects", "Teacher_Id");
            AddForeignKey("dbo.Students", "Course_Id", "dbo.Courses", "Id");
            AddForeignKey("dbo.Students", "Grade_Id", "dbo.Grades", "Id");
            AddForeignKey("dbo.Subjects", "Course_Id", "dbo.Courses", "Id");
            AddForeignKey("dbo.Subjects", "Teacher_Id", "dbo.Teachers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Subjects", "Teacher_Id", "dbo.Teachers");
            DropForeignKey("dbo.TeacherStudents", "Student_Id", "dbo.Students");
            DropForeignKey("dbo.TeacherStudents", "Teacher_Id", "dbo.Teachers");
            DropForeignKey("dbo.TeacherCourses", "Course_Id", "dbo.Courses");
            DropForeignKey("dbo.TeacherCourses", "Teacher_Id", "dbo.Teachers");
            DropForeignKey("dbo.SubjectStudents", "Student_Id", "dbo.Students");
            DropForeignKey("dbo.SubjectStudents", "Subject_Id", "dbo.Subjects");
            DropForeignKey("dbo.Subjects", "Course_Id", "dbo.Courses");
            DropForeignKey("dbo.Students", "Grade_Id", "dbo.Grades");
            DropForeignKey("dbo.Students", "Course_Id", "dbo.Courses");
            DropIndex("dbo.TeacherStudents", new[] { "Student_Id" });
            DropIndex("dbo.TeacherStudents", new[] { "Teacher_Id" });
            DropIndex("dbo.TeacherCourses", new[] { "Course_Id" });
            DropIndex("dbo.TeacherCourses", new[] { "Teacher_Id" });
            DropIndex("dbo.SubjectStudents", new[] { "Student_Id" });
            DropIndex("dbo.SubjectStudents", new[] { "Subject_Id" });
            DropIndex("dbo.Subjects", new[] { "Teacher_Id" });
            DropIndex("dbo.Subjects", new[] { "Course_Id" });
            DropIndex("dbo.Students", new[] { "Grade_Id" });
            DropIndex("dbo.Students", new[] { "Course_Id" });
            DropColumn("dbo.Subjects", "Teacher_Id");
            DropColumn("dbo.Subjects", "Course_Id");
            DropColumn("dbo.Students", "Grade_Id");
            DropColumn("dbo.Students", "Course_Id");
            DropTable("dbo.TeacherStudents");
            DropTable("dbo.TeacherCourses");
            DropTable("dbo.SubjectStudents");
        }
    }
}
