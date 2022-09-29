namespace MagniCollegeManagementSystem.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_NumberOfSubjectsAllowed_Column_To_Course_Table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "NumberOfSubjectsAllowed", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Courses", "NumberOfSubjectsAllowed");
        }
    }
}
