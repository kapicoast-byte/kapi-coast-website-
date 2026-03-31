"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TILES = [
  { script: "காபி",   label: "Filter Kaapi" },
  { script: "తేనీరు", label: "Andhra Chai" },
  { script: "2019",   label: "Est. Chennai" },
  { script: "100%",   label: "Fresh Daily" },
];

export default function StoryTeaser() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const leftIn   = useInView(leftRef,  { once: true, margin: "-80px" });
  const rightIn  = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#5C3A1E" }} className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#EDD5A0",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            OUR STORY
          </p>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: 36,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Born from a brass tumbler and a Chennai morning
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
            }}
          >
            Kapi Coast started with one memory and one belief — that South
            India&apos;s food culture deserves its own stage. Come find out how
            it all began.
          </p>

          <a
            href="/story"
            style={{
              display: "inline-block",
              marginTop: 32,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C8882A",
              border: "2px solid #C8882A",
              background: "transparent",
              padding: "12px 28px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#C8882A";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#C8882A";
            }}
          >
            Read Our Story
          </a>
        </motion.div>

        {/* ── RIGHT: 2×2 tiles ── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="grid grid-cols-2 gap-4"
        >
          {TILES.map(({ script, label }) => (
            <div
              key={label}
              className="text-center"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#C8882A",
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {script}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "#EDD5A0",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
