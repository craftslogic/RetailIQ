"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Search, TrendingUp, BarChart2, Compass, Rocket } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location Analysis",
    description: "Identify high-potential business locations using market intelligence and local demand insights.",
    color: "#2563EB",
    tags: ["Foot Traffic", "Demographics", "Zone Mapping"],
  },
  {
    icon: Search,
    title: "Competitor Research",
    description: "Analyze nearby competitors, market saturation, and customer behavior patterns comprehensively.",
    color: "#06B6D4",
    tags: ["Gap Analysis", "Pricing Study", "Market Share"],
  },
  {
    icon: TrendingUp,
    title: "Demand Intelligence",
    description: "Understand purchasing behavior, local demand patterns, and commercial opportunities in your target market.",
    color: "#8B5CF6",
    tags: ["Consumer Data", "Trend Analysis", "Opportunity Mapping"],
  },
  {
    icon: BarChart2,
    title: "Business Feasibility",
    description: "Evaluate whether a business idea can scale successfully within a specific market or location.",
    color: "#10B981",
    tags: ["ROI Projection", "Risk Assessment", "Scalability Score"],
  },
  {
    icon: Compass,
    title: "Expansion Strategy",
    description: "Plan smarter expansion and scaling strategies for physical businesses entering new markets.",
    color: "#F59E0B",
    tags: ["Multi-Location", "Growth Planning", "Market Entry"],
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description: "Get comprehensive launch frameworks including branding systems, positioning, and go-to-market strategies.",
    color: "#EF4444",
    tags: ["Brand Strategy", "GTM Planning", "Launch Framework"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              Platform Capabilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Launch Smarter
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From market discovery to launch, Spotlix delivers the intelligence infrastructure
            modern physical businesses need to grow with confidence.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="relative group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 overflow-hidden cursor-default hover:bg-white/[0.06] hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{feature.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{
                        background: `${feature.color}15`,
                        color: feature.color,
                        border: `1px solid ${feature.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
