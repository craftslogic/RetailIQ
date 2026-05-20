"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Effective Date: January 1, 2026</p>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-slate-300">
          <p>At Spotlix, protecting user privacy and maintaining trust is one of our highest priorities. This Privacy Policy explains how Spotlix collects, stores, processes, and protects information when users access our platform, services, systems, and digital infrastructure.</p>
          <p>Spotlix operates as a location intelligence and business feasibility platform designed to help entrepreneurs and physical businesses analyze markets, evaluate locations, study competitors, and improve launch decisions.</p>
          <p>To provide these services effectively, Spotlix may collect personal, business, operational, and technical information including names, email addresses, business concepts, target locations, market preferences, billing information, communication records, and technical analytics data.</p>
          <p>Technical information may include browser type, IP address, operating system, device information, interaction behavior, and session analytics used to improve platform functionality and operational performance.</p>
          <p>Spotlix may utilize third-party infrastructure providers including payment processors, analytics systems, cloud hosting providers, communication systems, scheduling systems, and operational software tools.</p>
          <p>Cookies and tracking technologies may be used to improve user experience, analyze platform traffic, monitor operational performance, enhance security systems, and optimize platform functionality.</p>
          <p>Spotlix implements commercially reasonable security measures including encrypted connections, restricted access systems, authentication protections, cloud infrastructure security, and operational monitoring systems.</p>
          <p>Users may request access, correction, or deletion of their information where applicable under operational and legal limitations.</p>
          <p>Spotlix does not sell personal information to third parties. Information may only be shared where necessary for operational services, legal compliance, fraud prevention, infrastructure functionality, or business protection.</p>
          <p>By using Spotlix, users acknowledge and agree to this Privacy Policy.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
