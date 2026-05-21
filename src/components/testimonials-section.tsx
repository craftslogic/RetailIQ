"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Matcha House",
    industry: "Café Chain",
    avatar: "SC",
    color: "#F59E0B",
    rating: 5,
    quote:
      "Spotlix completely changed how we approach expansion. Their location analysis identified a neighborhood we hadn't even considered — it became our highest-revenue café within 3 months of opening.",
  },
  {
    name: "Marcus Williams",
    role: "CEO, UrbanWear Co.",
    industry: "Clothing Retail",
    avatar: "MW",
    color: "#2563EB",
    rating: 5,
    quote:
      "The competitor research Spotlix delivered was incredibly detailed. We understood the market gaps before launching and positioned our brand to fill them. Our first store broke even in 60 days.",
  },
  {
    name: "Priya Sharma",
    role: "Director, FreshBite Restaurants",
    industry: "Restaurant Group",
    avatar: "PS",
    color: "#10B981",
    rating: 5,
    quote:
      "We were about to sign a 5-year lease in the wrong location. Spotlix's feasibility report showed us the demand data that made us reconsider. Saved us from a potentially costly mistake.",
  },
  {
    name: "James Park",
    role: "Managing Partner, StepUp Footwear",
    industry: "Shoe Brand",
    avatar: "JP",
    color: "#8B5CF6",
    rating: 5,
    quote:
      "Their expansion strategy gave us a clear 18-month roadmap for entering 3 new markets. The market intelligence they provide is unlike anything we'd seen from traditional consultants.",
  },
  {
    name: "Layla Al-Hassan",
    role: "Founder, Glow Salon Studios",
    industry: "Salon & Spa",
    avatar: "LA",
    color: "#EC4899",
    rating: 5,
    quote:
      "From our first consultation to launch day, Spotlix supported every decision with real data. Their demand intelligence helped us understand exactly who our customers were and where they lived.",
  },
  {
    name: "David Chen",
    role: "Investment Director, Retail Ventures",
    industry: "Commercial Investment",
    avatar: "DC",
    color: "#06B6D4",
    rating: 5,
    quote:
      "We use Spotlix before every physical retail investment decision. Their area analysis and market reports have become non-negotiable parts of our due diligence process.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

const glassCard = "bg-white/[0.03] border border-white/[0.08] backdrop-blur-md";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden bg-[#061020]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
              Client Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Businesses That{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Launched Smarter
            </span>
          </motion.h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${glassCard} rounded-2xl p-6 hover:bg-white/[0.055] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
            >
              <Quote className="w-6 h-6 text-blue-500/50" />
              <StarRating count={t.rating} />
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `${t.color}30`, border: `1px solid ${t.color}40` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <span
                  className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className={`${glassCard} rounded-2xl p-6 flex flex-col gap-4`}
            >
              <Quote className="w-6 h-6 text-blue-500/50" />
              <StarRating count={testimonials[activeIdx].rating} />
              <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{testimonials[activeIdx].quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `${testimonials[activeIdx].color}30` }}
                >
                  {testimonials[activeIdx].avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonials[activeIdx].name}</p>
                  <p className="text-xs text-slate-500">{testimonials[activeIdx].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className={`p-2 rounded-full ${glassCard} hover:bg-white/10 transition-all`}>
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{ background: i === activeIdx ? "#2563EB" : "#334155" }}
                />
              ))}
            </div>
            <button onClick={next} className={`p-2 rounded-full ${glassCard} hover:bg-white/10 transition-all`}>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
