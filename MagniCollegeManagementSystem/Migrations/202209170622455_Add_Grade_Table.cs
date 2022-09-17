namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_Grade_Table : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Grades", "SubjectId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Grades", "SubjectId", c => c.String());
        }
    }
}
