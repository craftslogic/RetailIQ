"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    desc: "Perfect for initial exploration.",
    features: [
      "Basic location analysis",
      "Top 3 competitor overview",
      "General industry trends",
      "Email support"
    ],
    highlight: false,
    button: "Start Free",
  },
  {
    name: "PRO",
    price: "$149",
    desc: "For serious entrepreneurs launching soon.",
    features: [
      "Advanced location intelligence",
      "Deep competitor analysis (10+)",
      "Revenue & demand forecasting",
      "Detailed launch strategy reports",
      "Priority strategy call"
    ],
    highlight: true,
    button: "Get Pro Intelligence",
  },
  {
    name: "PREMIUM",
    price: "$2,499",
    desc: "End-to-end launch & execution support.",
    features: [
      "Everything in PRO",
      "Full branding & visual identity",
      "Custom website & digital setup",
      "Storefront aesthetic direction",
      "1-on-1 optimization support"
    ],
    highlight: false,
    button: "Book Consultation",
  }
];

export default function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">
              <Zap size={14} />
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Invest Before You <span className="text-gradient-primary">Invest</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            A fraction of the cost of a bad lease. Choose the intelligence package that fits your launch stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight 
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-105 z-10' 
                  : 'bg-white/5 border border-white/10 mt-4 mb-4'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-300 mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-slate-500 text-sm mb-1">{plan.name === 'PRO' ? '/report' : ''}</span>}
                </div>
                <p className="text-sm text-slate-400">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={plan.highlight ? "text-blue-500" : "text-slate-500"} />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/50' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
