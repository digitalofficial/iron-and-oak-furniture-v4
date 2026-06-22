"use client";

import { useRef, useCallback, useState } from "react";

export default function CommissionForm() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [submitted, setSubmitted] = useState(false);

  // Magnetic hover effect
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="commission" className="commission-section" aria-label="Commission a piece">
      <div className="commission-inner">
        <div className="commission-header">
          <h2>
            Commission a <span>Piece</span>
          </h2>
          <p>
            Tell us about your vision. Every great piece starts with a
            conversation.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "3rem 0" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "var(--color-primary)",
                marginBottom: "1rem",
              }}
            >
              Thank you for reaching out.
            </p>
            <p style={{ color: "var(--color-muted)" }}>
              We will review your inquiry and get back to you within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="(520) 555-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="piece-type">Piece Type</label>
              <select id="piece-type" name="pieceType" required defaultValue="">
                <option value="" disabled>
                  Select a type
                </option>
                <option value="dining-table">Dining Table</option>
                <option value="desk">Desk</option>
                <option value="shelving">Shelving</option>
                <option value="bed-frame">Bed Frame</option>
                <option value="bar-counter">Bar / Counter</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="wood">Wood Preference</label>
              <input
                type="text"
                id="wood"
                name="wood"
                placeholder="e.g. Walnut, White Oak, Reclaimed"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                placeholder='e.g. 8ft x 3.5ft or "fits a 12x14 room"'
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="vision">Vision & Details</label>
              <textarea
                id="vision"
                name="vision"
                placeholder="Describe your ideal piece, inspiration, use-case, or any other details..."
              />
            </div>

            <div className="submit-wrapper">
              <button
                type="submit"
                className="submit-button"
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span>Send Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
