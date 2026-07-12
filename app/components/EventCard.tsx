"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Zap, Trophy, Users, Lightbulb, Brain, Cpu } from "lucide-react";
import { eventsData } from "../data";

const eventIcons: Record<string, React.ElementType> = {
  "Embedded Systems": Cpu,
  "Enterprise AI":    Brain,
  "Community":        Users,
  "AI Workshop":      Brain,
  "AI Community":     Users,
  Hackathon:          Trophy,
  Conference:         Zap,
  Networking:         Users,
  Innovation:         Lightbulb,
};

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  /* Split into rows: first 4 in a 2×2, last card centred */
  const firstFour = eventsData.slice(0, 4);
  const remainder = eventsData.slice(4);

  return (
    <section id="events" className="section-py overflow-x-clip" ref={ref}>
      <div className="section-inner">

        {/* ── Header ──────────────────────────────────── */}
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
            Events
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Featured Events</h2>
          <p className="text-subtitle">
            Five events across the week, each offering unique learning and networking experiences.
          </p>
        </motion.div>

        {/* ── First 4 cards — 2×2 grid ────────────────── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginBottom: remainder.length ? 32 : 0 }}
        >
          {firstFour.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              index={i}
              inView={inView}
              scrollTo={scrollTo}
            />
          ))}
        </div>

        {/* ── Last card — centred ──────────────────────── */}
        {remainder.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "calc(50% - 16px)" }}>
              <EventCard
                event={remainder[0]}
                index={4}
                inView={inView}
                scrollTo={scrollTo}
              />
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          #events .grid { grid-template-columns: 1fr !important; }
          #events [style*="calc(50%"] { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Single card ─────────────────────────────────────────── */
function EventCard({
  event,
  index,
  inView,
  scrollTo,
}: {
  event: typeof eventsData[0];
  index: number;
  inView: boolean;
  scrollTo: (id: string) => void;
}) {
  const Icon = eventIcons[event.tag] || Zap;

  const handleCta = (e: React.MouseEvent) => {
    if (event.scrollTo) {
      e.preventDefault();
      scrollTo(event.scrollTo);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden"
      style={{
        background: "rgba(13,17,23,0.85)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 24,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1), box-shadow 0.28s ease, border-color 0.28s ease",
        display: "flex",
        flexDirection: "column",
        minHeight: 420,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 64px ${event.color}1a`;
        (e.currentTarget as HTMLElement).style.borderColor = `${event.color}30`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 35% 30%, ${event.color}12 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${event.color}, ${event.color}55)`, borderRadius: "24px 24px 0 0" }} />

      {/* Card body */}
      <div className="relative flex flex-col flex-1" style={{ padding: "28px 28px 28px" }}>

        {/* Icon + tag row */}
        <div className="flex items-start justify-between" style={{ marginBottom: 20 }}>
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ width: 56, height: 56, background: `${event.color}18`, border: `1px solid ${event.color}35` }}
          >
            <Icon size={24} style={{ color: event.color }} />
          </div>
          <span
            style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.07em",
              padding: "5px 12px", borderRadius: 9999,
              background: `${event.color}14`, border: `1px solid ${event.color}30`, color: event.color,
              marginTop: 4,
            }}
          >
            {event.tag}
          </span>
        </div>

        {/* Title + subtitle */}
        <h3 className="text-card-title" style={{ color: "#fff", marginBottom: 4 }}>{event.title}</h3>
        <p style={{ fontSize: 14, fontWeight: 600, color: event.color, marginBottom: 14 }}>{event.subtitle}</p>

        {/* Description */}
        <p style={{ fontSize: 15, color: "#9CA3AF", lineHeight: 1.65, marginBottom: 20, flex: "1 0 auto" }}>
          {event.description}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
          <span className="flex items-center gap-2" style={{ fontSize: 14, color: "#9CA3AF" }}>
            <Calendar size={13} style={{ color: event.color, flexShrink: 0 }} />{event.date}
          </span>
          <span className="flex items-center gap-2" style={{ fontSize: 14, color: "#9CA3AF" }}>
            <MapPin size={13} style={{ color: event.color, flexShrink: 0 }} />{event.venue}
          </span>
        </div>

        {/* CTA */}
        {event.scrollTo ? (
          /* Scroll-to-register button — no external link */
          <button
            onClick={handleCta}
            className="btn w-full"
            style={{
              background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
              boxShadow: `0 4px 20px ${event.color}28`,
              color: "#fff",
              marginTop: "auto",
              borderRadius: 12,
              height: 48,
              fontSize: 15,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {event.ctaLabel}
          </button>
        ) : (
          /* External link button */
          <a
            href={event.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full"
            style={{
              background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
              boxShadow: `0 4px 20px ${event.color}28`,
              color: "#fff",
              marginTop: "auto",
              borderRadius: 12,
              height: 48,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <ExternalLink size={15} />
            {event.ctaLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}
