"use client";

import { useEffect, useRef } from "react";

export default function Testimonial() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (innerRef.current) {
      observer.observe(innerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonial-section" aria-label="Testimonial">
      <div className="testimonial-inner" ref={innerRef}>
        <blockquote className="testimonial-quote">
          The dining table they built for us is the most beautiful piece of
          furniture we have ever owned. Every dinner feels like an occasion now.
          Our family gathers around it every night, and I know my grandchildren
          will too.
        </blockquote>
        <p className="testimonial-author">
          <strong>Maria & David Reyes</strong> &mdash; Custom Live Edge Dining
          Table, Walnut
        </p>
      </div>
    </section>
  );
}
