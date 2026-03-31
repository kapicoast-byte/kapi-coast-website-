"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

/* ── Shared field styles ── */
const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1.5px solid rgba(92,58,30,0.25)",
  borderRadius: 6,
  background: "#FFFFFF",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "#3D2208",
  outline: "none",
  display: "block",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 13,
  color: "#5C3A1E",
  display: "block",
  marginBottom: 4,
};

function InfoBlock({
  heading,
  children,
  mt = false,
}: {
  heading: string;
  children: React.ReactNode;
  mt?: boolean;
}) {
  return (
    <div style={mt ? { marginTop: 32 } : {}}>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 18,
          color: "#3D2208",
          marginBottom: 6,
        }}
      >
        {heading}
      </h3>
      {children}
      <div
        style={{
          borderTop: "1px solid rgba(92,58,30,0.15)",
          marginTop: 24,
        }}
      />
    </div>
  );
}

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "#8B5E2E",
  lineHeight: 1.7,
};

export default function ContactSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "#C8882A";
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "rgba(92,58,30,0.25)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await addDoc(collection(db, "contact_submissions"), {
        ...form,
        timestamp: new Date(),
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section style={{ background: "#F9F0E0" }} className="py-20">
      <div ref={ref} className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ── LEFT: cafe info ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "#C8882A",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            FIND US
          </p>

          <InfoBlock heading="Address">
            <p style={bodyText}>Kapi Coast, Chennai, Tamil Nadu, India</p>
          </InfoBlock>

          <InfoBlock heading="Opening Hours" mt>
            <p style={bodyText}>Monday &ndash; Friday: 7:00 AM &ndash; 10:00 PM</p>
            <p style={bodyText}>Saturday &ndash; Sunday: 7:00 AM &ndash; 11:00 PM</p>
          </InfoBlock>

          <InfoBlock heading="Phone" mt>
            <a
              href="tel:+910000000000"
              style={{ ...bodyText, color: "#C8882A", textDecoration: "none" }}
            >
              +91 00000 00000
            </a>
          </InfoBlock>

          <InfoBlock heading="Follow Us" mt>
            <div style={{ display: "flex", gap: 16 }}>
              {["Instagram", "Facebook", "Swiggy"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "#C8882A",
                    textDecoration: "underline",
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </InfoBlock>
        </motion.div>

        {/* ── RIGHT: contact form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {sent ? (
            <div
              style={{
                background: "#F0FFF4",
                border: "1px solid #4A6741",
                borderRadius: 8,
                padding: 24,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#3D2208",
                  marginBottom: 12,
                }}
              >
                Message Sent!
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5C3A1E" }}>
                Thank you for reaching out. We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Name */}
              <div>
                <label htmlFor="name" style={labelStyle}>Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputBase}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputBase}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputBase}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us anything — feedback, enquiries, catering requests..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{ ...inputBase, height: 120, resize: "none" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: sending ? "#8B5E2E" : "#C8882A",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: 6,
                  border: "none",
                  cursor: sending ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#8B5E2E";
                }}
                onMouseLeave={(e) => {
                  if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#C8882A";
                }}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {error && (
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#8B1A1A" }}>
                  {error}
                </p>
              )}

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
