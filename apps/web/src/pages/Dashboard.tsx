import { useEffect, useState } from "react";
import AppShell from "../components/AppShell";
import BackendStatus from "../components/BackendStatus";
import PlayerCard from "../components/PlayerCard";

type Habit = {
  id: string;
  name: string;
  description: string | null;
  createdAtUtc: string;
};

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: "24px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        minHeight: "180px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "16px",
          fontSize: "18px",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loadingHabits, setLoadingHabits] = useState(true);
  const [habitsError, setHabitsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        setLoadingHabits(true);
        setHabitsError(null);

        const response = await fetch("http://localhost:5069/habits");

        if (!response.ok) {
          throw new Error(`Failed to fetch habits: ${response.status}`);
        }

        const data: Habit[] = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Error fetching habits:", error);
        setHabitsError("Could not load daily quests.");
      } finally {
        setLoadingHabits(false);
      }
    };

    fetchHabits();
  }, []);

  return (
    <AppShell
      title="Awakening Chamber"
      subtitle="The first LifeOS dashboard shell. Backend connection is live, and the foundation for guilds, quests, and progression is now in place."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "20px",
          alignItems: "start",
        }}
      >
        <PlayerCard />

        <div style={{ display: "grid", gap: "20px" }}>
          <BackendStatus />

          <Panel title="Daily Quests">
            {loadingHabits ? (
              <div style={{ color: "rgba(255,255,255,0.65)" }}>
                Loading quests...
              </div>
            ) : habitsError ? (
              <div style={{ color: "#ff8a8a" }}>{habitsError}</div>
            ) : habits.length === 0 ? (
              <div style={{ color: "rgba(255,255,255,0.65)" }}>
                No habits found.
              </div>
            ) : (
              <div style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                {habits.map((habit) => (
                  <div key={habit.id}>• {habit.name}</div>
                ))}
              </div>
            )}
          </Panel>

          <Panel title="System Notice">
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
              }}
            >
              Next step: replace placeholder data with a real player profile
              contract from the backend.
            </p>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
