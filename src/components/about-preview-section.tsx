"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Target, Eye, Shield } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: Target,
    title: "Data-First Decisions",
    desc: "Every recommendation is grounded in real market data, not assumptions.",
    color: "#2563EB",
  },
  {
    icon: Eye,
    title: "Transparent Intelligence",
    desc: "Clear, actionable insights with full context — no black-box outputs.",
    color: "#06B6D4",
  },
  {
    icon: Shield,
    title: "Strategic Integrity",
    desc: "Honest assessments even when results challenge initial expectations.",
    color: "#8B5CF6",
  },
];

export default function AboutPreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#07111F" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background decorative element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/6 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-6"
            >
              <span className="section-label">About Spotlix</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Built to Make Physical Businesses{" "}
              <span className="text-gradient-primary">Launch Smarter</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-6"
            >
              Spotlix was built to help businesses make smarter launch and expansion decisions
              through modern market intelligence and strategic analysis. We combine cutting-edge
              location data with real-world business strategy to give entrepreneurs and brands
              the clarity they need to succeed.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              Our mission is simple: eliminate the guesswork from physical business launch decisions
              through systematic market intelligence, strategic analysis, and data-driven frameworks
              that give you a real competitive advantage.
            </motion.p>

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {principles.map((p) => (
                <div key={p.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/3 transition-all">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}25` }}
                  >
                    <p.icon className="w-4 h-4" style={{ color: p.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{p.title}</p>
                    <p className="text-xs text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/about" className="btn-primary gap-2">
                Learn More About Spotlix
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden glow-border-accent">
              {/* Background pattern */}
              <div className="absolute inset-0 dot-grid opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />

              <div className="relative z-10">
                {/* Mission */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Our Mission</p>
                  <p className="text-white font-semibold text-base leading-relaxed">
                    "Eliminate guesswork from physical business launch decisions through systematic market intelligence."
                  </p>
                </div>

                {/* Vision */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Our Vision</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To become the global standard for location intelligence and physical business strategy — the platform every entrepreneur turns to before launching.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "2024", label: "Founded" },
                    { val: "12+", label: "Industries" },
                    { val: "Global", label: "Coverage" },
                    { val: "100%", label: "Data-Driven" },
                  ].map((s) => (
                    <div key={s.label} className="metric-card p-3 text-center">
                      <p className="text-lg font-bold text-white">{s.val}</p>
                      <p className="text-xs text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
