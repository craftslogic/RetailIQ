"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AcceptableUsePolicyPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Acceptable Use Policy</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>Users may not:</p>
          <ul className="list-disc pl-5">
            <li>misuse platform systems</li>
            <li>distribute malicious software</li>
            <li>conduct fraudulent activity</li>
            <li>exploit vulnerabilities</li>
            <li>impersonate others</li>
            <li>violate laws or regulations</li>
            <li>abuse infrastructure services</li>
          </ul>
          <p>Spotlix reserves the right to suspend or terminate accounts that violate operational, legal, or security standards.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
