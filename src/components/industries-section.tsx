"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Utensils, Coffee, ShoppingBag, Footprints, Shirt, Scissors, Store, Lightbulb, Building2, TrendingUp } from "lucide-react";

const industries = [
  { label: "Restaurants", icon: Utensils, color: "#EF4444" },
  { label: "Cafés", icon: Coffee, color: "#F59E0B" },
  { label: "Retail Brands", icon: ShoppingBag, color: "#2563EB" },
  { label: "Shoe Brands", icon: Footprints, color: "#06B6D4" },
  { label: "Clothing Stores", icon: Shirt, color: "#8B5CF6" },
  { label: "Salons & Spas", icon: Scissors, color: "#EC4899" },
  { label: "Franchises", icon: Store, color: "#10B981" },
  { label: "Startups", icon: Lightbulb, color: "#F97316" },
  { label: "Local Businesses", icon: Building2, color: "#64748B" },
  { label: "Commercial Investors", icon: TrendingUp, color: "#22D3EE" },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" ref={ref} className="relative py-24 overflow-hidden bg-[#061020]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              Industries We Serve
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Every Physical Business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto"
          >
            Whether you&apos;re launching a café or scaling a franchise, Spotlix provides
            the strategic intelligence to make your expansion a success.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 text-center group hover:bg-white/[0.055] hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `${industry.color}18`,
                  border: `1px solid ${industry.color}30`,
                }}
              >
                <industry.icon className="w-5 h-5" style={{ color: industry.color }} />
              </div>
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors leading-tight text-center">
                {industry.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
