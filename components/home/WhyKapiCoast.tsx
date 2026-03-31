"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function TumblerIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="8" width="28" height="32" rx="4" fill="#C8882A" />
      <rect x="14" y="36" width="20" height="6" rx="2" fill="#C8882A" />
      <line x1="10" y1="18" x2="38" y2="18" stroke="white" strokeWidth="1.2" opacity="0.4" />
      <path d="M18 5c0-2 2-2 2-4M24 4c0-2 2-2 2-4M30 5c0-2 2-2 2-4" stroke="#C8882A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TeaLeafIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="22" rx="11" ry="19" fill="#4A6741" />
      <line x1="24" y1="4" x2="24" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="14" x2="17" y2="20" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <line x1="24" y1="20" x2="31" y2="26" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <line x1="24" y1="26" x2="17" y2="32" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <path d="M24 40 Q20 44 24 48" stroke="#4A6741" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function SnackIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="30" rx="18" ry="6" fill="#C8882A" opacity="0.25" />
      <rect x="8" y="20" width="32" height="12" rx="6" fill="#C8882A" />
      <ellipse cx="24" cy="20" rx="16" ry="5" fill="#C8882A" opacity="0.7" />
      <circle cx="16" cy="26" r="2" fill="white" opacity="0.4" />
      <circle cx="24" cy="26" r="2" fill="white" opacity="0.4" />
      <circle cx="32" cy="26" r="2" fill="white" opacity="0.4" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Plate */}
      <ellipse cx="24" cy="38" rx="16" ry="3" fill="#8B5E2E" opacity="0.3" />
      {/* Cake body */}
      <rect x="10" y="22" width="28" height="16" rx="3" fill="#8B5E2E" />
      {/* Frosting layer */}
      <rect x="10" y="18" width="28" height="6" rx="3" fill="#EDD5A0" />
      {/* Candle */}
      <rect x="22" y="10" width="4" height="10" rx="2" fill="#C8882A" />
      <ellipse cx="24" cy="10" rx="3" ry="2" fill="#FFD700" />
    </svg>
  );
}

const CARDS = [
  { Icon: TumblerIcon, title: "Filter Kaapi",   body: "Brewed the old way. Served the right way.", delay: 0 },
  { Icon: TeaLeafIcon, title: "Specialty Tea",  body: "From masala chai to Irani — every cup tells a story.", delay: 0.1 },
  { Icon: SnackIcon,   title: "Andhra Bites",   body: "Bold, spicy, unapologetically coastal.", delay: 0.2 },
  { Icon: CakeIcon,    title: "Fresh Bakery",   body: "Baked every morning. Gone by evening.", delay: 0.3 },
];

function FeatureCard({ Icon, title, body, delay }: (typeof CARDS)[number]) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const }}
      style={{
        background: "#FFFFFF",
        borderRadius: 8,
        padding: 28,
        textAlign: "center",
        boxShadow: "0 4px 16px rgba(61,34,8,0.07)",
        borderTop: "3px solid #C8882A",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <Icon />
      </div>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 18,
          color: "#3D2208",
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#8B5E2E", lineHeight: 1.6 }}>
        {body}
      </p>
    </motion.div>
  );
}

export default function WhyKapiCoast() {
  return (
    <section style={{ background: "#F9F0E0" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 40, color: "#3D2208" }}
        >
          Why Kapi Coast?
        </h2>
        <p
          className="text-center mb-12"
          style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#8B5E2E" }}
        >
          Chennai&apos;s favourite traditions — in every cup and bite.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
