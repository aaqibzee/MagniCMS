namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Update_Tables_Teacher_Student_Result : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Results",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Grade_Id = c.Int(),
                        Student_Id = c.Int(),
                        Subject_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Grades", t => t.Grade_Id)
                .ForeignKey("dbo.Students", t => t.Student_Id)
                .ForeignKey("dbo.Subjects", t => t.Subject_Id)
                .Index(t => t.Grade_Id)
                .Index(t => t.Student_Id)
                .Index(t => t.Subject_Id);
            
            AddColumn("dbo.Students", "RegistrationNumber", c => c.String());
            AddColumn("dbo.Students", "Birthday", c => c.DateTime(nullable: false, storeType: "date"));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Results", "Subject_Id", "dbo.Subjects");
            DropForeignKey("dbo.Results", "Student_Id", "dbo.Students");
            DropForeignKey("dbo.Results", "Grade_Id", "dbo.Grades");
            DropIndex("dbo.Results", new[] { "Subject_Id" });
            DropIndex("dbo.Results", new[] { "Student_Id" });
            DropIndex("dbo.Results", new[] { "Grade_Id" });
            DropColumn("dbo.Students", "Birthday");
            DropColumn("dbo.Students", "RegistrationNumber");
            DropTable("dbo.Results");
        }
    }
}
