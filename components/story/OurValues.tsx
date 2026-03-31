"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function TumblerIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Body: rounded rect 28x36 centered */}
      <rect x="10" y="6" width="28" height="36" rx="4" fill="#C8882A" />
      {/* Base: smaller rect 20x6 */}
      <rect x="14" y="38" width="20" height="6" rx="2" fill="#C8882A" />
    </svg>
  );
}

function CurryLeafIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Pointed oval leaf: 20x36px, centred at 24,24 */}
      <ellipse cx="24" cy="24" rx="10" ry="18" fill="#4A6741" />
      {/* Centre vein */}
      <line x1="24" y1="6" x2="24" y2="42" stroke="white" strokeWidth="0.8" />
    </svg>
  );
}

function KolamDotsIcon() {
  // 3×3 grid of dots, with connecting lines between them
  const positions: [number, number][] = [
    [12, 12], [24, 12], [36, 12],
    [12, 24], [24, 24], [36, 24],
    [12, 36], [24, 36], [36, 36],
  ];

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Connecting lines */}
      <line x1="12" y1="12" x2="36" y2="12" stroke="#C8882A" strokeWidth="0.8" />
      <line x1="12" y1="24" x2="36" y2="24" stroke="#C8882A" strokeWidth="0.8" />
      <line x1="12" y1="36" x2="36" y2="36" stroke="#C8882A" strokeWidth="0.8" />
      <line x1="12" y1="12" x2="12" y2="36" stroke="#C8882A" strokeWidth="0.8" />
      <line x1="24" y1="12" x2="24" y2="36" stroke="#C8882A" strokeWidth="0.8" />
      <line x1="36" y1="12" x2="36" y2="36" stroke="#C8882A" strokeWidth="0.8" />
      {/* 9 dots */}
      {positions.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#C8882A" />
      ))}
    </svg>
  );
}

const CARDS = [
  {
    Icon: TumblerIcon,
    title: "Tradition",
    body: "Every recipe is rooted in generations of South Indian kitchen wisdom.",
    delay: 0,
  },
  {
    Icon: CurryLeafIcon,
    title: "Freshness",
    body: "From the spices in our chai to the butter in our pastries — everything made fresh daily.",
    delay: 0.15,
  },
  {
    Icon: KolamDotsIcon,
    title: "Community",
    body: "Kapi Coast is not just a cafe. It is a corner of Chennai where everyone belongs.",
    delay: 0.3,
  },
];

function ValueCard({
  Icon,
  title,
  body,
  delay,
}: (typeof CARDS)[number]) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const }}
      style={{
        background: "#FFFFFF",
        borderLeft: "4px solid #C8882A",
        borderRadius: 8,
        padding: 32,
        boxShadow: "0 4px 20px rgba(61,34,8,0.08)",
      }}
    >
      <Icon />
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 22,
          color: "#3D2208",
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.7 }}>
        {body}
      </p>
    </motion.div>
  );
}

export default function OurValues() {
  return (
    <section style={{ background: "#F9F0E0" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 40,
            color: "#3D2208",
          }}
        >
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
