namespace TyresStore.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Basket", "Price", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Basket", "Price");
        }
    }
}
