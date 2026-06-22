"use client";

export default function Hero() {
  return (
    <section className="hero-sticky-wrapper" aria-label="Hero">
      <div className="hero-content">
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
