"use client";

import { motion } from "framer-motion";
import { BarChart2, Star, TrendingUp, MapPin, Users, Globe } from "lucide-react";

const COMPETITORS = [
  {
    name: "Urban Brew Co.",
    type: "Café & Bakery",
    rating: 4.2,
    reviews: 847,
    priceRange: "₨₨",
    popularity: 74,
    branding: 62,
    social: 58,
    distance: "0.3 km",
    color: "#EF4444",
    tag: "Direct Threat",
    tagColor: "#EF4444",
  },
  {
    name: "Metro Eats",
    type: "Fast Casual",
    rating: 3.8,
    reviews: 512,
    priceRange: "₨",
    popularity: 55,
    branding: 40,
    social: 35,
    distance: "0.5 km",
    color: "#F59E0B",
    tag: "Weak Competitor",
    tagColor: "#10B981",
  },
  {
    name: "The Corner House",
    type: "Lifestyle Retail",
    rating: 4.6,
    reviews: 1243,
    priceRange: "₨₨₨",
    popularity: 91,
    branding: 88,
    social: 79,
    distance: "0.8 km",
    color: "#8B5CF6",
    tag: "Market Leader",
    tagColor: "#8B5CF6",
  },
];

const BARS = [
  { label: "Popularity", key: "popularity" as const, color: "#2563EB" },
  { label: "Branding Quality", key: "branding" as const, color: "#06B6D4" },
  { label: "Social Presence", key: "social" as const, color: "#10B981" },
];

function CompetitorCard({ c, i }: { c: (typeof COMPETITORS)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${c.color}25`,
        transition: "all 0.3s ease",
      }}
      whileHover={{ y: -3, borderColor: `${c.color}55`, background: `${c.color}07` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}88` }} />
            <h3 className="text-sm font-bold" style={{ color: "#F1F5F9" }}>{c.name}</h3>
          </div>
          <p className="text-xs" style={{ color: "#64748B" }}>{c.type}</p>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${c.tagColor}18`, color: c.tagColor, border: `1px solid ${c.tagColor}30` }}
        >
          {c.tag}
        </span>
      </div>

      {/* Mini stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Star, value: `${c.rating}★`, label: "Rating", color: "#F59E0B" },
          { icon: Users, value: c.reviews.toLocaleString(), label: "Reviews", color: "#2563EB" },
          { icon: MapPin, value: c.distance, label: "Distance", color: "#94A3B8" },
        ].map(({ icon: Icon, value, label, color }, j) => (
          <div key={j} className="rounded-xl p-2.5 text-center" style={{ background: "rgba(255,255,255,0.03)" }}>
            <Icon size={11} color={color} className="mx-auto mb-1" />
            <p className="text-xs font-bold" style={{ color: "#F1F5F9" }}>{value}</p>
            <p className="text-xs" style={{ color: "#64748B" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Analytics bars */}
      <div className="space-y-2.5">
        {BARS.map(({ label, key, color }) => (
          <div key={key}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: "#94A3B8" }}>{label}</span>
              <span className="text-xs font-semibold" style={{ color }}>{c[key]}%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${c[key]}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Price range */}
      <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="text-xs" style={{ color: "#64748B" }}>Price Range</span>
        <span className="text-sm font-bold" style={{ color: "#F59E0B" }}>{c.priceRange}</span>
      </div>
    </motion.div>
  );
}

export default function CompetitorIntelligenceSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 flex justify-center">
            <span className="section-label"><BarChart2 size={11} />Competitor Intelligence</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
            Advanced <span className="text-gradient-primary">Competitor</span> Mapping
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Know exactly who you're competing with — their pricing, reviews, branding quality, and social presence — before you spend a single rupee.
          </motion.p>
        </div>

        {/* Market saturation alert */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl px-6 py-4 flex items-start sm:items-center gap-4 flex-col sm:flex-row"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)" }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.15)" }}>
            <Globe size={18} color="#F59E0B" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-0.5" style={{ color: "#FCD34D" }}>Market Saturation Alert</p>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              This area already contains <strong style={{ color: "#F59E0B" }}>12 clothing stores</strong> targeting the same 18–35 audience — a Spotlix flag that saved one client ₨4.2M in misallocated capital.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.2)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.4)" }}>
              HIGH RISK
            </span>
          </div>
        </motion.div>

        {/* Competitor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {COMPETITORS.map((c, i) => <CompetitorCard key={i} c={c} i={i} />)}
        </div>

        {/* Summary metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Competitors Mapped", value: "12", sub: "In 1km radius", color: "#2563EB" },
            { label: "Market Saturation", value: "High", sub: "Top 20% density", color: "#EF4444" },
            { label: "Avg. Competitor Rating", value: "4.1★", sub: "Across 2,602 reviews", color: "#F59E0B" },
            { label: "Gap Opportunity", value: "3 niches", sub: "Underserved segments", color: "#10B981" },
          ].map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="metric-card text-center">
              <p className="text-2xl font-bold mb-1" style={{ color: m.color }}>{m.value}</p>
              <p className="text-sm font-medium mb-0.5" style={{ color: "#E2E8F0" }}>{m.label}</p>
              <p className="text-xs" style={{ color: "#64748B" }}>{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
