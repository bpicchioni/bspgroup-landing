import React from "react";
import { motion } from "framer-motion";
import Particles from "./Particles.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Particle field */}
      <Particles mode="drift" density={0.85} maxSize={2.0} />

      {/* Faint gradient bias — adds depth and warmth from upper right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 30%, rgba(80,80,90,0.22), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(60,60,80,0.18), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero copy */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
          paddingTop: "72px",
        }}
      >
        <motion.div variants={container} initial="hidden" animate="show" style={{ maxWidth: "900px" }}>
          <motion.p
            variants={item}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.20em",
              color: "#888888",
              marginBottom: "32px",
            }}
          >
            Brand Development Studio
          </motion.p>
          <motion.h1
            variants={item}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6.5vw, 76px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              color: "#FAFAFA",
              marginBottom: "32px",
            }}
          >
            Building The Next Generation Of European Consumer Brands.
          </motion.h1>
          <motion.p
            variants={item}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#888888",
              lineHeight: 1.5,
              maxWidth: "600px",
            }}
          >
            We partner with founders to source, develop, and launch premium products for the European market.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom-left location label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "clamp(24px, 5vw, 80px)",
          zIndex: 3,
        }}
      >
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.24em", color: "#FAFAFA", margin: 0 }}>
          Amsterdam · Guangzhou
        </p>
      </motion.div>

      {/* Bottom-right scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          position: "absolute",
          bottom: "32px",
          right: "clamp(24px, 5vw, 80px)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.20em", color: "#888888" }}>
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "inline-block",
            width: "1px",
            height: "20px",
            backgroundColor: "#888888",
          }}
        />
      </motion.div>
    </section>
  );
}
