"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>These Terms of Service govern access to and use of the Spotlix platform, website, systems, reports, strategic recommendations, business intelligence services, and operational infrastructure.</p>
          <p>By accessing Spotlix, users agree to comply with these terms, conditions, and applicable laws.</p>
          <p>Spotlix provides market intelligence, location analysis, competitor research, business feasibility evaluation, strategic recommendations, and launch planning support for physical businesses.</p>
          <p>Users agree not to misuse the platform, interfere with operational systems, attempt unauthorized access, distribute harmful content, exploit vulnerabilities, or engage in unlawful activities.</p>
          <p>Certain Spotlix services may require subscription fees, retainers, consultations, or project-based billing agreements. Users agree to complete payments according to agreed billing terms.</p>
          <p>All platform materials including reports, analytics systems, branding assets, frameworks, strategic recommendations, graphics, dashboards, methodologies, and intellectual property remain property of Spotlix unless otherwise agreed in writing.</p>
          <p>Spotlix provides strategic guidance and analytical insights but does not guarantee profitability, business success, revenue growth, investment outcomes, or operational performance.</p>
          <p>Users remain solely responsible for all business decisions, investments, operational actions, expansion strategies, and implementation activities resulting from Spotlix services or recommendations.</p>
          <p>Spotlix reserves the right to modify, suspend, reject, or discontinue services where necessary for operational, legal, security, or business reasons.</p>
          <p>Continued use of the platform constitutes acceptance of these Terms of Service.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
