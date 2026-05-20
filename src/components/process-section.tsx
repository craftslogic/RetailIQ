"use client";

import { motion } from "framer-motion";
import { MessageSquare, Map, Target, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Submit Your Business Idea",
    desc: "Tell us what you want to open and your target budget.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Analyze Market & Location",
    desc: "We run heatmaps and demographic analysis on potential locations.",
    icon: Map,
  },
  {
    num: "03",
    title: "Study Competitors",
    desc: "Identify threats and find gaps in the local market.",
    icon: Target,
  },
  {
    num: "04",
    title: "Optimize Your Strategy",
    desc: "We refine pricing, branding, and positioning for max impact.",
    icon: TrendingUp,
  },
  {
    num: "05",
    title: "Launch Smarter",
    desc: "Open your doors with confidence, backed by data.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-slate-950">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            How <span className="text-gradient-primary">RetailIQ</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            From raw concept to optimized launch. Our five-step intelligence process ensures you never guess about your business's future.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group z-10 flex flex-col items-center text-center"
                >
                  {/* Step Number Badge */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-blue-500/50 transition-colors duration-300 shadow-xl">
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-emerald-400">
                        {step.num}
                      </span>
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-slate-400 group-hover:text-blue-400 transition-colors">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
