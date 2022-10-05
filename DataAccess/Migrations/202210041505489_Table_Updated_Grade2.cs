namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Table_Updated_Grade2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Grades", "Subject_Id", "dbo.Subjects");
            DropIndex("dbo.Grades", new[] { "Subject_Id" });
            DropColumn("dbo.Grades", "Subject_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Grades", "Subject_Id", c => c.Int());
            CreateIndex("dbo.Grades", "Subject_Id");
            AddForeignKey("dbo.Grades", "Subject_Id", "dbo.Subjects", "Id");
        }
    }
}
