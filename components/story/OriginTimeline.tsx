"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MILESTONES = [
  {
    year: "2019",
    title: "The Idea",
    body: "A small kitchen, big dreams, and the city\u2019s best filter coffee recipe.",
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
    <div ref={ref} className="relative flex items-center w-full mb-10 last:mb-0">

      {/* Left slot */}
      <div className="flex-1 flex justify-end pr-6">
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            style={{
              background: "#FFFFFF",
              borderRadius: 8,
              padding: 24,
              borderLeft: "3px solid #C8882A",
              maxWidth: 320,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 20,
                color: "#3D2208",
                marginBottom: 8,
              }}
            >
              {title}
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.7 }}>
              {body}
            </p>
          </motion.div>
        )}
      </div>

      {/* Centre: year badge */}
      <div className="shrink-0 flex items-center justify-center" style={{ width: 48, zIndex: 2 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#C8882A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            {year}
          </span>
        </div>
      </div>

      {/* Right slot */}
      <div className="flex-1 flex justify-start pl-6">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            style={{
              background: "#FFFFFF",
              borderRadius: 8,
              padding: 24,
              borderRight: "3px solid #C8882A",
              maxWidth: 320,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 20,
                color: "#3D2208",
                marginBottom: 8,
              }}
            >
              {title}
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#8B5E2E", lineHeight: 1.7 }}>
              {body}
            </p>
          </motion.div>
        )}
      </div>

    </div>
  );
}

export default function OriginTimeline() {
  return (
    <section style={{ background: "#F5E6C8" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 40,
            color: "#3D2208",
          }}
        >
          How Kapi Coast Began
        </h2>

        {/* Timeline container — relative so the absolute line works */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical centre line */}
          <div
            className="absolute top-0 bottom-0 left-1/2"
            style={{ width: 2, background: "#C8882A", transform: "translateX(-50%)" }}
          />

          {MILESTONES.map((m, i) => (
            <TimelineItem key={m.year} {...m} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
