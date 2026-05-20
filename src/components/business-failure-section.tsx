"use client";

import { motion } from "framer-motion";
import { MapPin, Megaphone, TrendingDown, DollarSign, Users, Target } from "lucide-react";

const FAILURES = [
  {
    icon: MapPin,
    title: "Wrong Location",
    stat: "42%",
    statLabel: "of failures",
    color: "#EF4444",
    desc: "Opening in a low-traffic zone, poor accessibility, or a market already saturated — location mistakes account for nearly half of all retail failures.",
  },
  {
    icon: Megaphone,
    title: "Weak Branding",
    stat: "31%",
    statLabel: "of failures",
    color: "#F59E0B",
    desc: "No brand identity means no recall. Without differentiation from day one, businesses blend into the noise and lose customers to stronger brands.",
  },
  {
    icon: TrendingDown,
    title: "Low Demand",
    stat: "38%",
    statLabel: "of failures",
    color: "#8B5CF6",
    desc: "Launching products or services in areas where no real demand exists. Gut feel without data is a $50,000 gamble most small businesses can't afford.",
  },
  {
    icon: DollarSign,
    title: "Poor Pricing",
    stat: "27%",
    statLabel: "of failures",
    color: "#06B6D4",
    desc: "Pricing out of sync with the local market — either too premium or racing to the bottom — destroys margins before the business finds its footing.",
  },
  {
    icon: Users,
    title: "Saturated Competition",
    stat: "45%",
    statLabel: "of failures",
    color: "#10B981",
    desc: "Entering a market where 12 similar businesses already compete for the same audience. Competitor mapping reveals these traps before you commit.",
  },
  {
    icon: Target,
    title: "Poor Customer Targeting",
    stat: "33%",
    statLabel: "of failures",
    color: "#2563EB",
    desc: "Marketing to everyone means converting no one. Without demographic data, businesses miss their ideal customers entirely and burn through ad spend.",
  },
];

export default function BusinessFailureSection() {
  return (
    <section
      id="dashboard"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <span className="section-label" style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)", color: "#F87171" }}>
              <TrendingDown size={11} />
              Business Risk Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
          >
            Why Most Physical{" "}
            <span className="text-gradient-warm">Businesses Fail</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            80% of physical businesses close within their first 5 years. RetailIQ
            maps every risk factor before you invest a single rupee.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FAILURES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.35s ease",
              }}
              whileHover={{
                y: -4,
                borderColor: `${item.color}44`,
                background: `${item.color}08`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${item.color}0A` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={20} color={item.color} strokeWidth={1.8} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.stat}
                  </p>
                  <p className="text-xs" style={{ color: "#64748B" }}>
                    {item.statLabel}
                  </p>
                </div>
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ color: "#F1F5F9" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {item.desc}
              </p>

              {/* Bottom accent bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <span className="text-sm" style={{ color: "#94A3B8" }}>
              RetailIQ identifies all 6 risk factors before you sign a lease.
            </span>
            <a href="#features" className="btn-primary text-sm py-2 px-4">
              Run Risk Analysis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
