"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  MapPin, ExternalLink, Clock, Coffee, Laptop,
  Users, Moon, Mic, Award, Star, Layers, Briefcase, Monitor, Brain,
} from "lucide-react";
import { timelineData } from "../data";

const iconMap: Record<string, React.ElementType> = {
  plane: Clock, map: MapPin, coffee: Coffee, laptop: Laptop, users: Users,
  moon: Moon, mic: Mic, award: Award, star: Star, layers: Layers,
  briefcase: Briefcase, monitor: Monitor, brain: Brain,
};

/* ── Single card ──────────────────────────────────────────── */
function Card({ item, side }: { item: typeof timelineData[0]; side: "left" | "right" }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-56px" });

  const from = side === "left" ? -40 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      /* 520 px max, fills grid cell */
      style={{
        width: "100%",
        maxWidth: 520,
        /* align card edge to center line */
        marginLeft: side === "left"  ? "auto" : 0,
        marginRight: side === "right" ? "auto" : 0,
      }}
    >
      <div
        className="group"
        style={{
          background: "rgba(13,17,23,0.9)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 24,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          overflow: "hidden",
          transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 56px ${item.color}18`;
          (e.currentTarget as HTMLElement).style.borderColor = `${item.color}28`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        }}
      >
        {/* Top accent */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${item.color}, ${item.color}44)`, borderRadius: "24px 24px 0 0" }} />

        <div style={{ padding: "24px 28px" }}>
          {/* Badges */}
          <div className="flex flex-wrap items-center" style={{ gap: 8, marginBottom: 12 }}>
            <span
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.07em",
                padding: "4px 10px", borderRadius: 8,
                background: `${item.color}1a`, border: `1px solid ${item.color}35`, color: item.color,
              }}
            >
              {item.date}
            </span>
            {item.badge && (
              <span
                style={{
                  fontSize: 12, fontWeight: 600,
                  padding: "4px 10px", borderRadius: 8,
                  background: `${item.color}0d`, color: item.color,
                }}
              >
                {item.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 style={{ fontSize: 19, fontWeight: 700, color: "#fff", letterSpacing: "-0.015em", marginBottom: 8, lineHeight: 1.25 }}>
            {item.title}
          </h3>

          {/* Venue */}
          {item.venue && (
            <p className="flex items-center gap-1.5" style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 10 }}>
              <MapPin size={12} style={{ flexShrink: 0 }} />{item.venue}
            </p>
          )}

          {/* Description */}
          <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 18 }}>{item.description}</p>

          {/* Activity grid */}
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: item.link ? 20 : 0 }}
          >
            {item.activities.map((act, i) => {
              const Icon = iconMap[act.icon] || Clock;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2"
                  style={{ padding: "10px 12px", borderRadius: 12, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <Icon size={13} style={{ color: item.color, flexShrink: 0 }} />
                  <div>
                    <p className="text-label" style={{ color: "#4B5563", marginBottom: 2 }}>{act.time}</p>
                    <p style={{ fontSize: 12, color: "#fff", lineHeight: 1.3 }}>{act.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* External link */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                padding: "10px 18px", borderRadius: 12,
                background: `${item.color}14`, border: `1px solid ${item.color}30`,
                color: item.color, fontSize: 13, fontWeight: 600,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${item.color}22`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${item.color}14`; }}
            >
              <ExternalLink size={13} />
              {item.linkLabel}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export default function Timeline() {
  const headerRef  = useRef(null);
  const headerView = useInView(headerRef, { once: true, margin: "-64px" });
  const lineRef    = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start end","end start"] });
  const lineH = useTransform(scrollYProgress, [0,1], ["0%","100%"]);

  return (
    <section id="timeline" className="section-py overflow-x-clip">
      <div className="section-inner">

        {/* ── Header ────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div
            className="eyebrow"
            style={{ background: "rgba(124,58,237,0.11)", border: "1px solid rgba(124,58,237,0.24)", color: "#C4B5FD" }}
          >
            Timeline
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Your 7-Day Journey</h2>
          <p className="text-subtitle">A day-by-day breakdown of everything happening at Tech Week Bengaluru 2026.</p>
        </motion.div>

        {/* ── Desktop alternating timeline ──────────── */}
        <div className="hidden lg:block" style={{ position: "relative" }} ref={lineRef}>

          {/* Center spine — fixed exactly in the middle */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0, bottom: 0,
              width: 2,
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.05)",
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: lineH,
                background: "linear-gradient(to bottom, #2563EB, #7C3AED, #0EA5E9)",
                borderRadius: 2,
              }}
            />
          </div>

          {/* Rows */}
          {timelineData.map((item, i) => {
            const isLeft  = i % 2 === 0;

            return (
              <div
                key={`desktop-${item.day}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 64px 1fr",
                  alignItems: "start",
                  columnGap: 0,
                  marginBottom: i < timelineData.length - 1 ? 48 : 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Left slot */}
                <div style={{ paddingRight: 40 }}>
                  {isLeft && <Card item={item} side="left" />}
                </div>

                {/* Center dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
                  <DotBadge item={item} />
                </div>

                {/* Right slot */}
                <div style={{ paddingLeft: 40 }}>
                  {!isLeft && <Card item={item} side="right" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile single-column ──────────────────── */}
        <div className="lg:hidden" style={{ flexDirection: "column", gap: 0 }}>
          {timelineData.map((item, i) => (
            <div key={`mobile-${item.day}`} className="flex" style={{ gap: 16 }}>
              {/* Left: dot + line */}
              <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                <DotBadge item={item} small />
                {i < timelineData.length - 1 && (
                  <div
                    style={{ width: 2, flex: 1, marginTop: 8, background: `linear-gradient(to bottom, ${item.color}44, transparent)` }}
                  />
                )}
              </div>
              {/* Right: card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                style={{ flex: 1, paddingBottom: 40 }}
              >
                <Card item={item} side="right" />
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function DotBadge({ item, small }: { item: typeof timelineData[0]; small?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const size = small ? 40 : 52;

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.45, type: "spring", bounce: 0.3 }}
      style={{
        width: size, height: size, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(135deg, ${item.color}, ${item.color}99)`,
        boxShadow: `0 0 0 4px rgba(5,8,22,1), 0 0 0 6px ${item.color}44, 0 8px 24px ${item.color}30`,
        fontSize: small ? 13 : 16,
        fontWeight: 900,
        color: "#fff",
        flexShrink: 0,
        zIndex: 2,
      }}
    >
      {item.day}
    </motion.div>
  );
}
