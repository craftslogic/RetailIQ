"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Refund Policy</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>Due to the customized and analytical nature of Spotlix services, completed reports, consultations, analyses, strategic recommendations, and delivered operational assets are generally non-refundable.</p>
          <p>Refund requests may be reviewed under limited circumstances including duplicate payments, billing errors, or failure to initiate agreed services.</p>
          <p>Completed feasibility reports, market research analyses, location evaluations, strategic consultations, competitor studies, and business recommendations are generally non-refundable once delivered or substantially completed.</p>
          <p>Users subscribed to recurring plans may cancel future billing cycles before the next scheduled renewal date.</p>
          <p>Unauthorized chargebacks may result in service suspension or account termination.</p>
          <p>Spotlix reserves the right to determine refund eligibility based on operational progress, allocated resources, and delivered services.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
