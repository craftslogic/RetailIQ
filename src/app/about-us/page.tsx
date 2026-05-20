"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Shield, Target, TrendingUp, Zap, MapPin, BarChart3, Eye, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] opacity-20 rounded-full pointer-events-none" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label mb-6 inline-flex"><Shield size={14} className="mr-2" /> About Spotlix</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Smarter Locations. <span className="text-gradient-primary">Stronger Businesses.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Spotlix is a modern location intelligence platform designed to help entrepreneurs and businesses make smarter decisions before launching or expanding physical businesses.
          </motion.p>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold mb-6 text-white">Why Spotlix Exists</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                We believe that many physical businesses fail not because the product is bad, but because the location, market positioning, demand analysis, and competitive strategy were never properly validated before launch.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Spotlix was created to solve that problem. Our platform combines market research, location intelligence, competitor analysis, local demand insights, feasibility analysis, and strategic business evaluation into one streamlined ecosystem built specifically for physical business growth.
              </p>
              <div className="flex items-center gap-3 text-blue-400 font-semibold">
                <Target size={20} /> Stop Guessing. Start Scaling.
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl p-8 border border-white/10 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                <h3 className="text-2xl font-bold mb-6 text-white">What We Do</h3>
                <ul className="space-y-4">
                  {[
                    "Analyze physical business locations",
                    "Evaluate market demand",
                    "Study competitor activity",
                    "Identify profitable business areas",
                    "Optimize launch strategy",
                    "Evaluate commercial opportunities",
                    "Reduce launch risks"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Zap size={10} className="text-blue-400" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-24 bg-[#0A1628] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Spotlix Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our structured intelligence framework for business validation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Business Discovery", desc: "Understanding the business idea, target audience, industry, budget, operational goals, and preferred launch region.", icon: Compass },
              { step: "02", title: "Market Intelligence", desc: "Analyzing local demand, customer behavior, nearby businesses, market saturation, and growth potential.", icon: BarChart3 },
              { step: "03", title: "Competitor Research", desc: "Studying existing competitors, pricing structures, positioning strategies, and commercial density in the market.", icon: Target },
              { step: "04", title: "Location Feasibility", desc: "Evaluating whether the selected business location has strong potential for long-term growth and sustainable demand.", icon: MapPin },
              { step: "05", title: "Strategic Recommendations", desc: "Providing structured recommendations on better locations, pricing opportunities, branding, and expansion planning.", icon: TrendingUp },
              { step: "06", title: "Launch Support", desc: "Helping businesses create launch-ready infrastructure including branding systems, digital presence, and growth planning.", icon: Zap },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <s.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-blue-500">Step {s.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Vision */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="mb-6 inline-flex w-12 h-12 rounded-full bg-emerald-500/10 items-center justify-center text-emerald-400">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Approach</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Spotlix operates as a modern business intelligence system rather than a traditional consulting agency.
              </p>
              <ul className="space-y-2 mb-6">
                {["Strategic analysis", "Data-driven insights", "Market intelligence", "Scalable business planning", "Smarter launch decisions", "Operational clarity"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 leading-relaxed font-medium">
                We aim to reduce risk for entrepreneurs by helping businesses launch in markets where real opportunity exists.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="mb-6 inline-flex w-12 h-12 rounded-full bg-purple-500/10 items-center justify-center text-purple-400">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We envision a future where physical businesses no longer rely purely on assumptions when selecting locations or entering markets.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Spotlix aims to become a modern intelligence platform that helps businesses launch smarter, expand strategically, and grow through informed market decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-[#0A1628] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Intelligence Before Expansion", desc: "Every successful business expansion should begin with market understanding and strategic analysis." },
              { title: "Build Where Demand Exists", desc: "Businesses perform better when launched in markets with real customer demand and commercial opportunity." },
              { title: "Reduce Risk Through Research", desc: "Strong research and data-driven planning reduce operational uncertainty and improve decision-making." },
              { title: "Scale Strategically", desc: "Long-term business success requires sustainable growth systems and intelligent expansion planning." },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#07111F] rounded-2xl p-8 border border-white/5 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}