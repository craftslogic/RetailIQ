"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/#features",
    dropdown: [
      { label: "Location Analysis", href: "/#features" },
      { label: "Competitor Research", href: "/#features" },
      { label: "Demand Intelligence", href: "/#features" },
      { label: "Business Feasibility", href: "/#features" },
      { label: "Expansion Strategy", href: "/#features" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07111F]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SPOT<span className="text-gradient-primary">LIX</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-card rounded-xl p-2 shadow-2xl shadow-black/40"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                Book a Call
              </Link>
              <Link
                href="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#07111F]/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="block px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 flex flex-col gap-2 border-t border-white/5">
                <Link
                  href="/#contact"
                  onClick={() => handleNavClick("/#contact")}
                  className="btn-secondary text-sm justify-center"
                >
                  Book a Call
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => handleNavClick("/#contact")}
                  className="btn-primary text-sm justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
