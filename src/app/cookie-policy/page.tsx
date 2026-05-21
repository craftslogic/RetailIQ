import type { Metadata } from "next";
import { PolicyLayout, PolicySection, PolicyList } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Cookie Policy — Spotlix",
  description: "Spotlix Cookie Policy — How we use cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" effectiveDate="January 1, 2026">
      <PolicySection title="Use of Cookies">
        <p>
          Spotlix uses cookies and analytics technologies to improve user experience, optimize platform functionality,
          monitor traffic patterns, improve operational systems, and enhance security protections.
        </p>
      </PolicySection>

      <PolicySection title="What Cookies Collect">
        <p>Cookies may collect information related to:</p>
        <PolicyList items={[
          "Browser activity and device information",
          "Session analytics and interaction behavior",
          "Geographic region and language preferences",
          "Platform performance and load time metrics",
          "Traffic sources and referral data",
        ]} />
      </PolicySection>

      <PolicySection title="Types of Cookies">
        <PolicyList items={[
          "Essential Cookies — Required for core platform functionality",
          "Analytics Cookies — Used to understand platform usage patterns",
          "Performance Cookies — Used to optimize load times and functionality",
          "Security Cookies — Used to detect and prevent fraudulent activity",
        ]} />
      </PolicySection>

      <PolicySection title="Managing Cookies">
        <p>
          Users may disable cookies through browser settings; however, certain platform features may become limited
          or unavailable. Instructions for disabling cookies can be found in your browser&apos;s help documentation.
        </p>
      </PolicySection>

      <PolicySection title="Consent">
        <p>
          By continuing to use Spotlix, users consent to the use of cookies and related tracking technologies as
          described in this policy.
        </p>
        <p className="mt-3">
          For cookie-related questions, contact us at{" "}
          <a href="mailto:privacy@spotlix.io" className="text-blue-400 hover:text-blue-300">privacy@spotlix.io</a>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
