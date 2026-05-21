import type { Metadata } from "next";
import { PolicyLayout, PolicySection, PolicyList } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Terms of Service — Spotlix",
  description: "Spotlix Terms of Service — The rules governing your use of the Spotlix platform.",
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service" effectiveDate="January 1, 2026">
      <PolicySection title="Agreement to Terms">
        <p>
          These Terms of Service govern access to and use of the Spotlix platform, website, systems, reports, strategic
          recommendations, business intelligence services, and operational infrastructure.
        </p>
        <p>By accessing Spotlix, users agree to comply with these terms, conditions, and applicable laws.</p>
      </PolicySection>

      <PolicySection title="Services Provided">
        <p>Spotlix provides:</p>
        <PolicyList items={[
          "Market intelligence and location analysis",
          "Competitor research and business feasibility evaluations",
          "Strategic recommendations and expansion planning",
          "Launch planning support for physical businesses",
        ]} />
      </PolicySection>

      <PolicySection title="Acceptable Use">
        <p>Users agree not to:</p>
        <PolicyList items={[
          "Misuse the platform or interfere with operational systems",
          "Attempt unauthorized access to any system or account",
          "Distribute harmful content or exploit vulnerabilities",
          "Engage in fraudulent, unlawful, or abusive activities",
          "Impersonate Spotlix or its team members",
        ]} />
      </PolicySection>

      <PolicySection title="Payment & Billing">
        <p>
          Certain Spotlix services may require subscription fees, retainers, consultations, or project-based billing
          agreements. Users agree to complete payments according to agreed billing terms.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual Property">
        <p>
          All platform materials including reports, analytics systems, branding assets, frameworks, strategic
          recommendations, graphics, dashboards, methodologies, and intellectual property remain property of Spotlix
          unless otherwise agreed in writing.
        </p>
      </PolicySection>

      <PolicySection title="Disclaimer of Guarantees">
        <p>
          Spotlix provides strategic guidance and analytical insights but does not guarantee profitability, business
          success, revenue growth, investment outcomes, or operational performance.
        </p>
        <p>
          Users remain solely responsible for all business decisions, investments, operational actions, expansion
          strategies, and implementation activities resulting from Spotlix services or recommendations.
        </p>
      </PolicySection>

      <PolicySection title="Service Modifications">
        <p>
          Spotlix reserves the right to modify, suspend, reject, or discontinue services where necessary for
          operational, legal, security, or business reasons.
        </p>
      </PolicySection>

      <PolicySection title="Continued Use">
        <p>
          Continued use of the platform constitutes acceptance of these Terms of Service. For questions, contact us at{" "}
          <a href="mailto:hello@spotlix.io" className="text-blue-400 hover:text-blue-300">hello@spotlix.io</a>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
