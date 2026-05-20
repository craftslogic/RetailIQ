"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Map, BarChart2, Activity, Users, Zap, Shield, Search } from "lucide-react";

export default function DashboardPreviewSection() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5 bg-[#020617]">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">
              <LayoutDashboard size={14} />
              Enterprise-Grade Dashboard
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 tracking-tight"
          >
            Your Retail <span className="text-gradient-primary">Command Center</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Access live maps, competitor heatmaps, demand forecasts, and revenue projections in one intelligent, data-driven platform.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl shadow-blue-900/20 backdrop-blur-sm ring-1 ring-white/10"
        >
          {/* Top Bar */}
          <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-2" />
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <LayoutDashboard size={16} />
                <span>Spotlix Intelligence</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="Search locations..." className="bg-slate-800 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs text-slate-300 w-64 outline-none focus:border-blue-500/50" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/10 p-4 space-y-1 bg-slate-900/50 hidden md:block">
              {[
                { label: "Overview", icon: LayoutDashboard, active: true },
                { label: "Live Maps", icon: Map },
                { label: "Competitor Analysis", icon: Activity },
                { label: "Revenue Projections", icon: BarChart2 },
                { label: "Customer Insights", icon: Users },
                { label: "Opportunity Zones", icon: Zap },
                { label: "Business Scoring", icon: Shield },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-colors ${item.active ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
                  <item.icon size={18} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-hidden relative">
              <div className="grid grid-cols-3 gap-6 h-full">
                
                {/* Map View */}
                <div className="col-span-3 lg:col-span-2 rounded-xl border border-white/10 bg-slate-800/50 overflow-hidden relative group">
                  {/* Fake Map Background */}
                  <div className="absolute inset-0 bg-[#0f172a] opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Heatmap blur */}
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-red-500/30 blur-3xl rounded-full" />
                  <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
                  
                  {/* UI Overlay on Map */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 pointer-events-none">
                     <div className="flex justify-between">
                       <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 pointer-events-auto">
                         <span className="text-xs font-semibold text-slate-300">Downtown District</span>
                       </div>
                       <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center pointer-events-auto">
                           <span className="text-white text-xs">+</span>
                         </div>
                         <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center pointer-events-auto">
                           <span className="text-white text-xs">-</span>
                         </div>
                       </div>
                     </div>
                     
                     {/* Floating Pin */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg mb-2 relative flex flex-col items-center">
                         <span className="text-slate-900 font-bold text-xs">Target Location</span>
                         <span className="text-blue-600 font-semibold text-[10px]">Score: 92/100</span>
                         <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                       </div>
                       <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10">
                         <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                       </div>
                     </div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-3 lg:col-span-1 space-y-4 flex flex-col">
                  {/* Score Card */}
                  <div className="bg-slate-800/40 border border-white/5 rounded-xl p-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-3">LOCATION SCORE</h4>
                    <div className="flex items-end gap-3">
                      <span className="text-4xl font-bold text-white">92</span>
                      <span className="text-sm font-medium text-emerald-400 mb-1">Excellent</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full mt-3 overflow-hidden">
                      <div className="w-[92%] h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-slate-800/40 border border-white/5 rounded-xl p-4 flex-1">
                    <h4 className="text-xs font-semibold text-slate-400 mb-4">KEY METRICS</h4>
                    <div className="space-y-4">
                      {[
                        { label: "Foot Traffic", value: "High (4.2k/day)", color: "text-emerald-400" },
                        { label: "Competition", value: "Low (2 nearby)", color: "text-blue-400" },
                        { label: "Est. Revenue", value: "$15k - $22k/mo", color: "text-purple-400" },
                        { label: "Demographic Match", value: "88% Fit", color: "text-amber-400" },
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                          <span className="text-sm text-slate-300">{m.label}</span>
                          <span className={`text-sm font-semibold ${m.color}`}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                       <h4 className="text-xs font-semibold text-slate-400 mb-2">DEMAND TREND</h4>
                       <div className="h-20 w-full flex items-end gap-1">
                         {[40, 55, 45, 60, 75, 65, 85, 80, 95].map((h, i) => (
                           <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors" style={{ height: `${h}%` }}>
                             <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20">
                               {h}%
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
