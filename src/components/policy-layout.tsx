"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

interface PolicyLayoutProps {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, effectiveDate, children }: PolicyLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #05101D, #07111F)" }}>
          <div className="absolute inset-0 map-grid opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex mb-4">
              <span className="section-label">Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">{title}</h1>
            {effectiveDate && (
              <p className="text-sm text-slate-500">Effective Date: {effectiveDate}</p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16" style={{ background: "#07111F" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <div className="prose-spotlix">{children}</div>
            </div>

            {/* Legal nav */}
            <div className="mt-10 glass-card rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Other Legal Pages</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Refund Policy", href: "/refund-policy" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="text-xs text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/3 hover:bg-white/6 border border-white/5">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Prose component helpers
export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/5">{title}</h2>
      <div className="text-sm text-slate-400 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}
