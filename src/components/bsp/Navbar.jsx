import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Categories", href: "#categories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "72px",
        backgroundColor: "rgba(10,10,10,0.80)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #1A1A1A" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "clamp(24px, 5vw, 64px)",
          paddingRight: "clamp(24px, 5vw, 64px)",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <span style={{ display: "block", width: "6px", height: "6px", backgroundColor: "#FAFAFA", flexShrink: 0 }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FAFAFA" }}>
            BSP Group
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 32px)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", color: "#888888", textDecoration: "none", transition: "color 200ms ease", minHeight: "44px", display: "flex", alignItems: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
