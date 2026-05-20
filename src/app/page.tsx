import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import DashboardPreviewSection from "@/components/dashboard-preview-section";
import LocationIntelligenceSection from "@/components/location-intelligence-section";
import SuccessProbabilitySection from "@/components/success-probability-section";
import RevenueForecastingSection from "@/components/revenue-forecasting-section";
import StoreOptimizationSection from "@/components/store-optimization-section";
import CompetitorIntelligenceSection from "@/components/competitor-intelligence-section";
import BusinessFailureSection from "@/components/business-failure-section";
import StoreBrandingSection from "@/components/store-branding-section";
import ProcessSection from "@/components/process-section";
import SuccessStoriesSection from "@/components/success-stories-section";
import PricingSection from "@/components/pricing-section";
import FeaturesSection from "@/components/features-section";
import SocialProofSection from "@/components/social-proof-section";
import FinalCtaSection from "@/components/final-cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <HeroSection />
      <DashboardPreviewSection />
      <LocationIntelligenceSection />
      <SuccessProbabilitySection />
      <CompetitorIntelligenceSection />
      <RevenueForecastingSection />
      <StoreOptimizationSection />
      <StoreBrandingSection />
      <BusinessFailureSection />
      <ProcessSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <SocialProofSection />
      <PricingSection />
      <FinalCtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
