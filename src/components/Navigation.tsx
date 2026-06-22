"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <Logo />
      <ul className="nav-links">
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#materials">Materials</a></li>
        <li><a href="#commission">Commission</a></li>
      </ul>
    </nav>
  );
}
