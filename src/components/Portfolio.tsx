"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const pieces = [
  { title: "Live Edge Dining Table", material: "White Oak & Raw Steel", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=600&fit=crop" },
  { title: "Industrial Bookshelf", material: "Reclaimed Wood & Steel Pipe", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&h=600&fit=crop" },
  { title: "Farmhouse Bed Frame", material: "Reclaimed Barn Wood", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=600&fit=crop" },
  { title: "Steel & Wood Desk", material: "Walnut & Blackened Steel", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=600&fit=crop" },
  { title: "Custom Bar Top", material: "Live Edge Walnut & Copper", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=600&fit=crop" },
];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

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
    <section id="portfolio" className="portfolio-outer" aria-label="Portfolio" ref={sectionRef}>
      <div className="portfolio-sticky">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>Selected <span>Works</span></h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Drag to explore</p>
        </motion.div>

        <div
          className="portfolio-track"
          ref={trackRef}
          onMouseDown={onTrackMouseDown}
          onMouseMove={onTrackMouseMove}
          onMouseUp={onTrackMouseUp}
          onMouseLeave={onTrackMouseUp}
        >
          {pieces.map((piece, i) => (
            <motion.article
              key={i}
              className="portfolio-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, y: -8 }}
            >
              <div className="portfolio-card-bg" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={piece.image}
                  alt={piece.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="holo-shine" aria-hidden="true" />
              <div className="portfolio-card-overlay">
                <h3>{piece.title}</h3>
                <p>{piece.material}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
