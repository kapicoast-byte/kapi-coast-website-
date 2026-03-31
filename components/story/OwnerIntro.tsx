"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OwnerIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F9F0E0" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: founder circle ── */}
        <div>
          <div
            className="mx-auto flex items-center justify-center"
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "4px solid #C8882A",
              background: "#8B5E2E",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 48,
                color: "#FFFFFF",
              }}
            >
              KC
            </span>
          </div>
          <p
            className="text-center mt-4"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#A0642A",
            }}
          >
            Founder, Kapi Coast
          </p>
        </div>

        {/* ── RIGHT: text (slides in) ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "#C8882A",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            THE PERSON BEHIND THE CUP
          </p>

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

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#5C3A1E",
              lineHeight: 1.75,
            }}
          >
            Every great cafe starts with a memory. For us, it was the sound of a
            brass dabara tumbler hitting the steel plate at 5am, the thick aroma
            of freshly brewed filter kaapi drifting through a Chennai morning.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#5C3A1E",
              lineHeight: 1.75,
              marginTop: 16,
            }}
          >
            Kapi Coast was built on that memory — and a belief that South
            India&apos;s food culture deserves a space that celebrates it with
            pride. Not a copy of something Western, but something entirely,
            unapologetically ours.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
