import React from "react";

export default function Geography() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "48px" }}>
          Geography
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {/* Europe — Amsterdam HQ */}
          <div style={{ paddingRight: "clamp(0px, 3vw, 48px)", borderRight: "1px solid #2A2A2A" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "16px" }}>
              Europe
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "32px", color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1 }}>
              Amsterdam
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", color: "#888888", lineHeight: 1.6 }}>
              Headquarters. Brand strategy, EU compliance, market entry operations.
            </p>
          </div>
          {/* Asia — China sourcing */}
          <div style={{ paddingLeft: "clamp(0px, 3vw, 48px)" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "16px" }}>
              Asia
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "32px", color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1 }}>
              China
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", color: "#888888", lineHeight: 1.6 }}>
              Sourcing operations & manufacturing partners. Regular travel for trade fairs and supplier visits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
