import React from "react";
import Navbar from "../components/bsp/Navbar.jsx";
import Hero from "../components/bsp/Hero.jsx";
import About from "../components/bsp/About.jsx";
import Capabilities from "../components/bsp/Capabilities.jsx";
import Categories from "../components/bsp/Categories.jsx";
import Geography from "../components/bsp/Geography.jsx";
import Contact from "../components/bsp/Contact.jsx";
import Footer from "../components/bsp/Footer.jsx";

export default function Landing() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Categories />
      <Geography />
      <Contact />
      <Footer />
    </div>
  );
}
