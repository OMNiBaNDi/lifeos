type AppShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AppShell({ title, subtitle, children }: AppShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a1a1a 0%, #0f0f0f 35%, #090909 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 48px",
        }}
      >
        <header style={{ marginBottom: "32px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            LifeOS
          </p>

          <h1
            style={{
              margin: "8px 0 8px",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "700px",
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </p>
          )}
        </header>

        {children}
      </div>
    </div>
  );
}
