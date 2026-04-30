import React from "react";

export default function About() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px" }}>
        <div style={{ maxWidth: "340px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888" }}>
            About
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2vw, 22px)", color: "#FAFAFA", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            BSP Group is a Netherlands-based brand development studio. We partner with founders to source, develop, and launch design-led consumer products into the European market.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2vw, 22px)", color: "#FAFAFA", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            Our work runs on a single axis — Europe ↔ China. Headquartered in Amsterdam, with manufacturing partners across mainland China.
          </p>
        </div>
      </div>
    </section>
  );
}
