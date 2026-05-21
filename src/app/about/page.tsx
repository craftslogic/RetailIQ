import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Spotlix — Physical Business Intelligence Platform",
  description:
    "Learn how Spotlix was built to help businesses make smarter launch and expansion decisions through modern market intelligence and strategic analysis.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}