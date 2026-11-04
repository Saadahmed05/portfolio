import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — AI & backend engineering`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f2ed",
          color: "#161512",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#68645c" }}>
          <div style={{ width: 12, height: 12, background: "#c44012" }} />
          AI & backend engineering · Hyderabad, India
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 700, lineHeight: 0.9, letterSpacing: -6 }}>
          <span>Saad Khazi</span>
          <span>Ahmed</span>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #161512", paddingTop: 22, fontSize: 28 }}>
          I build AI systems from the data up, and the software that puts them to work.
        </div>
      </div>
    ),
    size,
  );
}
