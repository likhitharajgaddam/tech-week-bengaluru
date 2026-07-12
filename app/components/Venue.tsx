"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

const venues = [
  {
    name: "NXP Tech Days Bengaluru",
    address: "Bengaluru, Karnataka, India",
    event: "NXP Tech Days Bengaluru 2026",
    date: "21–22 July 2026",
    color: "#2563EB",
    mapUrl: "https://maps.google.com/?q=Bengaluru+Karnataka+India",
    tag: "Embedded Systems",
  },
  {
    name: "ABBYY Ascend DevCon",
    address: "Bengaluru, Karnataka, India",
    event: "ABBYY Ascend DevCon 2026",
    date: "22–23 July 2026",
    color: "#0EA5E9",
    mapUrl: "https://maps.google.com/?q=Bengaluru+Karnataka+India",
    tag: "Enterprise AI",
  },
  {
    name: "India Agentic AI Hackathon & AI Mobile Meetup",
    address: "Bengaluru, Karnataka, India",
    event: "Hackathon + AI Community Meetup",
    date: "24–26 July 2026",
    color: "#10B981",
    mapUrl: "https://maps.google.com/?q=Bengaluru+Karnataka+India",
    tag: "City-wide",
  },
];

export default function Venue() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });

  return (
    <section id="venues" className="section-py overflow-x-clip" ref={ref}>
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
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.22)", color: "#6EE7B7" }}
          >
            Venues
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Where It All Happens</h2>
          <p className="text-subtitle">Premium venues across Bengaluru&apos;s tech corridor.</p>
        </motion.div>

        {/* ── 3 equal cards — each ~380 px height ────── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}
        >
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
              style={{
                background: "rgba(13,17,23,0.85)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 380,
                transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 64px ${v.color}18`;
                (e.currentTarget as HTMLElement).style.borderColor = `${v.color}28`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Map placeholder — fixed 180 px */}
              <div
                style={{
                  height: 180,
                  background: `linear-gradient(145deg, ${v.color}12 0%, rgba(13,17,23,0.95) 100%)`,
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {/* SVG pseudo-map */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ opacity: 0.22 }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id={`gp-${i}`} width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke={v.color} strokeWidth="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#gp-${i})`} />
                  <line x1="0" y1="70" x2="100%" y2="70" stroke={v.color} strokeWidth="2" opacity="0.4" />
                  <line x1="0" y1="130" x2="100%" y2="130" stroke={v.color} strokeWidth="1" opacity="0.25" />
                  <line x1="70" y1="0" x2="70" y2="100%" stroke={v.color} strokeWidth="2" opacity="0.4" />
                  <line x1="170" y1="0" x2="170" y2="100%" stroke={v.color} strokeWidth="1" opacity="0.25" />
                  <rect x="12" y="22" width="44" height="30" fill={v.color} opacity="0.1" rx="3" />
                  <rect x="82" y="14" width="70" height="40" fill={v.color} opacity="0.12" rx="3" />
                  <rect x="176" y="28" width="50" height="28" fill={v.color} opacity="0.1" rx="3" />
                  <rect x="12" y="88" width="40" height="24" fill={v.color} opacity="0.08" rx="3" />
                  <circle cx="50%" cy="50%" r="7" fill={v.color} opacity="0.85" />
                  <circle cx="50%" cy="50%" r="16" fill={v.color} opacity="0.18" />
                  <circle cx="50%" cy="50%" r="26" fill={v.color} opacity="0.07" />
                </svg>

                {/* Pin label */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ gap: 8 }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: v.color,
                      boxShadow: `0 4px 20px ${v.color}55`,
                    }}
                  >
                    <Navigation size={18} color="#fff" />
                  </div>
                  <span
                    style={{
                      fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)",
                      textAlign: "center", maxWidth: 160, lineHeight: 1.35,
                    }}
                  >
                    {v.name}
                  </span>
                </div>

                {/* Tag */}
                <div style={{ position: "absolute", top: 12, left: 12 }}>
                  <span
                    style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                      padding: "4px 10px", borderRadius: 8,
                      background: `${v.color}22`, border: `1px solid ${v.color}44`, color: v.color,
                    }}
                  >
                    {v.tag}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div
                className="flex flex-col flex-1"
                style={{ padding: "20px 22px 22px" }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4, lineHeight: 1.3 }}>{v.name}</h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: v.color, marginBottom: 12 }}>{v.event}</p>

                <div className="flex items-start gap-1.5" style={{ marginBottom: 6 }}>
                  <MapPin size={12} style={{ color: "#6B7280", marginTop: 2, flexShrink: 0 }} />
                  <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{v.address}</p>
                </div>
                <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16 }}>{v.date}</p>

                <a
                  href={v.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-auto"
                  style={{ fontSize: 13, fontWeight: 600, color: v.color, transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                  <ExternalLink size={12} />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          #venues .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #venues .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
