"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Schedule", href: "#schedule" },
  { label: "Events",   href: "#events" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ",      href: "#faq" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["home","schedule","events","timeline","faq","register"];
      const hit = ids.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
      });
      if (hit) setActive(hit);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Fixed bar ────────────────────────────────────── */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
          paddingBottom: 0,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/*
          Inner pill — max 1200 px wide
          On scroll: glass pill with blur + border
          At top: fully transparent
        */}
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            height: 72,
            minHeight: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 24,
            paddingRight: 20,
            borderRadius: 18,
            transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s, backdrop-filter 0.4s",
            background: scrolled
              ? "rgba(5, 8, 22, 0.80)"
              : "transparent",
            backdropFilter: scrolled ? "blur(28px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "none",
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => go("#home")}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34, height: 34,
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(37,99,235,0.38)",
                flexShrink: 0,
              }}
            >
              <Zap size={16} color="#fff" />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              BLR AI Week <span style={{ color: "#6B7280", fontWeight: 400 }}>2026</span>
            </span>
          </button>

          {/* ── Nav links — desktop only (lg+), hidden on mobile via Tailwind ── */}
          <nav
            className="hidden lg:flex"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              alignItems: "center",
              gap: 2,
            }}
          >
            {navLinks.map(link => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  style={{
                    position: "relative",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#fff" : "#9CA3AF",
                    transition: "color 0.2s",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "#e5e7eb"; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF"; }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      style={{
                        position: "absolute", inset: 0, borderRadius: 10,
                        background: "rgba(255,255,255,0.08)",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: "relative" }}>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* ── Right: CTA + mobile burger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <motion.button
              onClick={() => go("#register")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden lg:flex"
              style={{
                height: 40,
                padding: "0 20px",
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                transition: "box-shadow 0.2s, transform 0.2s",
                letterSpacing: "-0.01em",
              }}
            >
              Register Interest
            </motion.button>

            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden"
              style={{
                width: 40, height: 40,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "#fff",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 104,
              left: 16,
              right: 16,
              zIndex: 99,
              background: "rgba(5,8,22,0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.65)",
            }}
          >
            <div style={{ padding: "8px 0" }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045 }}
                  onClick={() => go(link.href)}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "13px 24px",
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 15, fontWeight: 500, color: "#9CA3AF",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF";
                    (e.currentTarget as HTMLButtonElement).style.background = "none";
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div style={{ padding: "8px 16px 16px" }}>
                <button
                  onClick={() => go("#register")}
                  style={{
                    display: "block", width: "100%", height: 48,
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    color: "#fff", border: "none", borderRadius: 12,
                    fontSize: 15, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Register Interest
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
