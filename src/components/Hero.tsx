"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        heroSection.classList.add("scrolled-past");
      } else {
        heroSection.classList.remove("scrolled-past");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop"
        alt="Elegant modern furniture in a styled interior"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/80 via-[#0C0A08]/60 to-[#0C0A08]/90" />

      <div className="hero-content relative z-10">
        <div className="hero-glow" aria-hidden="true" />
        <h1 className="hero-title">
          <span>Handcrafted</span> for generations.
        </h1>
        <p className="hero-subtitle">
          Custom furniture & woodwork &mdash; Tucson, Arizona
        </p>
        <a href="#commission" className="cta-button">
          <span>Commission a piece</span>
        </a>
      </div>
    </section>
  );
}
