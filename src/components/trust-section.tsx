"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Database, FileText, Target } from "lucide-react";

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

const METRICS = [
  { value: 12000, suffix: "+", label: "Locations Analyzed", icon: Globe, color: "#2563EB" },
  { value: 450, suffix: "k", label: "Competitor Datasets", icon: Database, color: "#06B6D4" },
  { value: 3200, suffix: "+", label: "Intelligence Reports", icon: FileText, color: "#10B981" },
  { value: 98, suffix: "%", label: "Feasibility Accuracy", icon: Target, color: "#F59E0B" },
];

export default function TrustSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.05)", background: "#07111F" }}>
      {/* Premium Analytics Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 dot-grid opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
          >
            Built for Modern Physical <span className="text-gradient-primary">Business Growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg" style={{ color: "#94A3B8" }}
          >
            Trusted intelligence systems powering strategic location decisions and confident physical business launches.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((metric, index) => {
            const Icon = metric.icon;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useCounter(metric.value, 2000, started);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)` }} />
                
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: `${metric.color}15`, border: `1px solid ${metric.color}30` }}>
                  <Icon size={20} color={metric.color} />
                </div>
                
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tight">{count}</span>
                  <span className="text-2xl font-bold" style={{ color: metric.color }}>{metric.suffix}</span>
                </div>
                
                <p className="text-sm font-medium text-slate-400">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
