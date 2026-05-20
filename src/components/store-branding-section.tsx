"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const brandingItems = [
  {
    title: "Logo Systems",
    desc: "Versatile, modern marks built for both digital and physical storefronts.",
    tag: "Identity"
  },
  {
    title: "Packaging Concepts",
    desc: "Premium unboxing experiences that drive social sharing and retention.",
    tag: "Physical"
  },
  {
    title: "Storefront Aesthetics",
    desc: "Architectural direction, signage, and exterior curb appeal strategies.",
    tag: "Experience"
  },
  {
    title: "Social Branding",
    desc: "Grid layouts and content pillars designed for modern commerce.",
    tag: "Digital"
  }
];

export default function StoreBrandingSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-[#020617]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">
                <Sparkles size={14} />
                Premium Retail Branding
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
            >
              Look Like a <span className="text-gradient-primary">Franchise</span> on Day One.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 mb-10"
            >
              A great location isn't enough if your brand looks cheap. We develop enterprise-grade visual identities, packaging, and storefront aesthetics that command premium pricing and foot traffic.
            </motion.p>

            <div className="space-y-6">
              {brandingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <Star size={16} className="text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2 py-1 rounded-full border border-indigo-500/20">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 btn-secondary flex items-center gap-2"
            >
              View Branding Portfolio <ArrowRight size={16} />
            </motion.button>
          </div>

          {/* Image/Mockup Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-slate-900 rounded-3xl overflow-hidden relative border border-white/10 group">
                {/* Fallback pattern for mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 flex items-center justify-center">
                  <div className="text-indigo-400/30 font-bold text-2xl tracking-widest uppercase">Packaging</div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="h-80 bg-slate-900 rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-indigo-900/40 flex items-center justify-center">
                   <div className="text-indigo-400/30 font-bold text-2xl tracking-widest uppercase text-center">Storefront<br/>Facade</div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-80 bg-slate-900 rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/60 to-slate-900 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-indigo-500/50 flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-3xl">Logo</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="h-64 bg-slate-900 rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tl from-slate-800 to-indigo-900/40 flex items-center justify-center">
                   <div className="text-indigo-400/30 font-bold text-2xl tracking-widest uppercase text-center">Social<br/>Assets</div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
