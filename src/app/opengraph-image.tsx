import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Digital Energy Holdings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #050608 0%, #0b0f17 48%, #17120a 100%)",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(214, 178, 94, 0.42)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#d6b25e", fontSize: 28 }}>Digital Energy Holdings</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.02 }}>
              Where compute becomes capital.
            </div>
            <div style={{ color: "#cbd5e1", fontSize: 30, lineHeight: 1.35, width: 880 }}>
              IP, AI systems, digital rights, shared services, and governed digital asset infrastructure.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
