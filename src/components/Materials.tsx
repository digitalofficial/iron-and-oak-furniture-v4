"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const text = "We work with White Oak, Walnut, Reclaimed Barn Wood, Raw Steel, Copper, and Live Edge Slabs";
const highlightWords = ["White", "Oak,", "Walnut,", "Reclaimed", "Barn", "Wood,", "Raw", "Steel,", "Copper,", "Live", "Edge", "Slabs"];

export default function Materials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <section id="materials" className="materials-section" aria-label="Materials" ref={ref}>
      <motion.span
        className="materials-label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Sourced with intention
      </motion.span>
      <p className="materials-text">
        {words.map((word, i) => {
          const isHighlight = highlightWords.includes(word);
          return (
            <motion.span
              key={i}
              style={{ display: 'inline-block', marginRight: '0.3em', color: isHighlight ? 'var(--color-primary)' : undefined }}
              initial={{ opacity: 0.1, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.5,
                delay: 0.06 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}
