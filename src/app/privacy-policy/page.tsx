import type { Metadata } from "next";
import { PolicyLayout, PolicySection, PolicyList } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — Spotlix",
  description: "Spotlix Privacy Policy — How we collect, store, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" effectiveDate="January 1, 2026">
      <PolicySection title="Overview">
        <p>
          At Spotlix, protecting user privacy and maintaining trust is one of our highest priorities. This Privacy Policy
          explains how Spotlix collects, stores, processes, and protects information when users access our platform,
          services, systems, and digital infrastructure.
        </p>
        <p>
          Spotlix operates as a location intelligence and business feasibility platform designed to help entrepreneurs
          and physical businesses analyze markets, evaluate locations, study competitors, and improve launch decisions.
        </p>
      </PolicySection>

      <PolicySection title="Information We Collect">
        <p>To provide these services effectively, Spotlix may collect:</p>
        <PolicyList items={[
          "Personal information including names, email addresses, and business concepts",
          "Target locations, market preferences, and billing information",
          "Communication records and operational data",
          "Technical analytics data and session information",
        ]} />
        <p>
          Technical information may include browser type, IP address, operating system, device information, interaction
          behavior, and session analytics used to improve platform functionality and operational performance.
        </p>
      </PolicySection>

      <PolicySection title="How We Use Your Information">
        <p>We use collected information to:</p>
        <PolicyList items={[
          "Deliver location intelligence reports and strategic analyses",
          "Communicate about your projects and service requests",
          "Improve platform functionality and user experience",
          "Process billing and manage service agreements",
          "Ensure security and prevent fraudulent activity",
        ]} />
      </PolicySection>

      <PolicySection title="Third-Party Services">
        <p>
          Spotlix may utilize third-party infrastructure providers including payment processors, analytics systems, cloud
          hosting providers, communication systems, scheduling systems, and operational software tools. These providers
          are bound by their own privacy policies and applicable data protection laws.
        </p>
      </PolicySection>

      <PolicySection title="Cookies & Tracking">
        <p>
          Cookies and tracking technologies may be used to improve user experience, analyze platform traffic, monitor
          operational performance, enhance security systems, and optimize platform functionality. See our Cookie Policy
          for full details.
        </p>
      </PolicySection>

      <PolicySection title="Data Security">
        <p>
          Spotlix implements commercially reasonable security measures including encrypted connections, restricted access
          systems, authentication protections, cloud infrastructure security, and operational monitoring systems.
        </p>
      </PolicySection>

      <PolicySection title="Your Rights">
        <p>
          Users may request access, correction, or deletion of their information where applicable under operational and
          legal limitations. To exercise these rights, contact us at privacy@spotlix.io.
        </p>
      </PolicySection>

      <PolicySection title="Data Sharing">
        <p>
          Spotlix does not sell personal information to third parties. Information may only be shared where necessary
          for operational services, legal compliance, fraud prevention, infrastructure functionality, or business
          protection.
        </p>
      </PolicySection>

      <PolicySection title="Agreement">
        <p>By using Spotlix, users acknowledge and agree to this Privacy Policy.</p>
        <p className="mt-3">
          Questions? Contact us at{" "}
          <a href="mailto:privacy@spotlix.io" className="text-blue-400 hover:text-blue-300">privacy@spotlix.io</a>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
