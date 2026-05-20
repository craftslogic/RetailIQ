"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SecurityPolicyPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Data Security Policy</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>Spotlix prioritizes infrastructure security and operational protection through modern security systems and cloud-based safeguards.</p>
          <p>Security measures may include encrypted HTTPS connections, authentication systems, restricted internal access, firewall protections, monitoring systems, and secure cloud architecture.</p>
          <p>Although Spotlix implements commercially reasonable security practices, no digital platform can guarantee complete protection against all cyber threats or unauthorized activity.</p>
          <p>Users are encouraged to maintain secure passwords and responsible account security practices.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
