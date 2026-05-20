"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, ArrowUpRight } from "lucide-react";

const stories = [
  {
    type: "Boutique Café",
    name: "Lumina Coffee",
    location: "Downtown Arts District",
    metrics: [
      { label: "Revenue Growth", value: "+140%", icon: TrendingUp, color: "#10B981" },
      { label: "Foot Traffic", value: "+85%", icon: Users, color: "#3B82F6" },
    ],
    desc: "RetailIQ identified an under-served tech demographic just two blocks from their original location choice. Lumina launched exactly where demand was peaking.",
  },
  {
    type: "Fitness Studio",
    name: "Pulse High Intensity",
    location: "Westside Suburbs",
    metrics: [
      { label: "Member Signups", value: "320+", icon: Users, color: "#8B5CF6" },
      { label: "Launch Target", value: "Exceeded by 45%", icon: Star, color: "#F59E0B" },
    ],
    desc: "By analyzing competitor pricing and local health spending data, Pulse found a pricing sweet spot that drove record pre-launch memberships.",
  },
  {
    type: "Apparel Brand",
    name: "Thread & Co.",
    location: "Midtown Commercial",
    metrics: [
      { label: "Better Traffic", value: "+210%", icon: ArrowUpRight, color: "#EC4899" },
      { label: "Profit Margin", value: "32%", icon: TrendingUp, color: "#06B6D4" },
    ],
    desc: "Moved away from an oversaturated mall location to a high-visibility corner spot identified by our pedestrian flow analysis.",
  }
];

export default function SuccessStoriesSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-slate-950">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

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
              <Star size={14} />
              Real World Results
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Don't Just Take Our <span className="text-gradient-primary">Word For It</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Entrepreneurs across industries use our intelligence to launch highly profitable physical locations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">{story.type}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                <p className="text-sm text-slate-400 mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {story.location}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {story.metrics.map((metric, i) => {
                    const Icon = metric.icon;
                    return (
                      <div key={i} className="bg-slate-900/50 rounded-2xl p-4 border border-white/5">
                        <div className="mb-2">
                          <Icon size={18} color={metric.color} />
                        </div>
                        <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-6">
                  "{story.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
