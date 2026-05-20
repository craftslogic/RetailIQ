"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Map, Target, ChevronDown, Activity, Globe } from "lucide-react";
import { useState } from "react";

const mainPlans = [
  {
    name: "Location Research",
    price: "$199",
    priceSuffix: " – $499",
    desc: "Best for small retail & local businesses",
    features: [
      "Detailed location analysis",
      "Nearby competitor research",
      "Customer demographic analysis",
      "Foot traffic estimation",
      "Area demand validation",
      "Risk & opportunity report"
    ],
    highlight: false,
    button: "Get Location Intelligence",
    icon: Map,
    color: "#06B6D4"
  },
  {
    name: "Retail Strategy",
    price: "$799",
    priceSuffix: " – $2,000",
    desc: "Best for clothing brands, cafes, salons, stores",
    features: [
      "Complete business feasibility report",
      "Pricing strategy suggestions",
      "Product positioning analysis",
      "Competitor intelligence",
      "Branding recommendations",
      "Revenue estimation",
      "Success probability scoring"
    ],
    highlight: true,
    button: "Build My Retail Strategy",
    icon: Target,
    color: "#2563EB"
  },
  {
    name: "Launch & Branding",
    price: "$2,500",
    priceSuffix: " – $6,000",
    desc: "Best for physical business launches",
    features: [
      "Full branding system",
      "Store identity design",
      "Social media branding",
      "Website development",
      "Launch strategy",
      "Target market strategy",
      "Customer acquisition strategy",
      "Digital presence setup"
    ],
    highlight: false,
    button: "Start Launch Planning",
    icon: Activity,
    color: "#10B981"
  }
];

const secondaryPlans = [
  {
    name: "Area Scan",
    price: "Free",
    desc: "Best for first-time business owners",
    features: [
      "Basic location overview",
      "Simple competition check",
      "Basic demand insights",
      "Introductory recommendations",
      "Area potential summary"
    ]
  },
  {
    name: "Business Optimization",
    price: "$5,000+",
    desc: "Best for existing struggling businesses",
    features: [
      "Business restructuring",
      "Location optimization",
      "Rebranding",
      "Product repositioning",
      "Store improvement strategy",
      "Customer experience optimization",
      "Sales enhancement strategy",
      "Business optimization strategy"
    ]
  },
  {
    name: "Retail Expansion",
    price: "Custom",
    desc: "Best for multi-location & scaling businesses",
    features: [
      "Expansion intelligence",
      "Multi-location analysis",
      "Advanced competitor mapping",
      "Franchise planning",
      "Business growth systems",
      "Long-term optimization support",
      "Dedicated intelligence team"
    ]
  }
];

export default function PricingSection() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.05)", background: "#07111F" }}>
      {/* Background styling */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] opacity-20 rounded-full" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label" style={{ border: "1px solid rgba(37,99,235,0.3)", background: "rgba(37,99,235,0.1)" }}>
              <Globe size={14} className="text-blue-400" />
              <span className="text-blue-400 font-medium">Spotlix Ecosystem</span>
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Premium Retail <span className="text-gradient-primary">Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Enterprise-grade location analytics and business strategy systems. Invest in validation before you invest in leases.
          </motion.p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-16">
          {mainPlans.map((plan, index) => {
            const isHighlight = plan.highlight;
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  isHighlight 
                    ? 'bg-slate-900 border border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)] lg:scale-105 z-10 lg:py-12' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-900/20 lg:py-8'
                }`}
                style={{
                  background: isHighlight ? 'linear-gradient(180deg, rgba(7,17,31,1) 0%, rgba(15,30,55,1) 100%)' : 'rgba(255,255,255,0.03)',
                  boxShadow: isHighlight ? '0 0 0 1px rgba(37,99,235,0.5), 0 0 30px rgba(37,99,235,0.2)' : 'none',
                }}
              >
                {/* Animated Glowing Border for Highlighted Plan */}
                {isHighlight && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(45deg, transparent, rgba(37,99,235,0.3), transparent)', animation: 'spin 4s linear infinite', zIndex: -1, padding: 2 }} />
                )}
                
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: `rgba(255,255,255,0.05)`, border: `1px solid ${plan.color}40`, boxShadow: `0 0 20px ${plan.color}20` }}>
                    <Icon size={24} color={plan.color} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3 flex-wrap">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    <span className="text-slate-400 text-lg font-medium">{plan.priceSuffix}</span>
                  </div>
                  <p className="text-sm" style={{ color: plan.color }}>{plan.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} color={plan.color} className="shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    isHighlight 
                      ? 'text-white hover:scale-[1.02] active:scale-95' 
                      : 'bg-white/10 text-white hover:bg-white/20 active:scale-95'
                  }`}
                  style={{
                    background: isHighlight ? 'linear-gradient(135deg, #2563EB, #06B6D4)' : undefined,
                    boxShadow: isHighlight ? '0 10px 20px -10px rgba(37,99,235,0.5)' : undefined,
                  }}
                >
                  {plan.button}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Secondary Plans */}
        <div className="max-w-4xl mx-auto">
          <motion.button
            onClick={() => setShowSecondary(!showSecondary)}
            className="mx-auto flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.1)", color: "#94A3B8", background: "rgba(255,255,255,0.02)" }}
            whileHover={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            {showSecondary ? "Hide Additional Options" : "View Additional Services"}
            <motion.div animate={{ rotate: showSecondary ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showSecondary && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {secondaryPlans.map((plan, index) => (
                    <div key={index} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <h4 className="text-base font-bold text-white mb-1">{plan.name}</h4>
                      <p className="text-xl font-bold text-slate-300 mb-2">{plan.price}</p>
                      <p className="text-xs text-blue-400 mb-6">{plan.desc}</p>
                      <div className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-slate-600 mt-0.5">•</span>
                            <span className="text-xs text-slate-400 leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#contact" className="mt-6 block w-full py-2.5 rounded-lg text-center text-xs font-semibold" style={{ background: "rgba(255,255,255,0.05)", color: "#E2E8F0" }}>
                        Talk With Our Strategy Team
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
