"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { number: "2",    label: "Cultures \u2014 Tamil + Andhra" },
  { number: "1",    label: "Roof \u2014 Chennai\u2019s own" },
  { number: "100%", label: "Fresh daily" },
  { number: "Est.", label: "2019" },
];

export default function CulturalHeritage() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const leftIn   = useInView(leftRef,  { once: true, margin: "-80px" });
  const rightIn  = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#5C3A1E" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* ── LEFT: text ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 36,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Why Andhra + Tamil?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
            }}
          >
            The coastline between Tamil Nadu and Andhra Pradesh is one of
            India&apos;s greatest culinary treasures. Bold tamarind gravies,
            crispy pesarattu, fiery gongura — these are not just dishes. They
            are a way of life.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
              marginTop: 16,
            }}
          >
            At Kapi Coast, we bring both traditions together under one roof —
            the gentleness of Tamil filter kaapi culture and the bold,
            unapologetic flavour of Andhra.
          </p>
        </motion.div>

        {/* ── RIGHT: 2×2 stat cards ── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map(({ number, label }) => (
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
                  fontSize: 40,
                  color: "#C8882A",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {number}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "#EDD5A0",
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
