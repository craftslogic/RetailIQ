import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spotlix — Physical Business Intelligence Platform",
  description:
    "Spotlix helps businesses analyze markets, evaluate locations, study competitors, and identify profitable opportunities before launching physical businesses.",
  keywords:
    "spotlix, retail intelligence, location analysis, competitor mapping, physical business intelligence, market validation, branding, business optimization",
  openGraph: {
    title: "Spotlix — Smarter Locations. Stronger Businesses.",
    description:
      "Spotlix helps businesses analyze markets, evaluate locations, study competitors, and identify profitable opportunities before launching physical businesses.",
    url: "https://spotlix.io",
    siteName: "Spotlix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spotlix — Physical Business Intelligence Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotlix — Smarter Locations. Stronger Businesses.",
    description: "Spotlix helps businesses analyze markets, evaluate locations, study competitors, and identify profitable opportunities before launching physical businesses.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased" style={{ background: "#07111F" }}>
        {children}
      </body>
    </html>
  );
}
