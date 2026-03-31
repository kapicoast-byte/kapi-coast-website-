"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── SVG icons ── */
function BrassTumblerIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Tumbler body — slightly trapezoidal */}
      <path d="M12 14h24l-3 20H15L12 14z" fill="#C8882A" opacity="0.2" stroke="#C8882A" strokeWidth="1.5" />
      {/* Rim */}
      <rect x="11" y="11" width="26" height="4" rx="1" fill="#C8882A" opacity="0.5" />
      {/* Base / saucer */}
      <ellipse cx="24" cy="35" rx="11" ry="2.5" fill="#C8882A" opacity="0.35" />
      {/* Horizontal bands */}
      <line x1="13" y1="20" x2="35" y2="20" stroke="#C8882A" strokeWidth="1" opacity="0.5" />
      <line x1="14" y1="26" x2="34" y2="26" stroke="#C8882A" strokeWidth="1" opacity="0.5" />
      {/* Steam */}
      <path d="M19 8c0-2 2-2 2-4" stroke="#C8882A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M24 7c0-2 2-2 2-4" stroke="#C8882A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M29 8c0-2 2-2 2-4" stroke="#C8882A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

function CurryLeafIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central stem */}
      <path d="M24 42 C24 42 22 28 20 18 C18 8 22 4 24 4 C26 4 30 8 28 18 C26 28 24 42 24 42Z"
        stroke="#C8882A" strokeWidth="1.2" fill="none" />
      {/* Left leaves */}
      <path d="M21 20 C16 16 13 18 14 22 C15 26 21 24 21 20Z" fill="#C8882A" opacity="0.3" stroke="#C8882A" strokeWidth="1" />
      <path d="M22 28 C17 25 14 28 16 31 C18 34 22 32 22 28Z" fill="#C8882A" opacity="0.3" stroke="#C8882A" strokeWidth="1" />
      {/* Right leaves */}
      <path d="M27 20 C32 16 35 18 34 22 C33 26 27 24 27 20Z" fill="#C8882A" opacity="0.3" stroke="#C8882A" strokeWidth="1" />
      <path d="M26 28 C31 25 34 28 32 31 C30 34 26 32 26 28Z" fill="#C8882A" opacity="0.3" stroke="#C8882A" strokeWidth="1" />
    </svg>
  );
}

function KolamDotsIcon() {
  // 3×3 dot grid with connecting lines (kolam pattern)
  const dots = [
    [12, 12], [24, 12], [36, 12],
    [12, 24], [24, 24], [36, 24],
    [12, 36], [24, 36], [36, 36],
  ] as [number, number][];

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Connecting lines */}
      <path d="M12 12 L36 36 M36 12 L12 36 M12 24 L36 24 M24 12 L24 36" stroke="#C8882A" strokeWidth="1" opacity="0.4" />
      <path d="M12 12 L36 12 L36 36 L12 36 Z" stroke="#C8882A" strokeWidth="1" opacity="0.3" fill="none" />
      {/* Dots */}
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#C8882A" opacity="0.7" />
      ))}
    </svg>
  );
}

const VALUES = [
  {
    Icon: BrassTumblerIcon,
    title: "Tradition",
    body: "Every recipe is rooted in generations of South Indian kitchen wisdom.",
  },
  {
    Icon: CurryLeafIcon,
    title: "Freshness",
    body: "From the spices in our chai to the butter in our pastries — everything made fresh daily.",
  },
  {
    Icon: KolamDotsIcon,
    title: "Community",
    body: "Kapi Coast is not just a cafe. It is a corner of Chennai where everyone belongs.",
  },
];

function ValueCard({ Icon, title, body, index }: (typeof VALUES)[number] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
      style={{
        background: "#FFFFFF",
        borderLeft: "4px solid #C8882A",
        borderRadius: 8,
        padding: 32,
        boxShadow: "0 4px 20px rgba(61,34,8,0.08)",
        flex: "1 1 0",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <Icon />
      </div>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 22,
          color: "#3D2208",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.75 }}>
        {body}
      </p>
    </motion.div>
  );
}

export default function OurValues() {
  return (
    <section style={{ background: "#F9F0E0", padding: "80px 0" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 40,
            color: "#3D2208",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          What We Stand For
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
