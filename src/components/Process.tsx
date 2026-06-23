"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    icon: "\uD83D\uDCAC",
    title: "Consultation",
    description:
      "We sit down together to understand how the piece will live in your space. Every project begins with a conversation about your vision, lifestyle, and the story you want your furniture to tell.",
  },
  {
    icon: "\u270F\uFE0F",
    title: "Design",
    description:
      "From sketches to detailed renderings, we refine every curve, joint, and proportion. You'll see your piece take shape before a single cut is made.",
  },
  {
    icon: "\uD83C\uDF3F",
    title: "Material Selection",
    description:
      "We source the finest hardwoods and metals, hand-selecting each slab for grain character and structural integrity. Every material earns its place.",
  },
  {
    icon: "\uD83D\uDD28",
    title: "Handcraft",
    description:
      "Traditional joinery meets modern precision. Each piece is built by hand in our Tucson workshop, with obsessive attention to fit, finish, and longevity.",
  },
  {
    icon: "\uD83D\uDE9A",
    title: "Delivery",
    description:
      "White-glove delivery and installation. We place your piece exactly where it belongs and ensure every detail meets your expectations.",
  },
];

export default function Process() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-section" aria-label="Our Process">
      <div className="process-header">
        <h2>
          Our <span>Process</span>
        </h2>
      </div>
      <div className="process-timeline">
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-step"
            ref={(el) => {
              stepsRef.current[i] = el;
            }}
          >
            <div className="process-icon" aria-hidden="true">
              {step.icon}
            </div>
            <div className="process-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
