"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Navigation,
  TrendingUp,
  Users,
  Activity,
  Zap,
  ArrowRight,
} from "lucide-react";

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const MARKERS = [
  { x: 30, y: 40, type: "hot", label: "High Demand" },
  { x: 55, y: 25, type: "competitor", label: "Competitor" },
  { x: 70, y: 55, type: "hot", label: "Traffic Zone" },
  { x: 20, y: 65, type: "neutral", label: "Low Density" },
  { x: 82, y: 35, type: "competitor", label: "Competitor" },
  { x: 45, y: 72, type: "opportunity", label: "Opportunity" },
];

const TYPE_COLORS: Record<string, string> = {
  hot: "#EF4444",
  competitor: "#F59E0B",
  neutral: "#94A3B8",
  opportunity: "#10B981",
};

const COMPETITORS = [
  { name: "Urban Brew Co.", type: "Café", rating: 4.2, distance: "0.3km", color: "#EF4444" },
  { name: "Metro Eats", type: "Restaurant", rating: 3.8, distance: "0.5km", color: "#F59E0B" },
  { name: "Corner Store", type: "Retail", rating: 4.5, distance: "0.8km", color: "#10B981" },
];

function MapMarker({ x, y, type, label, delay = 0 }: { x: number; y: number; type: string; label: string; delay?: number }) {
  const color = TYPE_COLORS[type] || "#2563EB";
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", zIndex: 10 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <motion.div
        className="absolute rounded-full"
        style={{ width: 28, height: 28, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: `${color}22` }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, delay }}
      />
      <motion.div
        className="relative w-3.5 h-3.5 rounded-full cursor-pointer"
        style={{ background: color, boxShadow: `0 0 10px ${color}99` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
      {hov && (
        <div
          className="absolute bottom-full left-1/2 mb-2 px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none"
          style={{ transform: "translateX(-50%)", background: `${color}22`, border: `1px solid ${color}55`, color }}
        >
          {label}
        </div>
      )}
    </motion.div>
  );
}

function LiveMapPanel() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(7,17,31,0.95)",
        border: "1px solid rgba(37,99,235,0.3)",
        boxShadow: "0 0 60px rgba(37,99,235,0.15), 0 32px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-xs font-medium" style={{ color: "#94A3B8" }}>Location Intelligence Engine</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium" style={{ color: "#10B981" }}>Live</span>
        </div>
      </div>

      {/* Map viewport */}
      <div className="relative" style={{ height: 320 }}>
        <div className="absolute inset-0 map-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.9), transparent)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Radar */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{ width: 150, height: 150, left: "50%", top: "50%", transform: "translate(-50%,-50%)", border: "1px solid rgba(37,99,235,0.2)" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(37,99,235,0.18) 60deg, transparent 60deg)", transformOrigin: "center" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {[80, 120, 150].map((s, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: s, height: s, left: "50%", top: "50%", transform: "translate(-50%,-50%)", border: `1px solid rgba(37,99,235,${0.15 - i * 0.04})` }} />
        ))}

        {MARKERS.map((m, i) => <MapMarker key={i} {...m} delay={0.5 + i * 0.12} />)}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute top-3 left-3 px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          style={{ background: "rgba(37,99,235,0.18)", border: "1px solid rgba(37,99,235,0.35)", color: "#60A5FA" }}>
          <Navigation size={11} /> District 7 — Karachi
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
          className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          style={{ background: "rgba(16,185,129,0.18)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
          <Activity size={11} /> High opportunity zone
        </motion.div>
      </div>

      {/* Nearby */}
      <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-xs font-bold mb-2" style={{ color: "#94A3B8", letterSpacing: "0.07em" }}>NEARBY BUSINESSES</p>
        <div className="space-y-1.5">
          {COMPETITORS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 + i * 0.1 }}
              className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                <span className="text-xs font-medium" style={{ color: "#E2E8F0" }}>{c.name}</span>
                <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.05)", color: "#94A3B8" }}>{c.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs" style={{ color: "#F59E0B" }}>★ {c.rating}</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>{c.distance}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { label: "Foot Traffic", value: "4.2K/day", Icon: Users, color: "#2563EB" },
          { label: "Demand Score", value: "87/100", Icon: TrendingUp, color: "#10B981" },
          { label: "Competition", value: "Medium", Icon: BarChart2, color: "#F59E0B" },
        ].map(({ label, value, Icon, color }, i) => (
          <div key={i} className="px-4 py-3 flex flex-col gap-1" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
            <Icon size={12} color={color} />
            <p className="text-sm font-bold" style={{ color: "#F8FAFC" }}>{value}</p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const c1 = useCounter(500, 2000, started);
  const c2 = useCounter(78, 1800, started);
  const c3 = useCounter(94, 2200, started);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="section-label"><Zap size={11} />Physical Business Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-6"
              style={{ color: "#F8FAFC", letterSpacing: "-0.025em", lineHeight: "1.08" }}
            >
              Launch Your Business in the <span className="text-gradient-primary">Right Location.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8" style={{ color: "#94A3B8", maxWidth: 480 }}
            >
              Spotlix helps businesses analyze markets, evaluate locations, study competitors, and identify high-potential opportunities before launching physical businesses.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3 mb-12">
              <a href="#contact" className="btn-primary"><Zap size={15} />Start Your Analysis</a>
              <a href="#intelligence" className="btn-secondary">Explore Solutions <ArrowRight size={15} /></a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: `${c1}+`, label: "Locations Analyzed", color: "#2563EB" },
                { value: `${c2}%`, label: "Smarter Decisions", color: "#10B981" },
                { value: `${c3}%`, label: "Accuracy Rate", color: "#06B6D4" },
              ].map((m, i) => (
                <div key={i} className="metric-card text-center">
                  <p className="text-2xl font-bold mb-1" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-xs" style={{ color: "#94A3B8" }}>{m.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-2 flex-wrap">
              {["Real-world Demand Intelligence", "Live Analytics", "Enterprise Grade"].map((b) => (
                <span key={b} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8" }}>✓ {b}</span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="animate-float">
            <LiveMapPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
