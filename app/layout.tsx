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
    default: "Bengaluru AI & Developer Week 2026 | AI, Embedded Systems & Hackathons",
    template: "%s | Bengaluru AI & Developer Week 2026",
  },

  description:
    "A curated week exploring AI, embedded systems, enterprise software, hackathons and developer communities across Bengaluru. 21–26 July 2026.",

  keywords: [
    "Bengaluru AI Developer Week 2026",
    "NXP Tech Days Bengaluru 2026",
    "ABBYY Ascend DevCon 2026",
    "India Agentic AI Open Hackathon",
    "AI Mobile Coders Meetup Bengaluru",
    "embedded systems conference India",
    "enterprise AI conference Bengaluru",
    "developer conference Bengaluru",
    "AI workshop Bengaluru",
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
    title: "Bengaluru AI & Developer Week 2026 | AI, Embedded Systems & Hackathons",
    description:
      "A curated week exploring AI, embedded systems, enterprise software, hackathons and developer communities across Bengaluru. 21–26 July 2026.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bengaluru AI & Developer Week 2026 — 21–26 July",
      },
    ],
  },

  /* Twitter / X Card ─────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Bengaluru AI & Developer Week 2026 | AI, Embedded Systems & Hackathons",
    description:
      "A curated week exploring AI, embedded systems, enterprise software, hackathons and developer communities across Bengaluru. 21–26 July 2026.",
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
