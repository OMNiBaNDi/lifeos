using LifeOS.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using LifeOS.Domain.Habits;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Register database context
builder.Services.AddDbContext<LifeOSDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/*
 CORS configuration
 This allows the React frontend (running on localhost:5173)
 to call the API during development.
*/
builder.Services.AddCors(options =>
{
    options.AddPolicy("dev",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:5173") // frontend dev server
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

/*
 Enable the CORS policy we defined above
*/
app.UseCors("dev");

// app.UseHttpsRedirection();

// Root endpoint
app.MapGet("/", () => "LifeOS API running");

app.MapGet("/habits", async (LifeOSDbContext dbContext) =>
{
    var habits = await dbContext.Habits
        .OrderBy(h => h.Name)
        .Select(h => new
        {
            h.Id,
            h.Name,
            h.Description,
            h.CreatedAtUtc
        })
        .ToListAsync();

    return Results.Ok(habits);
});

app.MapPost("/habits", async (HabitCreateRequest request, LifeOSDbContext dbContext) =>
{
    var habit = new Habit(request.Name, request.Description);

    dbContext.Habits.Add(habit);
    await dbContext.SaveChangesAsync();

    return Results.Created($"/habits/{habit.Id}", new
    {
        habit.Id,
        habit.Name,
        habit.Description,
        habit.CreatedAtUtc
    });
});

// Map controllers
app.MapControllers();

app.Run();

public record HabitCreateRequest(string Name, string? Description);