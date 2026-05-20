"use client";

import { motion } from "framer-motion";
import { Lightbulb, MapPin, Palette, DollarSign, Smile, Smartphone, ArrowRight } from "lucide-react";

const recommendations = [
  {
    icon: MapPin,
    title: "Move to Higher Traffic Area",
    desc: "Your current location selection has 40% less foot traffic than optimal. Consider moving 2 blocks north to intercept commuter flow.",
    color: "#F59E0B",
    impact: "High Impact"
  },
  {
    icon: Palette,
    title: "Improve Store Branding",
    desc: "Competitors in this zone have premium aesthetics. Upgrading your exterior signage and interior lighting will increase perceived value.",
    color: "#8B5CF6",
    impact: "Medium Impact"
  },
  {
    icon: DollarSign,
    title: "Optimize Pricing Strategy",
    desc: "Local demographic can support a 15% price premium on your core products compared to your initial estimates.",
    color: "#10B981",
    impact: "High Impact"
  },
  {
    icon: Smile,
    title: "Enhance Customer Experience",
    desc: "Add a dedicated waiting area. Dwell time increases upsell opportunities by an estimated 22%.",
    color: "#EC4899",
    impact: "Medium Impact"
  },
  {
    icon: Smartphone,
    title: "Strengthen Digital Presence",
    desc: "Missing localized SEO strategy. Claiming your Google Business Profile and local keywords will drive 30% more walk-ins.",
    color: "#3B82F6",
    impact: "High Impact"
  }
];

export default function StoreOptimizationSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-slate-950">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-purple-500/5 blur-[120px] pointer-events-none" />

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
              <Lightbulb size={14} />
              AI Optimization
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Smart Business <span className="text-gradient-primary">Recommendations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Don't just open a store. Optimize it before day one. Our engine provides actionable insights to fix critical flaws in your business plan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-3xl p-8 border ${index === 0 ? 'border-purple-500/30 bg-purple-500/5' : 'border-white/10 bg-white/5'} hover:bg-white/10 transition-all duration-300`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 p-4">
                    <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30">
                      Priority Fix
                    </span>
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${rec.color}15`, border: `1px solid ${rec.color}30` }}>
                  <Icon size={24} color={rec.color} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{rec.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{rec.desc}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{rec.impact}</span>
                  <button className="text-sm font-medium hover:text-white transition-colors flex items-center gap-1" style={{ color: rec.color }}>
                    Apply Fix <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Placeholder for remaining space if not exactly divisible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl p-8 border border-dashed border-white/20 bg-transparent flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Lightbulb size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Want more insights?</h3>
            <p className="text-slate-400 text-sm mb-6">Our full analysis generates 20+ tailored recommendations.</p>
            <button className="btn-primary py-2 px-6">
              Run Full Analysis
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
