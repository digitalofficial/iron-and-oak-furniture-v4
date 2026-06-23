"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const blur = useTransform(scrollY, [0, 400], [0, 8]);
  const y = useTransform(scrollY, [0, 400], [0, 50]);

  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;
    const handleScroll = () => {
      heroSection.classList.toggle("scrolled-past", window.scrollY > window.innerHeight * 0.3);
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/55 via-[#0C0A08]/35 to-[#0C0A08]/70" />

      <motion.div
        className="hero-content relative z-10"
        style={{ opacity, scale, y, filter: blur.get() > 0 ? `blur(${blur.get()}px)` : undefined }}
      >
        <div className="hero-glow" aria-hidden="true" />

        <motion.h1
          className="hero-title drop-shadow-lg"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Handcrafted</span> for generations.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Custom furniture & woodwork &mdash; Tucson, Arizona
        </motion.p>

        <motion.a
          href="#commission"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Commission a piece</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
