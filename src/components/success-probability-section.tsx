"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Map, Award, Zap, Activity } from "lucide-react";

const scores = [
  { label: "Location Viability", value: 85, color: "#10B981", icon: Map },
  { label: "Competition Level", value: 62, color: "#F59E0B", icon: Target },
  { label: "Demand Forecast", value: 91, color: "#2563EB", icon: Users },
  { label: "Profit Potential", value: 78, color: "#8B5CF6", icon: TrendingUp },
  { label: "Brand Opportunity", value: 88, color: "#EC4899", icon: Award },
  { label: "Growth Potential", value: 82, color: "#06B6D4", icon: Zap },
];

export default function SuccessProbabilitySection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

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
              <Activity size={14} />
              Intelligent Scoring UI
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Business <span className="text-gradient-primary">Success Probability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Our AI engine analyzes 50+ data points to calculate the exact probability of your business succeeding in a specific location.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Score Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 mb-8 flex items-center justify-center">
                {/* SVG Progress Ring */}
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="16"
                    fill="none"
                  />
                  <motion.circle
                    initial={{ strokeDashoffset: 691 }}
                    whileInView={{ strokeDashoffset: 691 - (691 * 78) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    cx="128"
                    cy="128"
                    r="110"
                    stroke="url(#gradient-score)"
                    strokeWidth="16"
                    fill="none"
                    strokeLinecap="round"
                    style={{ strokeDasharray: 691 }}
                  />
                  <defs>
                    <linearGradient id="gradient-score" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-6xl font-bold text-white tracking-tighter"
                  >
                    78
                  </motion.span>
                  <span className="text-slate-400 font-medium">/ 100</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Business Success Score</h3>
              <p className="text-slate-400 text-sm">Highly viable location with strong demand and moderate competition. Recommended for launch.</p>
            </div>
          </motion.div>

          {/* Breakdown Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scores.map((score, index) => {
              const Icon = score.icon;
              return (
                <motion.div
                  key={score.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${score.color}20`, color: score.color }}>
                        <Icon size={18} />
                      </div>
                      <span className="font-semibold text-slate-200">{score.label}</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: score.color }}>{score.value}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: score.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
