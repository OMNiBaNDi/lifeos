namespace LifeOS.Domain.Habits;

public class Habit
{
    public Guid Id { get; private set; }
    public string Name { get; private set; } = null!;
    public string? Description { get; private set; }
    public DateTime CreatedAtUtc { get; private set; }

    private Habit()
    {
    }

    public Habit(string name, string? description = null)
    {
        Id = Guid.NewGuid();
        Name = name;
        Description = description;
        CreatedAtUtc = DateTime.UtcNow;
    }
}