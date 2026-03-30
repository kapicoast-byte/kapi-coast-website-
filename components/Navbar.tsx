"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "FOOD",        href: "#food" },
  { label: "BAKERY",      href: "#bakery" },
  { label: "SWEET TOOTH", href: "#sweet-tooth" },
  { label: "DRINKS",      href: "#drinks" },
  { label: "ABOUT US",    href: "#about" },
  { label: "CONTACT US",  href: "#contact" },
];

function CoffeeCupIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cup body */}
      <path
        d="M6 12h20l-2.5 14a2 2 0 01-1.97 1.7H10.47A2 2 0 018.5 26L6 12z"
        fill="#C8882A"
        stroke="#F5E6C8"
        strokeWidth="0.8"
      />
      {/* Handle */}
      <path
        d="M26 15.5c3 0 5 1.2 5 3.5s-2 3.5-5 3.5"
        stroke="#F5E6C8"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Saucer */}
      <ellipse cx="16" cy="27.8" rx="10" ry="1.8" fill="#A0642A" />
      {/* Steam wisps */}
      <path
        d="M12 9c0-1.5 2-1.5 2-3"
        stroke="#EDD5A0"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 8c0-1.5 2-1.5 2-3"
        stroke="#EDD5A0"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 9c0-1.5 2-1.5 2-3"
        stroke="#EDD5A0"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--kc-brown)" }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
    >
      <nav className="max-w-screen-xl mx-auto px-4 flex items-center h-16">
        {/* ── Logo ── */}
        <a
          href="/"
          className="flex items-center gap-2.5 shrink-0 mr-8 group"
          aria-label="Kapi Coast home"
        >
          <CoffeeCupIcon />
          <div className="leading-none">
            <span
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--kc-cream)",
                letterSpacing: "0.12em",
              }}
              className="block text-base font-bold tracking-widest"
            >
              KAPI COAST
            </span>
            <span
              style={{ color: "var(--kc-warm)", fontFamily: "var(--font-body)" }}
              className="block text-[11px] tracking-wide mt-0.5"
            >
              காபி கோஸ்ட்
            </span>
          </div>
        </a>

        {/* ── Desktop nav links (centred, flex-1) ── */}
        <ul className="hidden lg:flex flex-1 items-center justify-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--kc-cream)",
                }}
                className="
                  relative text-xs font-medium tracking-widest px-3 py-1.5
                  transition-colors duration-200
                  hover:text-[var(--kc-gold)]
                  after:absolute after:left-0 after:bottom-0
                  after:h-[1.5px] after:w-0 after:bg-[var(--kc-gold)]
                  after:transition-[width] after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── ORDER ONLINE button ── */}
        <a
          href="#order"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--kc-white)",
            borderColor: "var(--kc-white)",
          }}
          className="
            hidden lg:inline-flex items-center shrink-0
            border rounded-sm text-xs font-semibold tracking-widest
            px-4 py-2 ml-6
            transition-all duration-200
            hover:bg-[var(--kc-gold)] hover:border-[var(--kc-gold)]
          "
        >
          ORDER ONLINE
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="ml-auto lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ background: "var(--kc-cream)" }}
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? i === 0
                    ? "translate-y-2 rotate-45"
                    : i === 1
                    ? "opacity-0"
                    : "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ background: "var(--kc-dark)" }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--kc-cream)",
                    }}
                    className="block text-sm font-medium tracking-widest py-2.5 border-b border-[var(--kc-brown)] hover:text-[var(--kc-gold)] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#order"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--kc-white)",
                    borderColor: "var(--kc-gold)",
                  }}
                  className="inline-flex border rounded-sm text-xs font-semibold tracking-widest px-4 py-2 hover:bg-[var(--kc-gold)] transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  ORDER ONLINE
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
