"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OwnerIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F9F0E0", padding: "80px 0" }}>
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* ── LEFT: founder portrait ── */}
        <div className="flex flex-col items-center shrink-0" style={{ flex: "0 0 40%" }}>
          {/* Circular image / initials placeholder */}
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "4px solid #C8882A",
              background: "#8B5E2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                color: "#FFFFFF",
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              KC
            </span>
          </div>
          {/* Caption */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#A0642A",
              marginTop: 14,
            }}
          >
            Founder, Kapi Coast
          </p>
        </div>

        {/* ── RIGHT: text ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: "1 1 60%" }}
        >
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "#C8882A",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            The Person Behind The Cup
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 36,
              color: "#3D2208",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            A love letter to South Indian mornings
          </h2>

          {/* Body paragraphs */}
          {[
            "Every great cafe starts with a memory. For us, it was the sound of a brass dabara tumbler hitting the steel plate at 5am, the thick aroma of freshly brewed filter kaapi drifting through a Chennai morning.",
            "Kapi Coast was built on that memory — and a belief that South India's food culture deserves a space that celebrates it with pride. Not a copy of something Western, but something entirely, unapologetically ours.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "#5C3A1E",
                lineHeight: 1.8,
                marginBottom: i === 0 ? 16 : 0,
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
