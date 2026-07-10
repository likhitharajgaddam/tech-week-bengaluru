"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Zap, Mic } from "lucide-react";

/* Reduced density — 42 particles (was 70) */
const PARTICLE_COUNT = 42;

/* Floating code symbols — subtle, stay in margins */
const SYMBOLS = [
  { s: "{}",  x: "5%",  y: "18%", size: 20, delay: 0    },
  { s: "</>", x: "88%", y: "14%", size: 17, delay: 0.6  },
  { s: "AI",  x: "3%",  y: "60%", size: 15, delay: 1.1  },
  { s: "⟨⟩", x: "92%", y: "55%", size: 20, delay: 1.6  },
  { s: "∑",   x: "11%", y: "80%", size: 26, delay: 0.9  },
  { s: "λ",   x: "85%", y: "78%", size: 26, delay: 1.3  },
  { s: "#",   x: "27%", y: "10%", size: 20, delay: 0.8  },
  { s: "⌘",  x: "72%", y: "9%",  size: 20, delay: 1.0  },
];

/* Stats displayed below subtitle */
const STATS = [
  { icon: Calendar, label: "17–23 July 2026",    color: "#2563EB" },
  { icon: MapPin,   label: "Bengaluru",           color: "#7C3AED" },
  { icon: Zap,      label: "7 Days",              color: "#0EA5E9" },
  { icon: Mic,      label: "4 Events",            color: "#10B981" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Particle network canvas ─────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#2563EB", "#7C3AED", "#0EA5E9", "#818CF8"];
    const pts = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.3,
      vy:    (Math.random() - 0.5) * 0.3,
      r:     Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.45 + 0.08,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Dots */
      pts.forEach(p => {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      /* Connections */
      ctx.globalAlpha = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(37,99,235,${0.055 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#050816",
      }}
    >
      {/* ── Canvas ─────────────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
      />

      {/* ── Subtle grid ────────────────────────────────────── */}
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 2, opacity: 0.45 }}
      />

      {/* ── Background blobs ───────────────────────────────── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
        {/* Primary radial glow — centred directly behind heading */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -54%)",
            background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, rgba(124,58,237,0.08) 45%, transparent 70%)",
          }}
        />
        {/* Left accent */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            top: "30%",
            left: "8%",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Right accent */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: "50%",
            top: "40%",
            right: "5%",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Floating code symbols ───────────────────────────── */}
      {SYMBOLS.map((sym, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.22, 0.1], y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 4.5, repeat: Infinity, delay: sym.delay },
            y:       { duration: 6,   repeat: Infinity, ease: "easeInOut", delay: sym.delay },
          }}
          style={{
            position: "absolute",
            left: sym.x,
            top:  sym.y,
            fontSize: sym.size,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "rgba(129,140,248,0.45)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 4,
          }}
        >
          {sym.s}
        </motion.div>
      ))}

      {/* ── Hero content ───────────────────────────────────── */}
      {/*
        max-width 900px, centered, everything stacked with
        the exact spacing ladder from the brief:
          badge → 32px → heading → 24px → subtitle → 40px → stats → 48px → buttons → 56px → scroll cue
      */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 120,
          paddingBottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >

        {/* 1 — Badge ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 18px",
            borderRadius: 9999,
            background: "rgba(37,99,235,0.1)",
            border: "1px solid rgba(37,99,235,0.28)",
            color: "#93C5FD",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.02em",
            marginBottom: 32,
          }}
        >
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#2563EB", boxShadow: "0 0 8px #2563EB" }} />
          17–23 July 2026 &nbsp;·&nbsp; Bengaluru, Karnataka
        </motion.div>

        {/* 2 — Heading — two distinct lines ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 24 }}
        >
          {/* Line 1: "Tech Week" — white, slightly smaller */}
          <div className="text-hero-line1" style={{ display: "block" }}>
            Tech Week
          </div>
          {/* Line 2: "Bengaluru 2026" — gradient, bigger */}
          <div
            className="text-hero-line2"
            style={{
              display: "block",
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Bengaluru 2026
          </div>
        </motion.div>

        {/* 3 — Subtitle ─────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
          style={{
            maxWidth: 700,
            marginBottom: 40,
            fontSize: "clamp(16px, 1.8vw, 19px)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "#9CA3AF",
          }}
        >
          A curated week of AI, software engineering, conferences and hackathons across Bengaluru.
        </motion.p>

        {/* 4 — Stats row ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px 32px",
            marginBottom: 48,
          }}
        >
          {STATS.map((stat, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 14,
                fontWeight: 500,
                color: "#D1D5DB",
              }}
            >
              <stat.icon
                size={14}
                style={{ color: stat.color, flexShrink: 0 }}
              />
              {stat.label}
            </span>
          ))}
        </motion.div>

        {/* 5 — Buttons ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {/* Primary */}
          <motion.button
            onClick={() => scrollTo("schedule")}
            whileHover={{ scale: 1.035, boxShadow: "0 12px 40px rgba(37,99,235,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 56,
              padding: "0 36px",
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              color: "#fff",
              border: "none",
              borderRadius: 16,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              boxShadow: "0 6px 28px rgba(37,99,235,0.38)",
              transition: "box-shadow 0.25s",
            }}
          >
            View Schedule
            <ArrowRight size={17} />
          </motion.button>

          {/* Secondary */}
          <motion.button
            onClick={() => scrollTo("register")}
            whileHover={{ scale: 1.035, background: "rgba(255,255,255,0.09)", borderColor: "rgba(37,99,235,0.45)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 56,
              padding: "0 36px",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 16,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              backdropFilter: "blur(8px)",
              transition: "background 0.25s, border-color 0.25s",
            }}
          >
            Register Interest
          </motion.button>
        </motion.div>

      </div>

      {/* ── Scroll cue — bottom center, outside the flow ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#374151",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1.5,
            height: 44,
            borderRadius: 2,
            background: "linear-gradient(to bottom, rgba(37,99,235,0.55), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
