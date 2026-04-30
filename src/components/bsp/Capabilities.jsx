import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sourcing & supplier selection",
    description: "We identify qualified manufacturing partners at trade fairs and through direct outreach. EU export experience and certification (CE, REACH, EN standards) are mandatory.",
  },
  {
    number: "02",
    title: "Prototype development",
    description: "Once a supplier is shortlisted, we work together on samples, materials, and technical specifications until the product meets our standards.",
  },
  {
    number: "03",
    title: "Investment round",
    description: "With validated prototypes and confirmed pricing, we raise capital from our investor network to fund the first production run.",
  },
  {
    number: "04",
    title: "Production order",
    description: "Final order volumes are confirmed after the investment round closes. This allows us to place accurate, fully funded purchase orders rather than speculative ones.",
  },
  {
    number: "05",
    title: "Launch & scale",
    description: "First production is launched into the EU market. Strong-performing products move into recurring orders with our manufacturing partners.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "16px" }}>
          Process
        </p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#FAFAFA", letterSpacing: "-0.02em", marginBottom: "clamp(48px, 7vw, 80px)", lineHeight: 1.1 }}>
          How we work — step by step.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "32px",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderTop: "1px solid #2A2A2A", paddingTop: "32px" }}
            >
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", color: "#888888", marginBottom: "24px", fontVariantNumeric: "tabular-nums" }}>
                {step.number}
              </p>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", color: "#FAFAFA", letterSpacing: "-0.01em", marginBottom: "16px", lineHeight: 1.2 }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", color: "#888888", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
