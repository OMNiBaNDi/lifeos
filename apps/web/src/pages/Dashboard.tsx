import AppShell from "../components/AppShell";
import BackendStatus from "../components/BackendStatus";
import PlayerCard from "../components/PlayerCard";

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
            <div style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              <div>• Cardio</div>
              <div>• Mobility</div>
              <div>• Coding</div>
              <div>• Reading</div>
            </div>
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
