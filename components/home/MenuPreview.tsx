"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ITEMS = [
  { name: "Filter Kaapi",          price: "₹60", category: "Drinks",      badge: "Signature" },
  { name: "Pesarattu",             price: "₹80", category: "Food",        badge: "Signature" },
  { name: "Irani Chai",            price: "₹65", category: "Drinks",      badge: "Signature" },
  { name: "Gongura Pakoda",        price: "₹90", category: "Food",        badge: "Signature" },
  { name: "Filter Coffee Muffin",  price: "₹75", category: "Bakery",      badge: "Signature" },
  { name: "Adhirasam",             price: "₹55", category: "Sweet Tooth", badge: "Signature" },
];

function MenuCard({
  name,
  price,
  category,
  badge,
  index,
}: (typeof ITEMS)[number] & { index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
      style={{
        background: "#FFFFFF",
        borderLeft: "4px solid #C8882A",
        borderRadius: 8,
        padding: 24,
        boxShadow: "0 4px 16px rgba(61,34,8,0.07)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: "#3D2208" }}>
          {name}
        </h3>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 18, color: "#C8882A", flexShrink: 0, marginLeft: 12 }}>
          {price}
        </span>
      </div>

      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#8B5E2E", marginBottom: 12 }}>
        {category}
      </p>

      {badge && (
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-body)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#C8882A",
            background: "#FFF3E0",
            border: "1px solid #C8882A",
            borderRadius: 20,
            padding: "2px 10px",
          }}
        >
          {badge}
        </span>
      )}
    </motion.div>
  );
}

export default function MenuPreview() {
  const btnRef    = useRef(null);
  const btnInView = useInView(btnRef, { once: true, margin: "-40px" });

  return (
    <section style={{ background: "#F5E6C8" }} className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">

        <p
          className="text-center mb-4"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#C8882A",
            textTransform: "uppercase",
          }}
        >
          A TASTE OF WHAT WE OFFER
        </p>
        <h2
          className="text-center mb-12"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 40, color: "#3D2208" }}
        >
          From Our Kitchen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ITEMS.map((item, i) => (
            <MenuCard key={item.name} {...item} index={i} />
          ))}
        </div>

        <motion.div
          ref={btnRef}
          initial={{ opacity: 0, y: 16 }}
          animate={btnInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-center mt-12"
        >
          <a
            href="/menu"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "#C8882A",
              padding: "14px 36px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#8B5E2E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C8882A"; }}
          >
            See Full Menu
          </a>
        </motion.div>

      </div>
    </section>
  );
}
