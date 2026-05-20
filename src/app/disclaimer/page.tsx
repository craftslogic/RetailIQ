"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DisclaimerPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Disclaimer</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>Spotlix provides strategic market intelligence, location analysis, competitor research, and business feasibility recommendations intended for informational and operational purposes only.</p>
          <p>Spotlix does not guarantee:</p>
          <ul className="list-disc pl-5">
            <li>business profitability</li>
            <li>successful expansion</li>
            <li>revenue growth</li>
            <li>customer acquisition</li>
            <li>market dominance</li>
            <li>operational success</li>
            <li>investment outcomes</li>
          </ul>
          <p>Business performance depends on multiple external factors including execution quality, local competition, economic conditions, market behavior, operational management, and customer demand.</p>
          <p>Users acknowledge that all business activities involve inherent risks and that strategic recommendations do not guarantee future results.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
