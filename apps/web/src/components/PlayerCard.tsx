type Guild = {
  name: string;
  rank: string;
  mmr: number;
};

const guilds: Guild[] = [
  { name: "Iron Oath", rank: "F", mmr: 400 },
  { name: "Arcane Order", rank: "F", mmr: 400 },
  { name: "Order of Thought", rank: "F", mmr: 400 },
  { name: "House of Stillness", rank: "F", mmr: 400 },
];

export default function PlayerCard() {
  return (
    <div
      style={{
        padding: "24px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Player
          </p>
          <h2 style={{ margin: "8px 0 6px", fontSize: "28px" }}>
            Espen Larsen
          </h2>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.65)" }}>
            Initiate of the OMNi Society
          </p>
        </div>

        <div
          style={{
            padding: "10px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Season 1
        </div>
      </div>

      <div
        style={{
          marginBottom: "24px",
          padding: "16px",
          borderRadius: "16px",
          background: "rgba(0,0,0,0.22)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)" }}>
            Global Progress
          </span>
          <span style={{ color: "white" }}>Level 1</span>
        </div>

        <div
          style={{
            height: "10px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "22%",
              height: "100%",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.95) 100%)",
            }}
          />
        </div>

        <p
          style={{
            margin: "10px 0 0",
            fontSize: "13px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          220 / 1000 XP
        </p>
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 14px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Guild Ratings
        </h3>

        <div style={{ display: "grid", gap: "12px" }}>
          {guilds.map((guild) => (
            <div
              key={guild.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 16px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{guild.name}</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Rank {guild.rank}
                </div>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {guild.mmr} MMR
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
