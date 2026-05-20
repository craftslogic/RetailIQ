"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Users, TrendingUp, MapPin, Wifi, ShoppingBag } from "lucide-react";

const HEATMAP = [
  [0.2, 0.4, 0.7, 0.9, 0.6, 0.3, 0.2],
  [0.4, 0.8, 1.0, 0.9, 0.8, 0.5, 0.3],
  [0.3, 0.7, 0.9, 1.0, 0.9, 0.7, 0.4],
  [0.2, 0.5, 0.8, 0.8, 0.6, 0.4, 0.2],
  [0.1, 0.3, 0.5, 0.6, 0.4, 0.2, 0.1],
];

function getHeatColor(v: number) {
  if (v < 0.3) return `rgba(37,99,235,${v * 0.6})`;
  if (v < 0.6) return `rgba(6,182,212,${v * 0.7})`;
  if (v < 0.85) return `rgba(245,158,11,${v * 0.8})`;
  return `rgba(239,68,68,${v * 0.9})`;
}

const INSIGHTS = [
  { icon: Activity, label: "Weekend Activity Boost", value: "+34%", color: "#10B981", desc: "This district shows 34% higher customer activity during weekends." },
  { icon: Users, label: "Demographic Match", value: "87%", color: "#2563EB", desc: "Target demographic concentration in primary catchment area." },
  { icon: TrendingUp, label: "Spending Behavior", value: "High", color: "#F59E0B", desc: "Average basket size 2.4× the city baseline in this zone." },
  { icon: ShoppingBag, label: "Commercial Activity", value: "Peak", color: "#06B6D4", desc: "Commercial density in top 15% of all analyzed districts." },
  { icon: Wifi, label: "Accessibility Score", value: "9.1/10", color: "#8B5CF6", desc: "Excellent transit connectivity — 3 major routes within 400m." },
  { icon: MapPin, label: "Demand Level", value: "Very High", color: "#EF4444", desc: "Unmet demand signals detected across 6 retail categories." },
];

function HeatmapGrid() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden" style={{ background: "rgba(7,17,31,0.9)", border: "1px solid rgba(37,99,235,0.25)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div>
          <p className="text-sm font-bold" style={{ color: "#F8FAFC" }}>Area Demand Heatmap</p>
          <p className="text-xs" style={{ color: "#94A3B8" }}>District 7 — Karachi Central</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium" style={{ color: "#10B981" }}>Scanning</span>
        </div>
      </div>

      {/* Heatmap */}
      <div className="p-5 relative">
        {/* Scan effect */}
        <motion.div
          className="absolute left-5 right-5 h-0.5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent)", zIndex: 5 }}
          animate={{ top: ["20px", "calc(100% - 20px)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
          {HEATMAP.flatMap((row, ri) =>
            row.map((v, ci) => (
              <motion.div
                key={`${ri}-${ci}`}
                className="rounded-md"
                style={{ height: 32, background: getHeatColor(v) }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={animated ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: (ri * 7 + ci) * 0.025, duration: 0.4 }}
              />
            ))
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs" style={{ color: "#94A3B8" }}>Low</span>
          <div className="flex-1 h-2 rounded-full" style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.4), rgba(6,182,212,0.6), rgba(245,158,11,0.7), rgba(239,68,68,0.8))" }} />
          <span className="text-xs" style={{ color: "#94A3B8" }}>High</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="px-5 pb-4">
        <div className="rounded-xl p-3" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
          <p className="text-xs font-semibold mb-0.5" style={{ color: "#10B981" }}>💡 AI Insight</p>
          <p className="text-xs leading-relaxed" style={{ color: "#CBD5E1" }}>
            This district shows <strong style={{ color: "#10B981" }}>34% higher customer activity</strong> during weekends — ideal for food, retail, and lifestyle businesses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LocationIntelligenceSection() {
  return (
    <section id="intelligence" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 flex justify-center">
            <span className="section-label"><MapPin size={11} />Area Intelligence</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
            Immersive <span className="text-gradient-primary">Location</span> Intelligence
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Deep-dive into any area's commercial DNA — foot traffic patterns, demographic clusters, spending behavior, and real-time demand signals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Heatmap */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <HeatmapGrid />
          </motion.div>

          {/* Insight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INSIGHTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-5"
                style={{ borderColor: `${item.color}22` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}18` }}>
                    <item.icon size={16} color={item.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "#94A3B8" }}>{item.label}</p>
                    <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
