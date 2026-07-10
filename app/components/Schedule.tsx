"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Coffee, Sun, Users, Moon, ChevronDown, ExternalLink } from "lucide-react";
import { scheduleData } from "../data";

const slots = [
  { key: "morning",   label: "Morning",   icon: Coffee, color: "#F59E0B" },
  { key: "afternoon", label: "Afternoon", icon: Sun,    color: "#0EA5E9" },
  { key: "evening",   label: "Evening",   icon: Users,  color: "#7C3AED" },
  { key: "night",     label: "Night",     icon: Moon,   color: "#2563EB" },
];

const dayColors = ["#2563EB","#7C3AED","#0EA5E9","#0EA5E9","#0EA5E9","#10B981","#F59E0B"];

export default function Schedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="schedule" className="section-py overflow-x-clip" ref={ref}>
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
            style={{ background: "rgba(37,99,235,0.11)", border: "1px solid rgba(37,99,235,0.24)", color: "#93C5FD" }}
          >
            Schedule
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Day-by-Day Schedule</h2>
          <p className="text-subtitle">Every moment of the week, thoughtfully planned.</p>
        </motion.div>

        {/* ── Accordion — max-width 950px, full width left-aligned ─── */}
        <div style={{ maxWidth: 950 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {scheduleData.map((day, i) => {
              const color = dayColors[i];
              const isOpen = open === i;

              return (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{
                    background: "rgba(13,17,23,0.85)",
                    border: isOpen ? `1px solid ${color}35` : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between"
                    style={{ padding: "20px 24px", cursor: "pointer", background: "transparent", border: "none" }}
                  >
                    <div className="flex items-center" style={{ gap: 16 }}>
                      {/* Day number badge */}
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: 48, height: 48, borderRadius: 14,
                          background: isOpen ? `linear-gradient(135deg, ${color}, ${color}aa)` : `${color}18`,
                          boxShadow: isOpen ? `0 4px 20px ${color}30` : "none",
                          transition: "all 0.3s ease",
                          fontSize: 18, fontWeight: 900, color: "#fff",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div className="text-left">
                        <p className="text-label" style={{ color: color, marginBottom: 3 }}>{day.day} · {day.date}</p>
                        <p style={{ fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{day.title}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ color: isOpen ? color : "#4B5563", flexShrink: 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Expanded body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 24px 24px" }}>
                          <div
                            style={{ height: 1, background: `${color}18`, marginBottom: 20 }}
                          />
                          <div
                            className="grid"
                            style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}
                          >
                            {slots.map((slot, si) => {
                              const Icon = slot.icon;
                              const content = day.slots[slot.key as keyof typeof day.slots];
                              return (
                                <motion.div
                                  key={slot.key}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: si * 0.07 }}
                                  className="flex gap-3"
                                  style={{
                                    padding: "16px",
                                    borderRadius: 14,
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                  }}
                                >
                                  <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                      width: 36, height: 36, borderRadius: 10, marginTop: 1,
                                      background: `${slot.color}14`, border: `1px solid ${slot.color}28`,
                                    }}
                                  >
                                    <Icon size={16} style={{ color: slot.color }} />
                                  </div>
                                  <div>
                                    <p className="text-label" style={{ color: "#4B5563", marginBottom: 4 }}>{slot.label}</p>
                                    <p style={{ fontSize: 14, color: "#fff", lineHeight: 1.45 }}>{content}</p>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Link button — shown only when day has an official link */}
                          {"link" in day && day.link && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.32 }}
                              style={{ marginTop: 20 }}
                            >
                              <a
                                href={day.link as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                                style={{
                                  height: 44,
                                  padding: "0 20px",
                                  borderRadius: 12,
                                  background: `${color}18`,
                                  border: `1px solid ${color}35`,
                                  color: color,
                                  fontSize: 14,
                                  fontWeight: 600,
                                  textDecoration: "none",
                                  transition: "background 0.2s",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${color}28`; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${color}18`; }}
                              >
                                <ExternalLink size={14} />
                                {(day as { linkLabel?: string }).linkLabel ?? "View Official Event"}
                              </a>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #schedule .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
