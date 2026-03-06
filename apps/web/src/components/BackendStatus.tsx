import { useEffect, useState } from "react";
import { getHealth } from "../api/client";

export default function BackendStatus() {
  const [status, setStatus] = useState("Checking...");
  const [latency, setLatency] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth()
      .then((res) => {
        setStatus("Online");
        setLatency(res.latency);
        setError(null);
      })
      .catch((err) => {
        setStatus("Offline");
        setError(err.message);
      });
  }, []);

  return (
    <div
      style={{
        padding: "24px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h3>LifeOS Backend</h3>

      <p>Status: {status}</p>

      {latency && <p>Latency: {latency} ms</p>}

      {error && <p style={{ color: "#ff6b6b" }}>Error: {error}</p>}
    </div>
  );
}
