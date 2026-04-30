import React, { useState } from "react";

export default function Contact() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="contact" style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)", borderTop: "1px solid #1A1A1A" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "32px" }}>
          Contact
        </p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4.5vw, 48px)", color: "#FAFAFA", letterSpacing: "-0.03em", marginBottom: "48px", lineHeight: 1.1 }}>
          Building Something? Let's Talk.
        </h2>
        <a
          href="mailto:bruno@bspgroup.nl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "clamp(20px, 2.2vw, 24px)", color: "#FAFAFA", letterSpacing: "-0.01em", textDecoration: hovered ? "underline" : "none", transition: "text-decoration 200ms ease", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
        >
          bruno@bspgroup.nl
        </a>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", color: "#888888", marginTop: "16px" }}>
          General inquiries · Amsterdam, Netherlands
        </p>
      </div>
    </section>
  );
}
