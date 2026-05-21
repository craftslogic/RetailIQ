"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, MessageSquare, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/#contact" },
  ],
  Solutions: [
    { label: "Location Analysis", href: "/#features" },
    { label: "Competitor Research", href: "/#features" },
    { label: "Demand Intelligence", href: "/#features" },
    { label: "Business Feasibility", href: "/#features" },
    { label: "Expansion Strategy", href: "/#features" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "#", label: "LinkedIn" },
  { icon: MessageSquare, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@spotlix.io", label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
      style={{ background: "#040D18" }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group w-fit">
              <Image 
                src="/logo.png" 
                alt="Spotlix" 
                width={150} 
                height={40} 
                className="h-8 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Smarter Locations. Stronger Businesses. The modern platform for physical business intelligence and location strategy.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 Spotlix. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            Physical Business Intelligence Platform •{" "}
            <a href="https://spotlix.io" className="hover:text-slate-400 transition-colors">spotlix.io</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
