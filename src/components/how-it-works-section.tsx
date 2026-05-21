"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Search, Users, MapPin, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Building2,
    title: "Business Discovery",
    description: "Understand the business idea, target audience, industry, goals, and launch region to build a complete intelligence brief.",
    color: "#2563EB",
  },
  {
    num: "02",
    icon: Search,
    title: "Market Intelligence Analysis",
    description: "Analyze local demand, customer behavior, nearby businesses, market saturation, and growth potential in your target area.",
    color: "#06B6D4",
  },
  {
    num: "03",
    icon: Users,
    title: "Competitor Research",
    description: "Study competitor positioning, pricing strategies, customer flow patterns, and commercial density across the region.",
    color: "#8B5CF6",
  },
  {
    num: "04",
    icon: MapPin,
    title: "Location Feasibility",
    description: "Evaluate long-term profitability, scalability, and customer demand potential across candidate locations.",
    color: "#10B981",
  },
  {
    num: "05",
    icon: Lightbulb,
    title: "Strategic Recommendations",
    description: "Receive actionable recommendations for positioning, branding, targeting, and smart expansion strategy.",
    color: "#F59E0B",
  },
  {
    num: "06",
    icon: Rocket,
    title: "Business Launch Support",
    description: "Support with branding systems, launch strategies, digital presence, and long-term growth planning.",
    color: "#EF4444",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#061020" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="section-label">The Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            How <span className="text-gradient-primary">Spotlix Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A systematic 6-step intelligence framework that takes you from idea to profitable launch.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass-card rounded-2xl p-6 group glass-card-hover overflow-hidden"
            >
              {/* Step number background */}
              <div
                className="absolute -top-3 -right-3 text-7xl font-black opacity-5 select-none"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              <div className="relative z-10">
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ color: step.color }}
                  >
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}66, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Start Your Analysis Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
