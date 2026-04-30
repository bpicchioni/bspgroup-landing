import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles.jsx";

const categories = [
  { label: "Home & Lifestyle", mode: "cluster" },
  { label: "Family & Childcare", mode: "float" },
  { label: "Personal Accessories", mode: "linear" },
  { label: "Premium Everyday Goods", mode: "orbit" },
];

export default function Categories() {
  return (
    <section id="categories" style={{ padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 64px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888", marginBottom: "48px" }}>
          Categories
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        backgroundColor: hovered ? "#121212" : "#0E0E0E",
        border: hovered ? "1px solid #2A2A2A" : "1px solid #1A1A1A",
        cursor: "default",
        transition: "border-color 300ms ease, background-color 300ms ease",
      }}
    >
      <Particles mode={category.mode} density={0.95} maxSize={1.5} />

      {/* Gradient bias for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(80,80,100,0.16), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade for label legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "20px",
          right: "20px",
          bottom: "20px",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(18px, 1.8vw, 22px)",
            color: "#FAFAFA",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {category.label}.
        </p>
      </div>
    </motion.div>
  );
}
