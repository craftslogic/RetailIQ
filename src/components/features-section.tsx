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
    gradient: "from-blue-500/20 to-blue-600/5",
    tags: ["Foot Traffic", "Demographics", "Zone Mapping"],
  },
  {
    icon: Search,
    title: "Competitor Research",
    description: "Analyze nearby competitors, market saturation, and customer behavior patterns comprehensively.",
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    tags: ["Gap Analysis", "Pricing Study", "Market Share"],
  },
  {
    icon: TrendingUp,
    title: "Demand Intelligence",
    description: "Understand purchasing behavior, local demand patterns, and commercial opportunities in your target market.",
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-violet-600/5",
    tags: ["Consumer Data", "Trend Analysis", "Opportunity Mapping"],
  },
  {
    icon: BarChart2,
    title: "Business Feasibility",
    description: "Evaluate whether a business idea can scale successfully within a specific market or location.",
    color: "#10B981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    tags: ["ROI Projection", "Risk Assessment", "Scalability Score"],
  },
  {
    icon: Compass,
    title: "Expansion Strategy",
    description: "Plan smarter expansion and scaling strategies for physical businesses entering new markets.",
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-amber-600/5",
    tags: ["Multi-Location", "Growth Planning", "Market Entry"],
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description: "Get comprehensive launch frameworks including branding systems, positioning, and go-to-market strategies.",
    color: "#EF4444",
    gradient: "from-red-500/20 to-red-600/5",
    tags: ["Brand Strategy", "GTM Planning", "Launch Framework"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#07111F" }}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="section-label">Platform Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to{" "}
            <span className="text-gradient-primary">Launch Smarter</span>
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
              className="relative group glass-card rounded-2xl p-6 glass-card-hover overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${feature.color}12, transparent 70%)` }}
              />

              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}66, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {feature.description}
                </p>

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
