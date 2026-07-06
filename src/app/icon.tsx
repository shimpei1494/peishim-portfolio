import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2a2733",
        borderRadius: 6,
        fontSize: 22,
        fontWeight: 900,
        color: "#faf8f4",
      }}
    >
      P<span style={{ color: "#9a6fd0" }}>.</span>
    </div>,
    { ...size },
  );
}
