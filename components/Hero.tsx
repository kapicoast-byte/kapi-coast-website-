"use client";

import { motion } from "framer-motion";

/* ── Framer Motion variants ── */
const fadeUp = (delay: number) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
});

export default function Hero() {
  return (
    <section
      style={{ background: "#3D2208" }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hero-video"
        style={{ filter: "sepia(20%) saturate(110%) brightness(0.85)" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(61,34,8,0.75) 0%, rgba(61,34,8,0.25) 100%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[30vh] px-6 text-center z-10">

        {/* Label with side lines */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-5"
        >
          <span
            style={{ background: "#C8882A" }}
            className="block h-px w-10"
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              color: "#EDD5A0",
              fontSize: "12px",
              letterSpacing: "0.2em",
            }}
            className="uppercase"
          >
            Chennai · South India
          </span>
          <span
            style={{ background: "#C8882A" }}
            className="block h-px w-10"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
          }}
          className="text-[36px] md:text-[56px] max-w-3xl"
        >
          A Perfect Blend Of Heritage, And Happiness
        </motion.h1>

        {/* Italic subheading */}
        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            color: "#EDD5A0",
          }}
          className="text-[20px] md:text-[28px] mt-3"
        >
          Every Cup And Bite
        </motion.p>

        {/* Body copy */}
        <motion.p
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.85)",
            fontSize: "16px",
          }}
          className="mt-4 max-w-md"
        >
          Chennai's favourite traditions — sip, snack, and get back on track.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(1)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          {[
            { label: "Order Online", href: "#order" },
            { label: "Contact Us",   href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hero-btn"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                background: "transparent",
                padding: "12px 28px",
                borderRadius: "4px",
                display: "inline-block",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#FFFFFF";
                el.style.color = "#5C3A1E";
                el.style.borderColor = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "#FFFFFF";
                el.style.borderColor = "#FFFFFF";
              }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          style={{ background: "#C8882A" }}
          className="block w-px h-10"
        />
        {/* Chevron down */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1l5 5 5-5" stroke="#C8882A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* ── Coastal wave SVG divider ── */}
      <div className="absolute bottom-[-2px] left-0 w-full z-20 leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: "block" }}
        >
          {/* Wave 1 — furthest back */}
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#F9F0E0"
            fillOpacity="0.3"
          />
          {/* Wave 2 — mid */}
          <path
            d="M0,50 C200,10 440,70 720,50 C1000,30 1240,70 1440,50 L1440,80 L0,80 Z"
            fill="#F9F0E0"
            fillOpacity="0.6"
          />
          {/* Wave 3 — front, solid page colour */}
          <path
            d="M0,60 C180,30 360,75 720,60 C1080,45 1260,75 1440,60 L1440,80 L0,80 Z"
            fill="#F9F0E0"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* ── Ken Burns keyframe ── */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
        .hero-video {
          animation: kenBurns 10s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
