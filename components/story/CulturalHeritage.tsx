"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FACT_CARDS = [
  { big: "2",     label: "Cultures",      sub: "Tamil + Andhra" },
  { big: "1",     label: "Roof",          sub: "Chennai's own" },
  { big: "100%",  label: "Fresh",         sub: "Fresh daily" },
  { big: "Est.",  label: "Since",         sub: "2019" },
];

export default function CulturalHeritage() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const leftIn   = useInView(leftRef,  { once: true, margin: "-80px" });
  const rightIn  = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#5C3A1E", padding: "80px 0" }}>
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* ── LEFT: text ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          style={{ flex: "1 1 50%" }}
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

          {[
            "The coastline between Tamil Nadu and Andhra Pradesh is one of India's greatest culinary treasures. Bold tamarind gravies, crispy pesarattu, fiery gongura — these are not just dishes. They are a way of life.",
            "At Kapi Coast, we bring both traditions together under one roof — the gentleness of Tamil filter kaapi culture and the bold, unapologetic flavour of Andhra.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: i === 0 ? 18 : 0,
              }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* ── RIGHT: fact cards 2×2 grid ── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 40 }}
          animate={rightIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
          style={{ flex: "1 1 50%" }}
        >
          {FACT_CARDS.map(({ big, label, sub }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: 20,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 32,
                  color: "#C8882A",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {big}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "#EDD5A0",
                  letterSpacing: "0.04em",
                }}
              >
                {sub}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
