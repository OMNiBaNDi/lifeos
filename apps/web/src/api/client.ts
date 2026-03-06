const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function getHealth() {
  const start = performance.now();

  const response = await fetch(`${API_BASE}/health`);
  const latency = Math.round(performance.now() - start);

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";

  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  return { data, latency };
}
