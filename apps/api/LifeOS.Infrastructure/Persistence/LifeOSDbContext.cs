using Microsoft.EntityFrameworkCore;
using LifeOS.Domain.Habits;

namespace LifeOS.Infrastructure.Persistence;

// The bridge between domain model and PostgreSQL
public class LifeOSDbContext : DbContext
{
    public LifeOSDbContext(DbContextOptions<LifeOSDbContext> options) : base(options)
    {

    }

    public DbSet<Habit> Habits => Set<Habit>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(LifeOSDbContext).Assembly);
    }
}