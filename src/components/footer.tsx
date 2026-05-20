"use client";

import { BarChart3, X, Share2, AtSign } from "lucide-react";

const LINKS = {
  Product: ["Location Scoring", "Competitor Mapping", "Demand Forecasting", "Risk Intelligence", "Launch Planning"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Resources: ["Documentation", "Case Studies", "Pricing", "API Access", "Support"],
};

export default function Footer() {
  return (
    <footer className="relative border-t overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(3,9,18,0.8)" }}>
      {/* Map-Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Animated Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent">
        <div className="absolute top-0 left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[slideRight_3s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(400%); opacity: 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}>
                <BarChart3 size={16} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold" style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}>
                Retail<span className="text-gradient-primary">IQ</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#64748B" }}>
              Pakistan's first physical business intelligence platform — helping entrepreneurs launch smarter, faster, and more profitably.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: X, label: "Twitter" },
                { icon: Share2, label: "LinkedIn" },
                { icon: AtSign, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.5)"; (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                >
                  <Icon size={15} color="#94A3B8" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-bold mb-4" style={{ color: "#F8FAFC", letterSpacing: "0.07em" }}>{category.toUpperCase()}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-colors duration-200" style={{ color: "#64748B" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#94A3B8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748B")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-xs" style={{ color: "#475569" }}>
            © 2026 RetailIQ. All rights reserved. Built in Karachi 🇵🇰
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-xs transition-colors duration-200" style={{ color: "#475569" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#94A3B8")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#475569")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
