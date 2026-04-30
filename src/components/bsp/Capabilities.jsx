import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Sourcing & Supplier Development",
    description: "We identify, qualify, and onboard manufacturing partners that meet European certification, quality, and sustainability standards.",
  },
  {
    number: "02",
    title: "Product Development",
    description: "From concept to first production run — material selection, technical specs, sample iteration, and pre-shipment quality control.",
  },
  {
    number: "03",
    title: "Market Entry",
    description: "EU compliance, certification pathways (CE, REACH, EN standards), and launch operations for DTC and retail channels.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "16px" }}>
          Capabilities
        </p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: "clamp(48px, 7vw, 80px)", lineHeight: 1.1 }}>
          How We Work.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderTop: "1px solid #2A2A2A", paddingTop: "32px" }}
            >
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", color: "#888888", marginBottom: "24px", fontVariantNumeric: "tabular-nums" }}>
                {cap.number}
              </p>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "22px", color: "#FAFAFA", letterSpacing: "-0.01em", marginBottom: "16px", lineHeight: 1.2 }}>
                {cap.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", color: "#888888", lineHeight: 1.6 }}>
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
