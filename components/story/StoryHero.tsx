"use client";

import { motion } from "framer-motion";

/* Repeating kolam diamond+dot SVG pattern along the bottom edge */
function KolamBorder() {
  // Build one tile (24px wide) and repeat it via SVG pattern
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: 12 }}>
      <svg
        width="100%"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid repeat"
      >
        <defs>
          <pattern id="kolam" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
            {/* Diamond */}
            <polygon
              points="12,1 20,6 12,11 4,6"
              fill="none"
              stroke="#C8882A"
              strokeWidth="1.2"
              opacity="0.4"
            />
            {/* Centre dot */}
            <circle cx="12" cy="6" r="1.2" fill="#C8882A" opacity="0.4" />
            {/* Corner dots */}
            <circle cx="1"  cy="6" r="0.8" fill="#C8882A" opacity="0.4" />
            <circle cx="23" cy="6" r="0.8" fill="#C8882A" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill="url(#kolam)" />
      </svg>
    </div>
  );
}

export default function StoryHero() {
  return (
    <section
      style={{ background: "#5C3A1E", height: 340 }}
      className="relative w-full flex flex-col items-center justify-center"
    >
      <div
        className="relative w-full flex flex-col items-center justify-center"
        style={{ height: "100%" }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#EDD5A0",
            textTransform: "uppercase",
          }}
          className="mb-4"
        >
          Who We Are
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 56,
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          Our Story
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            width: 60,
            height: 2,
            background: "#C8882A",
            marginTop: 16,
            transformOrigin: "center",
          }}
        />

        {/* Kolam border */}
        <KolamBorder />
      </div>
    </section>
  );
}
