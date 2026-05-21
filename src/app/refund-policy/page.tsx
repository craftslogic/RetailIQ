import type { Metadata } from "next";
import { PolicyLayout, PolicySection, PolicyList } from "@/components/policy-layout";

export const metadata: Metadata = {
  title: "Refund Policy — Spotlix",
  description: "Spotlix Refund Policy — Understand our refund terms for intelligence services.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" effectiveDate="January 1, 2026">
      <PolicySection title="Nature of Our Services">
        <p>
          Due to the customized and analytical nature of Spotlix services, completed reports, consultations, analyses,
          strategic recommendations, and delivered operational assets are generally non-refundable.
        </p>
      </PolicySection>

      <PolicySection title="Eligible Refund Circumstances">
        <p>Refund requests may be reviewed under limited circumstances including:</p>
        <PolicyList items={[
          "Duplicate payments or billing errors",
          "Failure to initiate agreed services within a reasonable timeframe",
          "Verifiable technical failures preventing service delivery",
        ]} />
      </PolicySection>

      <PolicySection title="Non-Refundable Services">
        <p>The following are generally non-refundable once delivered or substantially completed:</p>
        <PolicyList items={[
          "Completed feasibility reports and market research analyses",
          "Location evaluations and strategic consultations",
          "Competitor studies and business recommendations",
          "Branding frameworks and launch strategy documents",
          "Any partially completed analysis where significant resources have been allocated",
        ]} />
      </PolicySection>

      <PolicySection title="Recurring Subscriptions">
        <p>
          Users subscribed to recurring plans may cancel future billing cycles before the next scheduled renewal date.
          Cancellation prevents future charges but does not entitle users to refunds for the current billing period.
        </p>
      </PolicySection>

      <PolicySection title="Chargebacks">
        <p>
          Unauthorized chargebacks may result in service suspension or account termination. We encourage users to
          contact our team directly to resolve any billing concerns before initiating disputes.
        </p>
      </PolicySection>

      <PolicySection title="Refund Determination">
        <p>
          Spotlix reserves the right to determine refund eligibility based on operational progress, allocated resources,
          and delivered services. All refund decisions are final.
        </p>
        <p className="mt-3">
          For refund inquiries, contact:{" "}
          <a href="mailto:support@spotlix.io" className="text-blue-400 hover:text-blue-300">support@spotlix.io</a>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
