import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid #1A1A1A",
        padding: "clamp(32px, 5vw, 48px) clamp(24px, 5vw, 64px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span
              style={{
                display: "block",
                width: "6px",
                height: "6px",
                backgroundColor: "#FAFAFA",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#FAFAFA",
              }}
            >
              BSP Group
            </span>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "#888888",
            }}
          >
            Brand Development & Sourcing
          </p>
        </div>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "#888888",
            textAlign: "right",
          }}
        >
          © 2026 BSP Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
