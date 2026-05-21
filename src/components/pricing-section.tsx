"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Area Scan",
    price: "Free",
    priceSub: "No credit card required",
    description: "Get a quick surface-level overview of a target location or market area.",
    badge: null,
    recommended: false,
    color: "#64748B",
    features: [
      "Basic location overview",
      "Public market data snapshot",
      "Competitor count estimate",
      "General area demographics",
      "Summary PDF report",
    ],
    cta: "Start Free Scan",
  },
  {
    name: "Location Research",
    price: "$199",
    priceSub: "Up to $499 based on scope",
    description: "Deep-dive location analysis with real market data and competitor insights.",
    badge: "Popular",
    recommended: true,
    color: "#2563EB",
    features: [
      "Full location intelligence report",
      "Foot traffic & demand analysis",
      "Competitor mapping (5km radius)",
      "Market saturation score",
      "Commercial zone evaluation",
      "Actionable insights summary",
    ],
    cta: "Get Location Research",
  },
  {
    name: "Retail Strategy",
    price: "$799",
    priceSub: "Up to $2,000 based on scope",
    description: "Comprehensive retail feasibility study with strategic positioning framework.",
    badge: "Recommended",
    recommended: true,
    color: "#06B6D4",
    features: [
      "Everything in Location Research",
      "Full feasibility evaluation",
      "Competitor gap analysis",
      "Target customer profiling",
      "Retail strategy playbook",
      "Market entry recommendations",
      "Revenue projection model",
    ],
    cta: "Build My Strategy",
  },
  {
    name: "Launch & Branding",
    price: "$2,500",
    priceSub: "Up to $6,000 based on scope",
    description: "End-to-end launch intelligence including brand positioning and go-to-market strategy.",
    badge: "Best Value",
    recommended: true,
    color: "#8B5CF6",
    features: [
      "Everything in Retail Strategy",
      "Brand positioning framework",
      "Visual identity direction",
      "Launch strategy roadmap",
      "Digital presence planning",
      "6-month growth blueprint",
      "1-on-1 strategy consultation",
    ],
    cta: "Plan My Launch",
  },
  {
    name: "Business Optimization",
    price: "$5,000",
    priceSub: "Up to $15,000+ based on scope",
    description: "Full-scale business intelligence system for scaling businesses and multi-location brands.",
    badge: null,
    recommended: false,
    color: "#10B981",
    features: [
      "Everything in Launch & Branding",
      "Multi-location analysis",
      "Performance optimization audit",
      "Advanced market intelligence",
      "Quarterly strategy reviews",
      "Priority support access",
      "Dedicated analyst team",
    ],
    cta: "Scale My Business",
  },
  {
    name: "Retail Expansion",
    price: "Custom",
    priceSub: "Enterprise pricing available",
    description: "Custom enterprise intelligence programs for franchises, investors, and expansion networks.",
    badge: "Enterprise",
    recommended: false,
    color: "#F59E0B",
    features: [
      "Custom research programs",
      "Portfolio location analysis",
      "Franchise expansion maps",
      "Investor intelligence reports",
      "Custom API integrations",
      "Dedicated success manager",
      "SLA-backed delivery",
    ],
    cta: "Contact Us",
  },
];

function PricingCard({ plan, index, inView }: { plan: typeof plans[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 flex flex-col group hover:bg-white/[0.055] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={plan.recommended ? { border: `1px solid ${plan.color}40`, boxShadow: `0 0 0 1px ${plan.color}28, 0 0 30px ${plan.color}10` } : {}}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
          style={{ background: `${plan.color}25`, color: plan.color, border: `1px solid ${plan.color}40` }}
        >
          {plan.recommended && <Star className="w-2.5 h-2.5" />}
          {plan.badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Plan name */}
        <div className="mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}25` }}
          >
            <Zap className="w-4 h-4" style={{ color: plan.color }} />
          </div>
          <h3 className="text-base font-bold text-white">{plan.name}</h3>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-white">{plan.price}</span>
            {plan.price !== "Free" && plan.price !== "Custom" && (
              <span className="text-sm text-slate-500">starting</span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">{plan.priceSub}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{plan.description}</p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${plan.color}20` }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300"
          style={
            plan.recommended
              ? {
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                  color: "white",
                  boxShadow: `0 4px 20px ${plan.color}30`,
                }
              : {
                  background: "rgba(255,255,255,0.05)",
                  color: "#F8FAFC",
                  border: "1px solid rgba(255,255,255,0.1)",
                }
          }
        >
          {plan.cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="relative py-24 overflow-hidden bg-[#07111F]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Intelligence That Fits{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Your Budget
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            From a free area scan to full enterprise expansion programs — choose the intelligence
            level that matches your growth stage.
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12 text-sm text-slate-500"
        >
          All plans are fully customizable.{" "}
          <span className="text-blue-400">Contact us</span> for enterprise agreements and custom scopes.
        </motion.div>
      </div>
    </section>
  );
}
