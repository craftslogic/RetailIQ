import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AboutPreviewSection from "@/components/about-preview-section";
import IndustriesSection from "@/components/industries-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AboutPreviewSection />
        <IndustriesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
