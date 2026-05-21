"use client";
import type { Metadata } from "next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import { Check, X, ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Pricing — Spotlix Intelligence Plans",
  description:
    "Choose the right intelligence plan for your business stage — from a free area scan to full enterprise expansion programs.",
};

const comparisonFeatures = [
  { feature: "Location Overview", area: true, location: true, retail: true, launch: true, optimization: true, expansion: true },
  { feature: "Competitor Mapping", area: false, location: true, retail: true, launch: true, optimization: true, expansion: true },
  { feature: "Demand Analysis", area: false, location: true, retail: true, launch: true, optimization: true, expansion: true },
  { feature: "Feasibility Report", area: false, location: false, retail: true, launch: true, optimization: true, expansion: true },
  { feature: "Brand Positioning", area: false, location: false, retail: false, launch: true, optimization: true, expansion: true },
  { feature: "Launch Roadmap", area: false, location: false, retail: false, launch: true, optimization: true, expansion: true },
  { feature: "Multi-Location Analysis", area: false, location: false, retail: false, launch: false, optimization: true, expansion: true },
  { feature: "Revenue Projections", area: false, location: false, retail: true, launch: true, optimization: true, expansion: true },
  { feature: "Strategy Consultation", area: false, location: false, retail: false, launch: true, optimization: true, expansion: true },
  { feature: "Priority Support", area: false, location: false, retail: false, launch: false, optimization: true, expansion: true },
  { feature: "Dedicated Analyst", area: false, location: false, retail: false, launch: false, optimization: false, expansion: true },
];

const planHeaders = [
  { name: "Area Scan", color: "#64748B" },
  { name: "Location", color: "#2563EB" },
  { name: "Retail", color: "#06B6D4" },
  { name: "Launch", color: "#8B5CF6" },
  { name: "Optimize", color: "#10B981" },
  { name: "Expand", color: "#F59E0B" },
];

export default function PricingPageClient() {
  const heroRef = useRef(null);
  const compareRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const compareInView = useInView(compareRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-36 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #05101D, #07111F, #091522)" }}>
          <div className="absolute inset-0 map-grid opacity-40" />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07111F] to-transparent" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex mb-6">
              <span className="section-label">Pricing</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Intelligence That Matches{" "}
              <span className="text-gradient-primary">Your Ambition</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              From a free area scan to full enterprise expansion programs. Choose the intelligence level that matches your business stage.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary gap-2">
                View All Plans <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-secondary">
                Custom Enterprise Pricing
              </a>
            </motion.div>
          </div>
        </section>

        {/* Pricing plans */}
        <PricingSection />

        {/* Comparison table */}
        <section ref={compareRef} className="py-20" style={{ background: "#061020" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={compareInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex mb-4">
                <span className="section-label">Plan Comparison</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={compareInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl font-bold text-white">
                Compare <span className="text-gradient-primary">All Features</span>
              </motion.h2>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={compareInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-48">Feature</th>
                      {planHeaders.map((p) => (
                        <th key={p.name} className="px-4 py-4 text-center">
                          <span className="text-xs font-bold" style={{ color: p.color }}>{p.name}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-white/3 hover:bg-white/2 transition-colors ${i % 2 === 0 ? "bg-white/1" : ""}`}>
                        <td className="px-6 py-3.5 text-sm text-slate-300">{row.feature}</td>
                        {(["area", "location", "retail", "launch", "optimization", "expansion"] as const).map((k) => (
                          <td key={k} className="px-4 py-3.5 text-center">
                            {row[k] ? (
                              <Check className="w-4 h-4 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-slate-700 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
