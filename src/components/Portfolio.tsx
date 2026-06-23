"use client";

import { useRef, useCallback, useState } from "react";

const pieces = [
  {
    title: "Live Edge Dining Table",
    material: "White Oak & Raw Steel",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
        <rect x="8" y="20" width="48" height="4" rx="1" fill="#D97706" opacity="0.6" />
        <rect x="12" y="24" width="4" height="24" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="48" y="24" width="4" height="24" rx="1" fill="#94A3B8" opacity="0.4" />
        <path d="M8 20 Q32 14 56 20" stroke="#D97706" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Industrial Bookshelf",
    material: "Reclaimed Wood & Steel Pipe",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
        <rect x="12" y="8" width="4" height="48" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="48" y="8" width="4" height="48" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="12" y="14" width="40" height="3" rx="1" fill="#D97706" opacity="0.5" />
        <rect x="12" y="26" width="40" height="3" rx="1" fill="#D97706" opacity="0.5" />
        <rect x="12" y="38" width="40" height="3" rx="1" fill="#D97706" opacity="0.5" />
        <rect x="12" y="50" width="40" height="3" rx="1" fill="#D97706" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Farmhouse Bed Frame",
    material: "Reclaimed Barn Wood",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
        <rect x="6" y="16" width="52" height="24" rx="2" fill="#D97706" opacity="0.3" />
        <rect x="6" y="12" width="52" height="8" rx="2" fill="#D97706" opacity="0.5" />
        <rect x="8" y="40" width="4" height="12" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="52" y="40" width="4" height="12" rx="1" fill="#94A3B8" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Steel & Wood Desk",
    material: "Walnut & Blackened Steel",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
        <rect x="6" y="22" width="52" height="4" rx="1" fill="#D97706" opacity="0.6" />
        <path d="M10 26 L18 48" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M54 26 L46 48" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <rect x="24" y="26" width="3" height="20" rx="1" fill="#94A3B8" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Custom Bar Top",
    material: "Live Edge Walnut & Copper",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64" aria-hidden="true">
        <path d="M4 24 Q32 18 60 24 L60 28 Q32 22 4 28 Z" fill="#D97706" opacity="0.6" />
        <rect x="8" y="28" width="4" height="24" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="52" y="28" width="4" height="24" rx="1" fill="#94A3B8" opacity="0.4" />
        <rect x="28" y="28" width="8" height="20" rx="1" fill="#94A3B8" opacity="0.2" />
        <rect x="10" y="36" width="44" height="2" rx="1" fill="#D97706" opacity="0.2" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const onTrackMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    dragState.current = { isDragging: true, startX: e.pageX, scrollLeft: trackRef.current.scrollLeft };
  }, []);
  const onTrackMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDragging || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = dragState.current.scrollLeft - (e.pageX - dragState.current.startX) * 1.2;
  }, []);
  const onTrackMouseUp = useCallback(() => { dragState.current.isDragging = false; }, []);

  return (
    <section id="portfolio" className="portfolio-outer" aria-label="Portfolio">
      <div className="portfolio-sticky">
        <div className="portfolio-header">
          <h2>
            Selected <span>Works</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Drag to explore</p>
        </div>
        <div className="portfolio-track" ref={trackRef} onMouseDown={onTrackMouseDown} onMouseMove={onTrackMouseMove} onMouseUp={onTrackMouseUp} onMouseLeave={onTrackMouseUp}>
          {pieces.map((piece, i) => (
            <article
              key={i}
              className="portfolio-card"
              onMouseMove={handleMouseMove}
            >
              <div className="portfolio-card-bg">
                <div className="grain" aria-hidden="true" />
                {piece.icon}
              </div>
              <div className="holo-shine" aria-hidden="true" />
              <div className="portfolio-card-overlay">
                <h3>{piece.title}</h3>
                <p>{piece.material}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Removed: portfolio-sticky wrapper was causing 400vh height + broken scroll-timeline.
// Now uses simple horizontal scroll with drag-to-scroll.
