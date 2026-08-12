import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ variable: "--font-mono-geist", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://kaushald4.netlify.app";

// viewportFit: "cover" lets the fullscreen mobile layout draw edge-to-edge under
// the notch/home-indicator, so env(safe-area-inset-*) reports real values instead
// of 0 — required for the safe-area padding on TitleBar/NavBar to do anything.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kaushal Mehta — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer specializing in scalable JS/TS systems and AI-powered applications — full-stack web, real-time systems, and autonomous agent architectures.",
  keywords: ["Kaushal Mehta", "Full Stack Engineer", "AI Engineer", "React", "Node.js", "TypeScript", "Next.js", "System Design"],
  authors: [{ name: "Kaushal Mehta", url: SITE_URL }],
  openGraph: {
    title: "Kaushal Mehta — Senior Full Stack Engineer",
    description: "Scalable JS/TS systems and AI-powered applications — full-stack web, real-time systems, and autonomous agent architectures.",
    url: SITE_URL,
    siteName: "Kaushal Mehta",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kaushal Mehta — Senior Full Stack Engineer",
    description: "Scalable JS/TS systems and AI-powered applications.",
    creator: "@k_kaushal_",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
