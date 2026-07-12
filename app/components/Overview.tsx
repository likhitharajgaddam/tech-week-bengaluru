"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Brain, Code2, Users, Presentation, Trophy, Network, Lightbulb } from "lucide-react";

const focusAreas = [
  { label: "Artificial Intelligence",  icon: Brain,        color: "#7C3AED" },
  { label: "Embedded Systems",         icon: Code2,        color: "#2563EB" },
  { label: "Enterprise Software",      icon: Presentation, color: "#0EA5E9" },
  { label: "Developer Communities",    icon: Users,        color: "#10B981" },
  { label: "Hackathons",               icon: Trophy,       color: "#F59E0B" },
  { label: "Networking",               icon: Network,      color: "#EC4899" },
  { label: "Innovation",               icon: Lightbulb,    color: "#818CF8" },
];

const infoCards = [
  {
    icon: Calendar, label: "Duration",
    value: "21 July – 26 July 2026", sub: "6 Days of Tech",
    color: "#2563EB",
  },
  {
    icon: MapPin, label: "Location",
    value: "Bengaluru, Karnataka", sub: "Silicon Valley of India",
    color: "#7C3AED",
  },
];

const stats = [
  { num: "6",  label: "Days"        },
  { num: "4",  label: "Events"      },
  { num: "4+", label: "Venues"      },
  { num: "∞",  label: "Connections" },
];

export default function Overview() {
  return (
    <section id="overview" className="section-py overflow-x-clip">
      <div className="section-inner">

        {/* ── Section header ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div
            className="eyebrow"
            style={{ background: "rgba(37,99,235,0.11)", border: "1px solid rgba(37,99,235,0.24)", color: "#93C5FD" }}
          >
            Overview
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>The Week at a Glance</h2>
          <p className="text-subtitle">Everything you need to know about Bengaluru AI &amp; Developer Week 2026.</p>
        </motion.div>

        {/* ── Info cards — 2-col equal-height grid ───── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginBottom: 32 }}
        >
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card grad-border relative overflow-hidden"
              style={{ minHeight: 150 }}
            >
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: `radial-gradient(circle at 25% 50%, ${card.color}1a 0%, transparent 65%)`, pointerEvents: "none" }}
              />
              <div
                className="relative flex items-center gap-5"
                style={{ padding: "32px 32px" }}
              >
                <div
                  className="flex items-center justify-center shrink-0 rounded-2xl"
                  style={{ width: 52, height: 52, background: `${card.color}1a`, border: `1px solid ${card.color}33` }}
                >
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <div>
                  <p className="text-label" style={{ color: "#6B7280", marginBottom: 4 }}>{card.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{card.value}</p>
                  <p style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4 }}>{card.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Focus areas card ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card grad-border relative overflow-hidden"
          style={{ padding: "40px 40px", marginBottom: 32 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 70% 40%, rgba(124,58,237,0.08) 0%, transparent 60%)", pointerEvents: "none" }}
          />
          <div className="relative">
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 24 }}>Focus Areas</h3>
            <div className="flex flex-wrap" style={{ gap: 10 }}>
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="flex items-center gap-2"
                  style={{
                    padding: "8px 16px",
                    borderRadius: 9999,
                    background: `${area.color}14`,
                    border: `1px solid ${area.color}30`,
                    cursor: "default",
                  }}
                >
                  <area.icon size={14} style={{ color: area.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#fff" }}>{area.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Stats row — 4 equal cards ─────────────── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="text-center"
              style={{
                padding: "32px 16px",
                borderRadius: 24,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <p className="grad-text" style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#9CA3AF" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 640px) {
          #overview .grid { grid-template-columns: 1fr !important; }
          #overview .grid:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
