"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="testimonial-section" aria-label="Testimonial" ref={ref}>
      <motion.div
        className="testimonial-inner"
        style={{ opacity: 1, transform: 'none' }}
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <blockquote className="testimonial-quote">
          The dining table they built for us is the most beautiful piece of
          furniture we have ever owned. Every dinner feels like an occasion now.
          Our family gathers around it every night, and I know my grandchildren
          will too.
        </blockquote>
        <motion.p
          className="testimonial-author"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <strong>Maria & David Reyes</strong> &mdash; Custom Live Edge Dining
          Table, Walnut
        </motion.p>
      </motion.div>
    </section>
  );
}
