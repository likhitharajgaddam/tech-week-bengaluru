"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

/*
  All images are real Pexels photos verified from live search results.
  Pexels CDN — free under the Pexels License. Attribution: pexels.com
*/
const PHOTOS = [
  {
    id: 0,
    caption: "NXP Tech Days — Opening Keynote",
    date: "21 July 2026",
    tag: "Day 1",
    tagColor: "#2563EB",
    hero: true,
    src: "https://images.pexels.com/photos/7648043/pexels-photo-7648043.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/7648043/pexels-photo-7648043.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 1,
    caption: "Embedded AI Workshop — Hands-on Session",
    date: "21 July 2026",
    tag: "Day 1",
    tagColor: "#2563EB",
    hero: false,
    src: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    caption: "NXP Tech Days — Edge AI & Industrial IoT",
    date: "22 July 2026",
    tag: "Day 2",
    tagColor: "#2563EB",
    hero: false,
    src: "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    caption: "ABBYY Ascend DevCon — Executive Keynote",
    date: "22 July 2026",
    tag: "Day 2",
    tagColor: "#0EA5E9",
    hero: false,
    src: "https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    caption: "Enterprise AI & Document Intelligence Sessions",
    date: "22 July 2026",
    tag: "Day 2",
    tagColor: "#0EA5E9",
    hero: false,
    src: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    caption: "ABBYY DevCon — Developer Workshops & Certs",
    date: "23 July 2026",
    tag: "Day 3",
    tagColor: "#0EA5E9",
    hero: false,
    src: "https://images.pexels.com/photos/31770764/pexels-photo-31770764.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/31770764/pexels-photo-31770764.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    caption: "India Agentic AI Hackathon — Opening Ceremony",
    date: "24 July 2026",
    tag: "Day 4",
    tagColor: "#F59E0B",
    hero: false,
    src: "https://images.pexels.com/photos/19451448/pexels-photo-19451448.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/19451448/pexels-photo-19451448.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    caption: "Hackathon — Team Formation & Mentorship",
    date: "24 July 2026",
    tag: "Day 4",
    tagColor: "#F59E0B",
    hero: false,
    src: "https://images.pexels.com/photos/7526590/pexels-photo-7526590.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/7526590/pexels-photo-7526590.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    caption: "Hackathon Finals — Overnight Coding Sprint",
    date: "25 July 2026",
    tag: "Day 5",
    tagColor: "#F59E0B",
    hero: false,
    src: "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/32866728/pexels-photo-32866728.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 9,
    caption: "Hackathon Finals — Project Presentations",
    date: "25 July 2026",
    tag: "Day 5",
    tagColor: "#F59E0B",
    hero: false,
    src: "https://images.pexels.com/photos/16323454/pexels-photo-16323454.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/16323454/pexels-photo-16323454.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 10,
    caption: "AI Mobile Coders Meetup — Community Talks",
    date: "26 July 2026",
    tag: "Day 6",
    tagColor: "#10B981",
    hero: false,
    src: "https://images.pexels.com/photos/31770788/pexels-photo-31770788.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/31770788/pexels-photo-31770788.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 11,
    caption: "AI Mobile Coders — Networking & Closing",
    date: "26 July 2026",
    tag: "Day 6",
    tagColor: "#10B981",
    hero: false,
    src: "https://images.pexels.com/photos/8348739/pexels-photo-8348739.jpeg?auto=compress&cs=tinysrgb&w=900",
    srcFull: "https://images.pexels.com/photos/8348739/pexels-photo-8348739.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

type Photo = typeof PHOTOS[0];

/* ─── NavBtn — declared at module scope so it is never re-created during render ── */
function LightboxNavBtn({
  side,
  onClick,
  disabled,
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-label={side === "left" ? "Previous photo" : "Next photo"}
      style={{
        position: "absolute",
        top: "50%",
        [side]: 20,
        transform: "translateY(-50%)",
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: disabled ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.14)",
        color: disabled ? "rgba(255,255,255,0.2)" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s",
        zIndex: 10,
      }}
      onMouseEnter={e => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = disabled
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.1)";
      }}
    >
      {side === "left" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

/* ─── Lightbox ───────────────────────────────────────────────── */
function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${photo.caption}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(2,4,14,0.96)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 80px",
      }}
    >
      {/* Image card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: 1080,
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 48px 120px rgba(0,0,0,0.85)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.srcFull}
          alt={photo.caption}
          style={{ width: "100%", maxHeight: "78vh", objectFit: "cover", display: "block" }}
        />

        {/* Meta bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "64px 28px 24px",
            background: "linear-gradient(to top, rgba(2,4,14,0.92) 0%, transparent 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "3px 11px",
                borderRadius: 9999,
                background: `${photo.tagColor}22`,
                border: `1px solid ${photo.tagColor}50`,
                color: photo.tagColor,
              }}
            >
              {photo.tag}
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>
              {photo.date}
            </span>
          </div>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            {photo.caption}
          </p>
        </div>

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            background: "rgba(0,0,0,0.45)",
            padding: "4px 13px",
            borderRadius: 9999,
            backdropFilter: "blur(8px)",
          }}
        >
          {index + 1} / {photos.length}
        </div>
      </motion.div>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
          zIndex: 20,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.22)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
        }}
      >
        <X size={19} />
      </button>

      <LightboxNavBtn side="left" onClick={onPrev} disabled={index === 0} />
      <LightboxNavBtn side="right" onClick={onNext} disabled={index === photos.length - 1} />
    </motion.div>
  );
}

/* ─── Tile — also at module scope ───────────────────────────── */
function Tile({
  photo,
  index,
  inView,
  onOpen,
}: {
  photo: Photo;
  index: number;
  inView: boolean;
  onOpen: (i: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.065, 0.65),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onOpen(index)}
      className="gallery-tile"
      style={{
        breakInside: "avoid",
        marginBottom: 16,
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        cursor: "zoom-in",
        background: "#0D1117",
        display: "block",
      }}
    >
      {/* next/image with fill + unoptimized for external Pexels CDN */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: photo.hero ? 480 : 260,
        }}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover", transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)" }}
          loading={index < 4 ? "eager" : "lazy"}
          unoptimized
        />
      </div>

      {/* Permanent gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(2,4,14,0.78) 0%, rgba(2,4,14,0.15) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Tag */}
      <div style={{ position: "absolute", top: 14, left: 14 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.07em",
            padding: "4px 11px",
            borderRadius: 9999,
            background: `${photo.tagColor}25`,
            border: `1px solid ${photo.tagColor}55`,
            color: photo.tagColor,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {photo.tag}
        </span>
      </div>

      {/* Zoom icon */}
      <div
        className="tile-zoom"
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.25s",
          pointerEvents: "none",
        }}
      >
        <ZoomIn size={15} color="#fff" />
      </div>

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "32px 16px 14px",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            marginBottom: 3,
          }}
        >
          {photo.caption}
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", fontWeight: 500 }}>
          {photo.date}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Gallery section ────────────────────────────────────────── */
