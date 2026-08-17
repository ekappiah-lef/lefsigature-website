import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.legalName} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000d23",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#7efabf", fontSize: 28, letterSpacing: 4, fontWeight: 600 }}>
          LEF SIGNATURE LIMITED
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Engineering the Future Through Technology &amp; Infrastructure.
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#768bb1", fontSize: 30 }}>lefsignature.com</div>
          <div style={{ height: 8, width: 160, background: "#0d5bbc" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
