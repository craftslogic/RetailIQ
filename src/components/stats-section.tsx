"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Businesses Analyzed", sub: "Across 12+ industries" },
  { value: 1200, suffix: "+", label: "Market Reports", sub: "Delivered to date" },
  { value: 98, suffix: "%", label: "Client Satisfaction", sub: "Based on project reviews" },
  { value: 350, suffix: "+", label: "Expansion Strategies", sub: "Successfully launched" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden" style={{ background: "#061020" }}>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Trusted by Businesses Worldwide</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Intelligence That Drives <span className="text-gradient-primary">Real Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative glass-card rounded-2xl p-6 text-center group glass-card-hover overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 text-gradient-primary">
                  {inView ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : "0"}
                </div>
                <p className="text-sm font-semibold text-white/80 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
            </div>
          ))}
        </div>

        {/* Trusted by logos row (placeholder brands) */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Trusted by growing businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-30">
            {["RetailBrand", "CaféChain", "StyleStore", "FranchiseCo", "LaunchPad", "LocalMart"].map((b) => (
              <span key={b} className="text-sm font-semibold text-slate-400 tracking-wider">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
