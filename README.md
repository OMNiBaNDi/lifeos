# LifeOS

LifeOS is a progression-based life operating system built as a serious engineering project.

The goal is to design a structured, RPG-inspired progression engine that models habits, guilds, ranks, streaks, and long-term growth — while maintaining clean enterprise architecture.

---

## 🚀 Tech Stack

Backend:
- .NET 8 (LTS)
- Clean Architecture / DDD structure
- Entity Framework Core 8
- PostgreSQL (Docker)

Frontend (planned):
- React
- Tailwind CSS
- Dark, clean, "system UI" aesthetic

Infrastructure:
- Docker (PostgreSQL)
- Azure (planned deployment target)

---

## 🏗 Architecture

The backend follows a layered structure:

- **Domain** — Core business logic (entities, rules, value objects)
- **Application** — Use cases (commands, handlers)
- **Infrastructure** — Database, EF Core, external concerns
- **API** — HTTP layer (controllers, DI setup)

This ensures:
- Clear separation of concerns
- Testability
- Long-term maintainability
- Production-ready structure

---

## 🐘 Running Locally

### 1. Start PostgreSQL (Docker)

From the repo root:

```bash
docker compose -f infra/docker-compose.yml up -d