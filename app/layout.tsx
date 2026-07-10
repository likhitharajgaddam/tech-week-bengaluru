import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ── next/font eliminates render-blocking Google Fonts request ── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

/* ── Full production metadata ─────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://techweekbengaluru.in"),

  title: {
    default: "Tech Week Bengaluru 2026 | AI, Conferences & Hackathons",
    template: "%s | Tech Week Bengaluru 2026",
  },

  description:
    "Explore Bengaluru's biggest week of AI conferences, IEEE events, hackathons, networking sessions, and developer communities from 17–23 July 2026.",

  keywords: [
    "Tech Week Bengaluru",
    "Bengaluru tech events 2026",
    "IEEE ITC India 2026",
    "Build with Gemma AI Sprint",
    "India Agentic AI Hackathon",
    "NVIDIA hackathon India",
    "developer conference Bengaluru",
    "AI workshop Bengaluru",
    "software engineering conference India",
    "hackathon Bengaluru July 2026",
  ],

  authors: [{ name: "Tech Week Bengaluru" }],
  creator: "Tech Week Bengaluru",
  publisher: "Tech Week Bengaluru",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* Open Graph ───────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techweekbengaluru.in",
    siteName: "Tech Week Bengaluru 2026",
    title: "Tech Week Bengaluru 2026 | AI, Conferences & Hackathons",
    description:
      "Explore Bengaluru's biggest week of AI conferences, IEEE events, hackathons, networking sessions, and developer communities from 17–23 July 2026.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Week Bengaluru 2026 — 17–23 July",
      },
    ],
  },

  /* Twitter / X Card ─────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Tech Week Bengaluru 2026 | AI, Conferences & Hackathons",
    description:
      "Explore Bengaluru's biggest week of AI conferences, IEEE events, hackathons, networking sessions, and developer communities from 17–23 July 2026.",
    images: ["/og-image.png"],
    creator: "@TechWeekBLR",
  },

  /* Canonical / alternate ─────────────────────────────────────── */
  alternates: {
    canonical: "https://techweekbengaluru.in",
  },

  /* Icons ─────────────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
