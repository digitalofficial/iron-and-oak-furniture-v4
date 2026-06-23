"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { icon: "\uD83D\uDCAC", title: "Consultation", description: "We sit down together to understand how the piece will live in your space. Every project begins with a conversation about your vision, lifestyle, and the story you want your furniture to tell." },
  { icon: "\u270F\uFE0F", title: "Design", description: "From sketches to detailed renderings, we refine every curve, joint, and proportion. You'll see your piece take shape before a single cut is made." },
  { icon: "\uD83C\uDF3F", title: "Material Selection", description: "We source the finest hardwoods and metals, hand-selecting each slab for grain character and structural integrity. Every material earns its place." },
  { icon: "\uD83D\uDD28", title: "Handcraft", description: "Traditional joinery meets modern precision. Each piece is built by hand in our Tucson workshop, with obsessive attention to fit, finish, and longevity." },
  { icon: "\uD83D\uDE9A", title: "Delivery", description: "White-glove delivery and installation. We place your piece exactly where it belongs and ensure every detail meets your expectations." },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="process-step"
      style={{ opacity: 1, transform: 'none' }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="process-icon"
        aria-hidden="true"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {step.icon}
      </motion.div>
      <div className="process-content">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="process" className="process-section" aria-label="Our Process">
      <motion.div
        ref={headerRef}
        className="process-header"
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2>Our <span>Process</span></h2>
      </motion.div>
      <div className="process-timeline">
        {steps.map((step, i) => (
          <ProcessStep key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
