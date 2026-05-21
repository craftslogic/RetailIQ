"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is location intelligence?",
    a: "Location intelligence is the process of using geographic, demographic, and market data to make informed decisions about where to open, expand, or optimize a physical business. Spotlix combines real-world market data with strategic analysis to provide you with a comprehensive picture of any target location.",
  },
  {
    q: "What types of businesses does Spotlix help?",
    a: "Spotlix works with restaurants, cafés, retail brands, clothing stores, shoe brands, salons, franchises, startups, local businesses, and commercial investors. Essentially, any business with a physical presence or location-dependent strategy can benefit from our intelligence platform.",
  },
  {
    q: "How is Spotlix different from a real estate company?",
    a: "Spotlix is not a real estate company — we're a business intelligence platform. We don't sell or lease properties. Instead, we analyze whether a location, market, or business concept has the potential for success based on demand, competition, and strategic fit.",
  },
  {
    q: "What does a typical market analysis include?",
    a: "A typical Spotlix market analysis includes local demand data, competitor mapping, customer behavior patterns, foot traffic assessment, commercial zone evaluation, market saturation scores, and strategic recommendations — all delivered in a structured intelligence report.",
  },
  {
    q: "How do you conduct competitor research?",
    a: "We study competitor positioning, pricing strategies, customer flow, commercial density, and service gaps within your target area. This allows us to identify where market opportunities exist and how your business can differentiate effectively.",
  },
  {
    q: "What is a business feasibility evaluation?",
    a: "A feasibility evaluation assesses whether your business idea can realistically succeed in a specific market or location. We analyze demand sustainability, competitive environment, scalability potential, and long-term profitability to give you an honest, data-driven verdict.",
  },
  {
    q: "How long does it take to receive a report?",
    a: "Timelines vary by scope. Area Scans are typically delivered within 24–48 hours. Full Location Research reports take 3–7 business days. Retail Strategy and Launch packages range from 1–3 weeks depending on project complexity.",
  },
  {
    q: "Can Spotlix help with expansion into multiple locations?",
    a: "Absolutely. Our Retail Expansion and Business Optimization packages are specifically designed for multi-location strategies. We create comprehensive expansion roadmaps that prioritize markets by opportunity score and strategic fit.",
  },
  {
    q: "What is your refund policy?",
    a: "Due to the customized nature of our services, completed reports and analyses are generally non-refundable once delivered. Refund requests are reviewed for billing errors or unstarted services. Please review our full Refund Policy for details.",
  },
  {
    q: "How do I get started with Spotlix?",
    a: "Simply fill out our contact form or book a consultation call. We'll discuss your business, goals, and target market — then recommend the right intelligence package to move forward with. The Area Scan is always a great free starting point.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "glow-border-accent" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${open ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
          {faq.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${open ? "rotate-180 text-blue-400" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#07111F" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-4"
          >
            <span className="section-label">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Common <span className="text-gradient-primary">Questions</span> Answered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            Everything you need to know about Spotlix intelligence services, timelines, and pricing.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center glass-card rounded-2xl p-8"
        >
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-slate-400 text-sm mb-6">Our team is ready to help you make the right intelligence decision.</p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
