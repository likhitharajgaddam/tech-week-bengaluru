"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "../data";

export default function FAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py overflow-x-clip" ref={ref}>
      <div className="section-inner">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div
            className="eyebrow"
            style={{ background: "rgba(124,58,237,0.11)", border: "1px solid rgba(124,58,237,0.24)", color: "#C4B5FD" }}
          >
            FAQ
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Frequently Asked</h2>
          <p className="text-subtitle">Everything you need to know about Tech Week Bengaluru 2026.</p>
        </motion.div>

        {/* ── Accordion — max-width 900px, left-aligned ─── */}
        <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 12 }}>
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: "rgba(13,17,23,0.85)",
                border: open === i ? "1px solid rgba(37,99,235,0.32)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                overflow: "hidden",
                transition: "border-color 0.28s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between"
                style={{ padding: "22px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: 16, fontWeight: 600, lineHeight: 1.45,
                    color: open === i ? "#fff" : "#D1D5DB",
                    transition: "color 0.2s",
                  }}
                >
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.28 }}
                  style={{ color: open === i ? "#2563EB" : "#4B5563", flexShrink: 0, marginLeft: 16, marginTop: 2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 24px 24px" }}>
                      <div style={{ height: 1, background: "rgba(37,99,235,0.14)", marginBottom: 16 }} />
                      <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.72 }}>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
