"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MILESTONES = [
  {
    year: "2019",
    title: "The Idea",
    body: "A small kitchen, big dreams, and the city's best filter coffee recipe.",
    side: "left" as const,
  },
  {
    year: "2020",
    title: "First Location",
    body: "We opened our doors in Chennai and served our first dabara tumbler to a stranger who became a regular.",
    side: "right" as const,
  },
  {
    year: "2022",
    title: "The Menu Grew",
    body: "Andhra snacks, house-baked cakes and pastries joined the family. The coast got tastier.",
    side: "left" as const,
  },
  {
    year: "2024",
    title: "Kapi Coast Today",
    body: "Multiple locations, thousands of cups, and a community that feels like family.",
    side: "right" as const,
  },
];

function TimelineItem({
  year,
  title,
  body,
  side,
  index,
}: (typeof MILESTONES)[number] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = side === "left";

  return (
    <div ref={ref} className="relative flex items-center w-full mb-12 last:mb-0">
      {/* Left content (visible when side=left, hidden otherwise) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView && isLeft ? { opacity: 1, x: 0 } : isLeft ? {} : { opacity: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="w-[calc(50%-32px)] pr-6 text-right"
        style={{ visibility: isLeft ? "visible" : "hidden" }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 20,
            color: "#3D2208",
            marginBottom: 6,
          }}
        >
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.7 }}>
          {body}
        </p>
      </motion.div>

      {/* Centre: year badge */}
      <div className="shrink-0 flex flex-col items-center" style={{ width: 64 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#C8882A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {year}
          </span>
        </div>
      </div>

      {/* Right content (visible when side=right, hidden otherwise) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView && !isLeft ? { opacity: 1, x: 0 } : !isLeft ? {} : { opacity: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="w-[calc(50%-32px)] pl-6 text-left"
        style={{ visibility: !isLeft ? "visible" : "hidden" }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 20,
            color: "#3D2208",
            marginBottom: 6,
          }}
        >
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.7 }}>
          {body}
        </p>
      </motion.div>
    </div>
  );
}

export default function OriginTimeline() {
  return (
    <section style={{ background: "#F5E6C8", padding: "80px 0" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 40,
            color: "#3D2208",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          How Kapi Coast Began
        </h2>

        {/* Timeline wrapper — the vertical gold line sits behind items */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0"
            style={{
              width: 2,
              background: "#C8882A",
              transform: "translateX(-50%)",
            }}
          />

          {MILESTONES.map((m, i) => (
            <TimelineItem key={m.year} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
