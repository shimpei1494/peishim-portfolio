import { ImageResponse } from "next/og";

export const alt = "peishim.dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#faf8f4";
const INK = "#2a2733";
const ACCENT = "#9a6fd0";
const MUTED = "#6b6675";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: CREAM,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 32,
          fontWeight: 600,
          color: ACCENT,
          marginBottom: 24,
        }}
      >
        $ hello, I am
      </div>
      <div style={{ display: "flex", fontSize: 168, fontWeight: 900, lineHeight: 1, color: INK }}>
        PEISHIM
        <span style={{ color: ACCENT }}>.</span>
      </div>
      <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: INK, marginTop: 40 }}>
        Web Engineer
      </div>
      <div style={{ display: "flex", fontSize: 28, color: MUTED, marginTop: 20 }}>
        TypeScript · Next.js · React · Python · Azure · AI
      </div>
    </div>,
    { ...size },
  );
}
