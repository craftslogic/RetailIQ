import type { Metadata } from "next";
import { PolicyLayout, PolicySection, PolicyList } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Disclaimer — Spotlix",
  description: "Spotlix Disclaimer — Important information about the nature of our intelligence services.",
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout title="Disclaimer" effectiveDate="January 1, 2026">
      <PolicySection title="Nature of Services">
        <p>
          Spotlix provides strategic market intelligence, location analysis, competitor research, and business
          feasibility recommendations intended for informational and operational purposes only.
        </p>
      </PolicySection>

      <PolicySection title="No Guarantees">
        <p>Spotlix does not guarantee:</p>
        <PolicyList items={[
          "Business profitability or financial returns",
          "Successful expansion or market entry",
          "Revenue growth or customer acquisition",
          "Market dominance or competitive advantage",
          "Operational success or business survival",
          "Investment outcomes or ROI",
        ]} />
      </PolicySection>

      <PolicySection title="External Factors">
        <p>
          Business performance depends on multiple external factors including execution quality, local competition,
          economic conditions, market behavior, operational management, and customer demand. These factors are
          beyond Spotlix&apos;s control and cannot be predicted with certainty.
        </p>
      </PolicySection>

      <PolicySection title="User Responsibility">
        <p>
          Users acknowledge that all business activities involve inherent risks and that strategic recommendations
          do not guarantee future results. All final business decisions, investments, and operational activities
          remain the sole responsibility of the user.
        </p>
      </PolicySection>

      <PolicySection title="Professional Advice">
        <p>
          Spotlix intelligence reports are not a substitute for professional legal, financial, or business advisory
          services. Users are encouraged to consult qualified professionals before making significant business decisions.
        </p>
        <p className="mt-3">
          For questions about this disclaimer, contact:{" "}
          <a href="mailto:hello@spotlix.io" className="text-blue-400 hover:text-blue-300">hello@spotlix.io</a>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
