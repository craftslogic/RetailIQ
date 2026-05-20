"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Zap,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`w-full max-w-7xl rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass-card shadow-2xl"
              : "bg-transparent border border-transparent"
          }`}
          style={{
            backdropFilter: scrolled ? "blur(20px)" : "none",
            background: scrolled
              ? "rgba(7, 17, 31, 0.85)"
              : "transparent",
            borderColor: scrolled
              ? "rgba(255,255,255,0.08)"
              : "transparent",
          }}
        >
          <div className="flex items-center justify-between px-6 py-3.5">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                }}
              >
                <BarChart3 size={16} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="text-lg font-bold"
                style={{ color: "#F8FAFC", letterSpacing: "-0.02em" }}
              >
                Spot<span className="text-gradient-primary">lix</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{ color: activeLink === link.label ? "#F8FAFC" : "#94A3B8" }}
                  whileHover={{ color: "#F8FAFC" }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="#contact"
                className="btn-secondary text-sm py-2 px-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Location Intelligence
              </motion.a>
              <motion.a
                href="#hero"
                className="btn-primary text-sm py-2 px-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Zap size={14} />
                Analyze My Business
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#94A3B8", background: "rgba(255,255,255,0.05)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-2xl p-4"
            style={{
              background: "rgba(7, 17, 31, 0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="block px-4 py-3 text-sm font-medium rounded-lg mb-1"
                style={{ color: "#94A3B8" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
              <a href="#contact" className="btn-secondary text-center justify-center text-sm">
                Get Location Intelligence
              </a>
              <a href="#hero" className="btn-primary text-center justify-center text-sm">
                <Zap size={14} /> Analyze My Business
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
