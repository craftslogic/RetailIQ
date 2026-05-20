"use client";

import { motion } from "framer-motion";
import { MapPin, BarChart2, TrendingUp, Zap, Map, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    color: "#2563EB",
    title: "Location Analysis",
    desc: "Identify high-potential business locations using market intelligence and local demand insights.",
    badge: "Core",
  },
  {
    icon: BarChart2,
    color: "#06B6D4",
    title: "Competitor Research",
    desc: "Analyze nearby competitors, market saturation, and customer behavior.",
    badge: "Intel",
  },
  {
    icon: TrendingUp,
    color: "#10B981",
    title: "Demand Intelligence",
    desc: "Understand purchasing behavior, local demand patterns, and commercial opportunities.",
    badge: "Data",
  },
  {
    icon: Zap,
    color: "#F59E0B",
    title: "Business Feasibility",
    desc: "Evaluate whether a business idea can scale successfully within a specific market or location.",
    badge: "Strategy",
  },
  {
    icon: Map,
    color: "#8B5CF6",
    title: "Expansion Strategy",
    desc: "Plan smarter expansion and scaling strategies for physical businesses.",
    badge: "Growth",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 map-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 flex justify-center">
            <span className="section-label"><Zap size={11} />Platform Features</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
            Every Tool You Need to{" "}
            <span className="text-gradient-primary">Launch Smart</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            A modern operating system for launching and scaling physical businesses.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 justify-center">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.35s ease" }}
              whileHover={{ y: -4, borderColor: `${f.color}44`, background: `${f.color}06` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${f.color}18`, border: `1px solid ${f.color}28` }}>
                  <f.icon size={20} color={f.color} strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${f.color}15`, color: f.color, border: `1px solid ${f.color}28` }}>
                  {f.badge}
                </span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#F1F5F9" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{f.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold" style={{ color: f.color }}>Explore Location Intelligence</span>
                <ArrowRight size={12} color={f.color} />
              </div>
              {/* Bottom border accent */}
              <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl" style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 }} />
            </motion.div>
          ))}
        </div>

        {/* Action CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(6,182,212,0.1) 100%)", border: "1px solid rgba(37,99,235,0.3)" }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 map-grid opacity-30 pointer-events-none" />
          {/* Glow blobs */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <p className="text-sm font-semibold mb-2" style={{ color: "#60A5FA" }}>Enterprise Grade Intelligence</p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              Start Building <span className="text-gradient-primary">Stronger Businesses</span>
            </h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>
              Access our complete location intelligence suite to discover, evaluate, and capitalize on high-potential market opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="btn-primary">
                <Zap size={16} /> Start Your Market Analysis
              </a>
              <a href="#contact" className="btn-secondary">Talk With Our Strategy Team <ArrowRight size={15} /></a>
            </div>
            <p className="mt-4 text-xs" style={{ color: "#64748B" }}>Enterprise-grade analytics · Full market validation · Strategic insights</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
