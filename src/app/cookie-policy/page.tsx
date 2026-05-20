"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Cookie Policy</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>Spotlix uses cookies and analytics technologies to improve user experience, optimize platform functionality, monitor traffic patterns, improve operational systems, and enhance security protections.</p>
          <p>Cookies may collect information related to browser activity, device information, session analytics, and interaction behavior.</p>
          <p>Users may disable cookies through browser settings; however, certain platform features may become limited.</p>
          <p>By continuing to use Spotlix, users consent to the use of cookies and related tracking technologies.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
