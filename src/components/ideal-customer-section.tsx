"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Coffee, Store, Scissors, Briefcase, TrendingUp } from "lucide-react";

const CUSTOMERS = [
  { name: "Retail Brands", icon: ShoppingBag, color: "#2563EB", desc: "Clothing, footwear, and consumer goods" },
  { name: "Food & Beverage", icon: Coffee, color: "#F59E0B", desc: "Cafes, restaurants, and quick-service" },
  { name: "Franchise Owners", icon: Store, color: "#10B981", desc: "Multi-location expansion planning" },
  { name: "Service Businesses", icon: Scissors, color: "#8B5CF6", desc: "Salons, spas, and wellness centers" },
  { name: "Startups & Entrepreneurs", icon: Briefcase, color: "#06B6D4", desc: "First-time founders and physical startups" },
  { name: "Commercial Investors", icon: TrendingUp, color: "#EF4444", desc: "Real estate and commercial development" },
];

export default function IdealCustomerSection() {
  return (
    <section className="relative py-24 overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.05)", background: "#07111F" }}>
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[120px] opacity-10 rounded-full pointer-events-none" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
          >
            Built For Modern <span className="text-gradient-primary">Physical Businesses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg" style={{ color: "#94A3B8" }}
          >
            Spotlix provides enterprise-grade location intelligence to entrepreneurs, brands, and investors across every physical category.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMERS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(135deg, ${item.color}15, transparent)` }} />
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon size={22} color={item.color} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">{item.name}</h3>
                </div>
                <p className="text-sm text-slate-400">{item.desc}</p>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${item.color}50` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
