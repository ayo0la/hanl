import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HTC — Honors Training & Consulting | AI-First Learning Solutions",
  description:
    "Premier learning and capacity-building organization combining 20+ years of training methodologies with cutting-edge AI and automation expertise. 1,500+ courses across 8 industry sectors.",
  keywords: [
    "AI training Nigeria",
    "corporate training Lagos",
    "machine learning courses",
    "automation training",
    "professional development Nigeria",
    "HTC",
    "Honors Training",
    "Honors Consulting",
  ],
  openGraph: {
    title: "HTC — AI-First Learning Solutions for Nigerian Organizations",
    description:
      "Powering performance where strategy, culture, and intelligence meet. 1,500+ courses spanning traditional and emerging technologies.",
    url: "https://www.honorstraining.ng",
    siteName: "Honors Training & Consulting",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTC — AI-First Learning Solutions",
    description:
      "Powering performance where strategy, culture, and intelligence meet. 1,500+ courses spanning traditional and emerging technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
