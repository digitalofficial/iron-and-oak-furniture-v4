"use client";

import { useEffect, useRef } from "react";

const materialsText = "We work with White Oak, Walnut, Reclaimed Barn Wood, Raw Steel, Copper, and Live Edge Slabs";
const highlightWords = ["White Oak", "Walnut", "Reclaimed Barn Wood", "Raw Steel", "Copper", "Live Edge Slabs"];

export default function Materials() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const supportsTimeline =
      CSS.supports && CSS.supports("animation-timeline: view()");
    if (supportsTimeline) return;

    // IO fallback: reveal words sequentially on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
    );

    wordsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const words = materialsText.split(" ");

  // Track multi-word highlights
  const getHighlightClass = (wordIndex: number): boolean => {
    let currentIdx = 0;
    for (const word of words) {
      if (currentIdx === wordIndex) {
        // Check if this word starts a highlight phrase
        for (const phrase of highlightWords) {
          const phraseWords = phrase.split(" ");
          const slice = words.slice(wordIndex, wordIndex + phraseWords.length).join(" ");
          if (slice === phrase) return true;
        }
        // Check if this word is part of an earlier multi-word phrase
        for (const phrase of highlightWords) {
          const phraseWords = phrase.split(" ");
          for (let start = Math.max(0, wordIndex - phraseWords.length + 1); start < wordIndex; start++) {
            const slice = words.slice(start, start + phraseWords.length).join(" ");
            if (slice === phrase && wordIndex < start + phraseWords.length) return true;
          }
        }
      }
      currentIdx++;
    }
    return false;
  };

  return (
    <section id="materials" className="materials-section" aria-label="Materials">
      <span className="materials-label">Sourced with intention</span>
      <p className="materials-text">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => {
              wordsRef.current[i] = el;
            }}
            className={`material-word${getHighlightClass(i) ? " highlight" : ""}`}
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
