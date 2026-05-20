import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RetailIQ — Physical Business Intelligence & Launch Platform",
  description:
    "Analyze locations, study competitors, forecast demand, and build profitable physical businesses using modern retail intelligence systems. Launch smarter with RetailIQ.",
  keywords:
    "retail intelligence, location analysis, competitor mapping, demand forecasting, physical business analytics, retail analytics platform",
  openGraph: {
    title: "RetailIQ — Physical Business Intelligence",
    description:
      "Launch your physical business with data-driven intelligence. Analyze locations, map competitors, and forecast demand.",
    type: "website",
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
