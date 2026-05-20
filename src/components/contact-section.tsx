"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4">
              <span className="section-label"><Mail size={11} />Get In Touch</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              Ready to <span className="text-gradient-primary">Launch Smarter?</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed mb-10" style={{ color: "#94A3B8", maxWidth: 440 }}>
              Book a free 30-minute strategy call with our retail intelligence team. We'll analyze your target location and business category on the spot.
            </motion.p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, label: "Email Us", value: "hello@retailiq.co", color: "#2563EB" },
                { icon: Phone, label: "Call Us", value: "+92 300 0000000", color: "#10B981" },
                { icon: MapPin, label: "Based In", value: "Karachi, Pakistan", color: "#06B6D4" },
              ].map(({ icon: Icon, label, value, color }, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
                    <Icon size={16} color={color} />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#64748B" }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What you get box */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl p-5" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#10B981" }}>What you get in the free call:</p>
              <div className="space-y-2">
                {["Location viability score for your target area", "Top 3 competitor threats identified", "Demand category recommendations", "Custom launch timeline estimate"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={14} color="#10B981" className="mt-0.5 flex-shrink-0" />
                    <p className="text-xs" style={{ color: "#94A3B8" }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    <CheckCircle size={32} color="#10B981" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#F8FAFC" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" action="https://formspree.io/f/your_formspree_id" method="POST">
                  <h3 className="text-lg font-bold mb-6" style={{ color: "#F8FAFC" }}>Book a Free Strategy Call</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Aliyan Khan", type: "text" },
                      { key: "email", label: "Email Address", placeholder: "you@company.com", type: "email" },
                      { key: "business", label: "Business Type", placeholder: "e.g. Café, Clothing Store", type: "text" },
                      { key: "area", label: "Preferred Area", placeholder: "e.g. Downtown, Suburbs", type: "text" },
                      { key: "budget", label: "Budget", placeholder: "e.g. $50k - $100k", type: "text" },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key} className={key === 'business' || key === 'area' || key === 'budget' ? 'col-span-1' : 'col-span-1 sm:col-span-2'}>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>{label}</label>
                        <input
                          type={type}
                          name={key}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          required={key === 'name' || key === 'email'}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            color: "#F8FAFC",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(37,99,235,0.6)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#94A3B8" }}>Business Goals</label>
                    <textarea
                      name="goals"
                      rows={3}
                      placeholder="What are you trying to achieve? Tell us about your timeline and expectations..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "#F8FAFC" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(37,99,235,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3 mt-2">
                    <Send size={16} />
                    Analyze My Business
                  </button>
                  <p className="text-xs text-center mt-3" style={{ color: "#475569" }}>We respond within 24 hours · No spam, ever.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
