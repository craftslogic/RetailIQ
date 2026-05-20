"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { sendEmail } from "@/lib/emailjs";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    area: "",
    budget: "",
    goals: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await sendEmail({
        to_name: "Spotlix Team",
        from_name: form.name,
        from_email: form.email,
        business_type: form.business,
        preferred_area: form.area,
        budget: form.budget,
        business_goals: form.goals,
      });
      setStatus("success");
      setForm({ name: "", email: "", business: "", area: "", budget: "", goals: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email us directly.");
    }
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
                { icon: Mail, label: "Email Us", value: "hello@spotlix.io", color: "#2563EB" },
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
            <div className="relative rounded-3xl p-8 overflow-hidden" style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(56, 189, 248, 0.2)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                      <CheckCircle size={40} color="#10B981" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Intelligence Request Sent</h3>
                    <p className="text-slate-400 mb-8 max-w-[280px]">Our retail intelligence team will review your details and reach out shortly.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5 relative z-10"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Initialize Analysis</h3>
                      <p className="text-sm text-slate-400">Fill in the parameters below to begin.</p>
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-4">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { key: "name", label: "Full Name", placeholder: "Aliyan Khan", type: "text" },
                        { key: "email", label: "Email Address", placeholder: "you@company.com", type: "email" },
                        { key: "business", label: "Business Type", placeholder: "e.g. Café, Clothing Store", type: "text" },
                        { key: "area", label: "Preferred City/Area", placeholder: "e.g. Gulshan, Karachi", type: "text" },
                        { key: "budget", label: "Budget", placeholder: "e.g. $50k - $100k", type: "text" },
                      ].map(({ key, label, placeholder, type }) => (
                        <div key={key} className={key === 'business' || key === 'area' || key === 'budget' ? 'col-span-1' : 'col-span-1 sm:col-span-2'}>
                          <label className="block text-xs font-semibold mb-2 text-slate-400 tracking-wide uppercase">{label}</label>
                          <input
                            type={type}
                            name={key}
                            placeholder={placeholder}
                            value={form[key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            required={key === 'name' || key === 'email'}
                            disabled={status === "loading"}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 disabled:opacity-50"
                            style={{
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#F8FAFC",
                            }}
                            onFocus={(e) => { e.target.style.borderColor = "rgba(56, 189, 248, 0.5)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2 text-slate-400 tracking-wide uppercase">Business Goals</label>
                      <textarea
                        name="goals"
                        rows={3}
                        placeholder="What are you trying to achieve? Tell us about your timeline and expectations..."
                        value={form.goals}
                        onChange={(e) => setForm({ ...form, goals: e.target.value })}
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300 disabled:opacity-50"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", color: "#F8FAFC" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(56, 189, 248, 0.5)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="w-full py-4 mt-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                        boxShadow: "0 10px 20px -10px rgba(37,99,235,0.5)",
                      }}
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Analyze My Business
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center mt-4 text-slate-500">Secure AES-256 transmission. Your data is protected.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
