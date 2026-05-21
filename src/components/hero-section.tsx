"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, MapPin, BarChart3, TrendingUp, Sparkles } from "lucide-react";

const floatingCards = [
  { label: "Location Score", value: "94/100", color: "#2563EB", icon: MapPin, top: "10%", right: "5%" },
  { label: "Market Demand", value: "+127%", color: "#06B6D4", icon: TrendingUp, bottom: "20%", left: "5%" },
  { label: "Competitor Gap", value: "3.2km", color: "#10B981", icon: BarChart3, top: "55%", right: "3%" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #05101D 0%, #07111F 50%, #091522 100%)" }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 map-grid opacity-60" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/4 rounded-full blur-3xl" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" style={{ animation: "scan-line 6s linear infinite" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="section-label">
                <Sparkles className="w-3.5 h-3.5" />
                Physical Business Intelligence Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Launch Your Business{" "}
              <span className="text-gradient-primary">in the Right</span>{" "}
              Location
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Spotlix helps businesses analyze markets, evaluate locations, study competitors,
              and identify high-potential opportunities before launching physical businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button onClick={scrollToContact} className="btn-primary gap-2">
                Start Your Analysis
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={scrollToFeatures} className="btn-secondary gap-2">
                <Play className="w-4 h-4" />
                See How It Works
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { val: "500+", label: "Businesses Analyzed" },
                { val: "98%", label: "Client Satisfaction" },
                { val: "12+", label: "Industries Served" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">{stat.val}</span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main dashboard card */}
            <div className="relative glass-card rounded-2xl p-6 glow-border-primary animate-float">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location Intelligence Report</p>
                  <p className="text-lg font-bold text-white">Downtown District Analysis</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              {/* Map visual */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-4 dot-grid bg-[#0a1628]">
                {/* Grid overlay */}
                <div className="absolute inset-0 map-grid opacity-50" />

                {/* Location pins */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg shadow-blue-500/50 animate-marker-bounce" />
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping-slow opacity-40" />
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full border border-white/50" />
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <div className="w-3 h-3 bg-red-400 rounded-full border border-white/50" />
                </div>
                <div className="absolute top-1/4 right-1/3">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full border border-white/50" />
                </div>

                {/* Radar sweep */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border border-blue-500/20 rounded-full" />
                  <div className="absolute inset-0 w-32 h-32 border border-blue-500/10 rounded-full scale-150" />
                  <div
                    className="absolute inset-0 animate-radar"
                    style={{ transformOrigin: "center" }}
                  >
                    <div
                      className="w-16 h-px bg-gradient-to-r from-blue-500/60 to-transparent"
                      style={{ position: "absolute", top: "50%", left: "50%", transformOrigin: "left center" }}
                    />
                  </div>
                </div>

                {/* Corner label */}
                <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500/20 rounded-md text-xs text-blue-300 font-mono">LIVE</div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Score", val: "94", unit: "/100", color: "text-blue-400" },
                  { label: "Demand", val: "+127", unit: "%", color: "text-cyan-400" },
                  { label: "Gap", val: "3.2", unit: "km", color: "text-green-400" },
                ].map((m) => (
                  <div key={m.label} className="metric-card text-center p-3">
                    <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                    <p className={`text-lg font-bold ${m.color}`}>{m.val}<span className="text-xs text-slate-500">{m.unit}</span></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="absolute glass-card rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                style={{
                  top: card.top,
                  bottom: card.bottom,
                  right: card.right,
                  left: card.left,
                  animation: `float ${4 + i}s ease-in-out infinite ${i * 0.8}s`,
                  border: `1px solid ${card.color}33`,
                  minWidth: "130px",
                }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${card.color}22` }}>
                  <card.icon className="w-3.5 h-3.5" style={{ color: card.color }} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">{card.label}</p>
                  <p className="text-sm font-bold text-white">{card.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Background glow for dashboard */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-blue-500/8 rounded-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07111F] to-transparent pointer-events-none" />
    </section>
  );
}
