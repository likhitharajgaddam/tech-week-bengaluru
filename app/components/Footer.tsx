"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Share2, Mail, Zap, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: GitBranch, label: "GitHub",    href: "https://github.com" },
  { icon: Link2,     label: "LinkedIn",  href: "https://linkedin.com" },
  { icon: Share2,    label: "Instagram", href: "https://instagram.com" },
  { icon: Mail,      label: "Email",     href: "mailto:techweekblr@email.com" },
];

const quickLinks = [
  { label: "Home",     href: "#home" },
  { label: "Schedule", href: "#schedule" },
  { label: "Events",   href: "#events" },
  { label: "Timeline", href: "#timeline" },
  { label: "Venues",   href: "#venues" },
  { label: "FAQ",      href: "#faq" },
  { label: "Register", href: "#register" },
];

const officialLinks = [
  { label: "NXP Tech Days Bengaluru",     href: "https://www.aicas.com/events/nxp-tech-days-bengaluru-2026/" },
  { label: "ABBYY Ascend DevCon 2026",    href: "https://www.meetup.com/abbyy-ascend-devcon-2026/events/315423262/" },
  { label: "India Agentic AI Hackathon",  href: "https://www.openhackathons.org/s/siteevent/a0CUP00004gn7e32AA/se000496" },
  { label: "AI Mobile Coders Meetup",     href: "https://aimobilecoders.com/events/2" },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ position: "relative", paddingTop: 96, paddingBottom: 48, overflow: "hidden" }}>

      {/* Top separator line */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.45) 30%, rgba(124,58,237,0.45) 70%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div style={{ position: "absolute", bottom: 0, left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-inner" style={{ position: "relative" }}>

        {/* ── 4-column grid ─────────────────────────── */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >

          {/* Col 1 — Brand + description + social */}
          <div>
            {/* Logo */}
            <div className="flex items-center" style={{ gap: 12, marginBottom: 20 }}>
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 38, height: 38, background: "linear-gradient(135deg, #2563EB, #7C3AED)", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
              >
                <Zap size={18} color="#fff" />
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>Bengaluru AI &amp; Dev Week</p>
                <p style={{ fontSize: 12, color: "#6B7280" }}>2026 Edition</p>
              </div>
            </div>

            <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.72, maxWidth: 320, marginBottom: 24 }}>
              A curated 6-day tech itinerary exploring AI, embedded systems, enterprise software, hackathons and developer communities across Bengaluru.
            </p>

            {/* Date badge */}
            <div style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-block", fontSize: 12, fontWeight: 600,
                  padding: "6px 14px", borderRadius: 9999,
                  background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.22)", color: "#93C5FD",
                }}
              >
              21–26 July 2026 · Bengaluru
              </span>
            </div>

            {/* Social icons */}
            <div className="flex" style={{ gap: 10 }}>
              {socialLinks.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  title={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#9CA3AF", transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.4)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <s.icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <p className="text-label" style={{ color: "#fff", marginBottom: 20 }}>Quick Links</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontSize: 14, color: "#9CA3AF", background: "transparent", border: "none", cursor: "pointer",
                      transition: "color 0.18s", padding: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9CA3AF"}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Official events */}
          <div>
            <p className="text-label" style={{ color: "#fff", marginBottom: 20 }}>Events</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {officialLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                    style={{ fontSize: 14, color: "#9CA3AF", transition: "color 0.18s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#9CA3AF"}
                  >
                    <ExternalLink size={12} style={{ flexShrink: 0 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-label" style={{ color: "#fff", marginBottom: 20 }}>Contact</p>
            <div
              style={{
                padding: "18px 20px",
                borderRadius: 16,
                background: "rgba(37,99,235,0.07)",
                border: "1px solid rgba(37,99,235,0.18)",
              }}
            >
              <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 6, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Email</p>
              <a
                href="mailto:techweekblr@email.com"
                style={{ fontSize: 14, color: "#93C5FD", wordBreak: "break-all", transition: "color 0.18s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#93C5FD"}
              >
                techweekblr@email.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div
          className="flex flex-wrap items-center justify-between"
          style={{ paddingTop: 32, gap: 12 }}
        >
          <p style={{ fontSize: 14, color: "#4B5563" }}>© 2026 Bengaluru AI &amp; Developer Week. All rights reserved.</p>
          <p style={{ fontSize: 14, color: "#4B5563" }}>Built with ❤️ for the Bengaluru tech community</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer .grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          footer .grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer { padding-top: 64px !important; }
        }
      `}</style>
    </footer>
  );
}
