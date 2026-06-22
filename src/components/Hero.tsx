"use client";

export default function Hero() {
  return (
    <section className="hero-sticky-wrapper" aria-label="Hero">
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