export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(
    () => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i)),
    []
  );
  const nextPhoto = useCallback(
    () => setLightboxIndex(i => (i !== null && i < PHOTOS.length - 1 ? i + 1 : i)),
    []
  );

  return (
    <>
      <section id="gallery" ref={ref} style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div
          style={{
            maxWidth: 1400,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 56 }}
          >
            <div
              className="eyebrow"
              style={{
                display: "inline-flex",
                background: "rgba(236,72,153,0.1)",
                border: "1px solid rgba(236,72,153,0.22)",
                color: "#F9A8D4",
                marginBottom: 16,
              }}
            >
              Gallery
            </div>
            <h2 className="text-section" style={{ color: "#fff", marginBottom: 16 }}>
              Moments from the Week
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "#9CA3AF",
                lineHeight: 1.65,
                maxWidth: 560,
              }}
            >
              A visual journey through Bengaluru AI &amp; Developer Week 2026 — from embedded systems and enterprise AI to all-night hackathon sprints and developer community meetups.
            </p>
          </motion.div>

          {/* Masonry: 4 cols desktop, 2 tablet, 1 mobile */}
          <div id="gallery-masonry" style={{ columns: 4, columnGap: 16 }}>
            {PHOTOS.map((photo, i) => (
              <Tile
                key={photo.id}
                photo={photo}
                index={i}
                inView={inView}
                onOpen={openLightbox}
              />
            ))}
          </div>

          <p
            style={{
              marginTop: 32,
              fontSize: 12,
              color: "#374151",
              textAlign: "center",
            }}
          >
            Photos from{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4B5563", textDecoration: "underline" }}
            >
              Pexels
            </a>{" "}
            · Free under the Pexels License
          </p>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={PHOTOS}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>

      <style>{`
        .gallery-tile { transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease; }
        .gallery-tile:hover { transform: scale(1.02); box-shadow: 0 20px 56px rgba(0,0,0,0.5); position: relative; z-index: 10; }
        .gallery-tile:hover img { transform: scale(1.05); }
        .gallery-tile:hover .tile-zoom { opacity: 1 !important; }
        @media (max-width: 1024px) { #gallery-masonry { columns: 2 !important; } }
        @media (max-width: 640px)  { #gallery-masonry { columns: 1 !important; column-gap: 0 !important; } }
      `}</style>
    </>
  );
}
