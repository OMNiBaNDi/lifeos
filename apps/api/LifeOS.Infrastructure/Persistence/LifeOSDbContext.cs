using Microsoft.EntityFrameworkCore;


namespace LifeOS.Infrastructure.Persistence;

// The bridge between domain model and PostgreSQL
public class LifeOSDbContext : DbContext
{
   public LifeOSDbContext(DbContextOptions<LifeOSDbContext> options) : base(options)
    {
        
    } 
}