"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

type FormState = "idle" | "loading" | "success" | "error";

const businessTypes = [
  "Restaurant / Food & Beverage",
  "Café / Coffee Shop",
  "Retail / Fashion Brand",
  "Shoe Brand / Footwear",
  "Clothing Store",
  "Salon / Spa / Beauty",
  "Franchise Business",
  "Startup / New Concept",
  "Local Business",
  "Commercial Investment",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000 – $500,000",
  "$500,000+",
  "Prefer not to say",
];

const glassCard = "bg-white/[0.03] border border-white/[0.08] backdrop-blur-md";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    business_type: "",
    preferred_area: "",
    budget: "",
    business_goals: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim() || !/\S+@\S+\.\S+/.test(formData.from_email))
      newErrors.from_email = "Valid email is required";
    if (!formData.business_type) newErrors.business_type = "Please select a business type";
    if (!formData.preferred_area.trim()) newErrors.preferred_area = "Target location is required";
    if (!formData.business_goals.trim()) newErrors.business_goals = "Please describe your goals";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "Spotlix Team",
          from_name: formData.from_name,
          from_email: formData.from_email,
          business_type: formData.business_type,
          preferred_area: formData.preferred_area,
          budget: formData.budget || "Not specified",
          business_goals: formData.business_goals,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", business_type: "", preferred_area: "", budget: "", business_goals: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof typeof formData) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 transition-all duration-200 outline-none focus:ring-2 ${
      errors[field]
        ? "ring-1 ring-red-500/50 bg-red-500/5 border border-red-500/20"
        : "bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/40 focus:ring-blue-500/20 focus:bg-white/[0.06]"
    }`;

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden bg-[#061020]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/[0.06] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/[0.05] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
                Get Started
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
            >
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Intelligence Analysis
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 leading-relaxed mb-8"
            >
              Tell us about your business and target market. Our team will review your request
              and match you with the right intelligence package to drive your launch or expansion.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@spotlix.io" },
                { icon: Phone, label: "Response Time", value: "Within 24 business hours" },
                { icon: MapPin, label: "Coverage", value: "Global — all markets" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Assurance note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`${glassCard} rounded-xl p-4`}
            >
              <p className="text-xs text-slate-400 leading-relaxed">
                🔒 <span className="text-white font-medium">100% Confidential.</span>{" "}
                All business information shared with Spotlix is kept strictly confidential and never shared with third parties.
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`${glassCard} rounded-2xl p-6 sm:p-8`}
              style={{ boxShadow: "0 0 0 1px rgba(37,99,235,0.28), 0 0 30px rgba(37,99,235,0.10)" }}
            >
              {/* Success state */}
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Our team will review your business details and reach out within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/12 text-white font-medium text-sm px-7 py-3 rounded-xl transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.from_name}
                        onChange={(e) => setFormData((p) => ({ ...p, from_name: e.target.value }))}
                        className={inputClass("from_name")}
                      />
                      {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.from_email}
                        onChange={(e) => setFormData((p) => ({ ...p, from_email: e.target.value }))}
                        className={inputClass("from_email")}
                      />
                      {errors.from_email && <p className="text-red-400 text-xs mt-1">{errors.from_email}</p>}
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Business Type *</label>
                    <select
                      value={formData.business_type}
                      onChange={(e) => setFormData((p) => ({ ...p, business_type: e.target.value }))}
                      className={`${inputClass("business_type")} cursor-pointer`}
                      style={{ background: "#0d1e35" }}
                    >
                      <option value="" disabled>Select your business type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.business_type && <p className="text-red-400 text-xs mt-1">{errors.business_type}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Target City / Area *</label>
                      <input
                        type="text"
                        placeholder="e.g., Downtown Chicago"
                        value={formData.preferred_area}
                        onChange={(e) => setFormData((p) => ({ ...p, preferred_area: e.target.value }))}
                        className={inputClass("preferred_area")}
                      />
                      {errors.preferred_area && <p className="text-red-400 text-xs mt-1">{errors.preferred_area}</p>}
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Investment Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData((p) => ({ ...p, budget: e.target.value }))}
                        className={`${inputClass("budget")} cursor-pointer`}
                        style={{ background: "#0d1e35" }}
                      >
                        <option value="">Select range (optional)</option>
                        {budgetRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Goals */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Business Goals & Details *</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your business concept, goals, timeline, and any specific market questions..."
                      value={formData.business_goals}
                      onChange={(e) => setFormData((p) => ({ ...p, business_goals: e.target.value }))}
                      className={`${inputClass("business_goals")} resize-none`}
                    />
                    {errors.business_goals && <p className="text-red-400 text-xs mt-1">{errors.business_goals}</p>}
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <p className="text-xs text-red-300">Something went wrong. Please try again or email us directly at hello@spotlix.io</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Intelligence Request
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="text-slate-400 hover:text-white underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
