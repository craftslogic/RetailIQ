"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const STATS = [
  { value: 500, suffix: "+", label: "Locations Analyzed", color: "#2563EB" },
  { value: 78, suffix: "%", label: "Smarter Launch Decisions", color: "#10B981" },
  { value: 94, suffix: "%", label: "Forecast Accuracy", color: "#06B6D4" },
  { value: 3, suffix: "min", label: "Average Report Generation", color: "#F59E0B" },
];

const TESTIMONIALS = [
  {
    quote: "RetailIQ told us our target location in Gulshan was oversaturated before we signed the lease. We moved 2km away and opened to a packed house.",
    name: "Zara M.",
    role: "Founder, Brew & Co.",
    rating: 5,
    color: "#2563EB",
  },
  {
    quote: "The demand forecasting was eerily accurate. We planned inventory based on RetailIQ's projections and hit 94% sell-through in month one.",
    name: "Ahmed K.",
    role: "Owner, Metro Sneakers",
    rating: 5,
    color: "#10B981",
  },
  {
    quote: "The competitor mapping alone saved us from entering a market with 11 similar businesses. That feature is worth ten times the subscription cost.",
    name: "Farah S.",
    role: "Director, Silk & Stone",
    rating: 5,
    color: "#8B5CF6",
  },
];

export default function SocialProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const c0 = useCounter(STATS[0].value, 2000, started);
  const c1 = useCounter(STATS[1].value, 1800, started);
  const c2 = useCounter(STATS[2].value, 2200, started);
  const c3 = useCounter(STATS[3].value, 1000, started);
  const counts = [c0, c1, c2, c3];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="metric-card text-center relative overflow-hidden">
              <motion.div className="absolute inset-0 opacity-0" style={{ background: `radial-gradient(circle at center, ${s.color}0A 0%, transparent 70%)` }}
                whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
              <p className="text-4xl font-bold mb-1" style={{ color: s.color }}>
                {counts[i]}{s.suffix}
              </p>
              <p className="text-sm" style={{ color: "#94A3B8" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
            Trusted by Retail <span className="text-gradient-primary">Entrepreneurs</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base" style={{ color: "#94A3B8" }}>
            Real outcomes from businesses that launched with data-driven intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${t.color}22`, transition: "all 0.3s ease" }}
              whileHover={{ y: -4, borderColor: `${t.color}44`, background: `${t.color}06` }}>
              <Quote size={24} color={t.color} style={{ opacity: 0.7 }} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#CBD5E1" }}>"{t.quote}"</p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#F1F5F9" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
