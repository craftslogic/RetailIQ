"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { Target, Eye, Shield, Compass, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "2024", event: "Spotlix Founded", desc: "Started with a mission to eliminate guesswork from physical business decisions." },
  { year: "2024", event: "First Intelligence Reports", desc: "Delivered our first market intelligence reports to restaurants and retail brands." },
  { year: "2025", event: "Platform Expansion", desc: "Expanded service offerings to include full feasibility evaluation and expansion strategy." },
  { year: "2025", event: "500+ Businesses", desc: "Crossed 500+ businesses analyzed across 12+ industries and multiple markets." },
  { year: "2026", event: "Global Intelligence", desc: "Launched global market coverage with enterprise expansion intelligence programs." },
];

const values = [
  { icon: Target, title: "Data-First Decisions", desc: "Every recommendation is grounded in real market data, not assumptions or generic advice.", color: "#2563EB" },
  { icon: Eye, title: "Transparent Intelligence", desc: "Clear, actionable insights with full context — no black-box outputs or vague recommendations.", color: "#06B6D4" },
  { icon: Shield, title: "Strategic Integrity", desc: "Honest assessments even when results challenge initial expectations or business plans.", color: "#8B5CF6" },
  { icon: Compass, title: "Market Focus", desc: "Deep specialization in physical businesses — we understand brick-and-mortar strategy inside out.", color: "#10B981" },
  { icon: TrendingUp, title: "Growth Orientation", desc: "Every analysis is built around maximizing long-term business viability and scalability.", color: "#F59E0B" },
  { icon: Users, title: "Client Partnership", desc: "We work as strategic partners, not just vendors — your success is our benchmark.", color: "#EF4444" },
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We start by understanding your business concept, goals, industry, and target market in depth." },
  { num: "02", title: "Research Phase", desc: "Our analysts gather real market data, competitor intelligence, and location insights." },
  { num: "03", title: "Analysis Engine", desc: "We run your data through our proven intelligence frameworks to score viability and opportunity." },
  { num: "04", title: "Report Delivery", desc: "You receive a comprehensive, structured intelligence report with clear strategic direction." },
  { num: "05", title: "Strategy Session", desc: "We walk you through findings and recommendations in a dedicated strategy consultation." },
  { num: "06", title: "Ongoing Support", desc: "For growth clients, we provide continuous monitoring, expansion tracking, and advisory support." },
];

function SectionHeader({ label, title, sub, inView }: { label: string; title: React.ReactNode; sub?: string; inView: boolean }) {
  return (
    <div className="text-center mb-14">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex mb-4">
        <span className="section-label">{label}</span>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </motion.h2>
      {sub && (
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto">
          {sub}
        </motion.p>
      )}
    </div>
  );
}

export default function AboutPageClient() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const timelineRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-36 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #05101D, #07111F, #091522)" }}>
          <div className="absolute inset-0 map-grid opacity-40" />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex mb-6">
              <span className="section-label">About Spotlix</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligence Built for{" "}
              <span className="text-gradient-primary">Physical Businesses</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Spotlix was built to help entrepreneurs and physical businesses make smarter launch and expansion decisions through modern market intelligence, strategic analysis, and data-driven frameworks.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing" className="btn-primary gap-2">
                Explore Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-secondary">
                Book a Consultation
              </a>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07111F] to-transparent" />
        </section>

        {/* Story */}
        <section ref={storyRef} className="py-24" style={{ background: "#07111F" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
                <span className="section-label mb-6 inline-flex">Our Story</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 mt-4">
                  Why We Built <span className="text-gradient-primary">Spotlix</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">
                  We saw too many great entrepreneurs launch physical businesses in the wrong places — not because their ideas were bad, but because they lacked the right market intelligence before launch.
                </p>
                <p className="text-slate-400 leading-relaxed mb-5">
                  Location decisions are among the most consequential choices a physical business can make. Yet most businesses were making these decisions based on gut feeling, limited research, or costly consultants with generic frameworks.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Spotlix was created to change that. We combine real market data with proven strategic frameworks to give businesses the clarity and confidence they need to launch and expand in the right places.
                </p>
                <div className="space-y-3">
                  {["Market-validated location recommendations", "Systematic competitor intelligence", "Demand-driven launch strategies", "Scalable expansion frameworks"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8 glow-border-primary">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />
                  <div className="relative space-y-6">
                    <div className="pb-6 border-b border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Our Mission</p>
                      <p className="text-white font-medium leading-relaxed">
                        "Eliminate guesswork from physical business launch decisions through systematic market intelligence and strategic analysis."
                      </p>
                    </div>
                    <div className="pb-6 border-b border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Our Vision</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        To become the global intelligence standard for physical business strategy — the platform every entrepreneur turns to before launching or expanding.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Our Promise</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Honest, data-backed intelligence that helps you make decisions you can stand behind — even in uncertain markets.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-24" style={{ background: "#061020" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Core Principles"
              title={<>What We <span className="text-gradient-primary">Stand For</span></>}
              sub="The values that shape every analysis, recommendation, and client relationship at Spotlix."
              inView={valuesInView}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-card rounded-2xl p-6 glass-card-hover group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}>
                    <v.icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section ref={processRef} className="py-24" style={{ background: "#07111F" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Approach"
              title={<>The Spotlix <span className="text-gradient-primary">Intelligence Process</span></>}
              sub="A systematic, repeatable framework that delivers consistent, high-quality intelligence for every client."
              inView={processInView}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative glass-card rounded-2xl p-6 glass-card-hover group overflow-hidden">
                  <div className="absolute -top-3 -right-3 text-7xl font-black opacity-5 text-blue-400 select-none">{step.num}</div>
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-blue-400 tracking-wider mb-4 block">STEP {step.num}</span>
                    <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-24" style={{ background: "#061020" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Company Timeline"
              title={<>The Spotlix <span className="text-gradient-primary">Journey</span></>}
              inView={timelineInView}
            />
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={timelineInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 relative">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-xs font-bold text-blue-400">{item.year.slice(2)}</span>
                    </div>
                    <div className="glass-card rounded-xl p-4 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-blue-400 font-semibold">{item.year}</span>
                        <span className="text-sm font-bold text-white">{item.event}</span>
                      </div>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ background: "#07111F" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="glass-card rounded-2xl p-12 glow-border-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-cyan-500/5 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Smarter?</h2>
                <p className="text-slate-400 mb-8">
                  Get the intelligence you need to make confident location and expansion decisions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/pricing" className="btn-primary gap-2">
                    View Intelligence Plans <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-secondary">
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
