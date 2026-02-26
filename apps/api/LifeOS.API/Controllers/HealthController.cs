using System.Net;
using LifeOS.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace LifeOS.API.Controllers;

[ApiController]
[Route("Health")]
public class HealthController : ControllerBase
{
    private readonly LifeOSDbContext _db;

    public HealthController(LifeOSDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Healthy");
    }

    [HttpGet("db")]
    public async Task<IActionResult> Getdb()
    {
        var canConnect = await _db.Database.CanConnectAsync();
        if (!canConnect)
            return StatusCode(500, "Cannot connect to database");

        return Ok("DB OK");
    }
}