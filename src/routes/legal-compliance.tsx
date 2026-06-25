import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/legal-compliance")({
  head: () => ({
    meta: [
      { title: "Legal & Compliance Services for Startups | StartupEase" },
      { name: "description", content: "Annual ROC filings, secretarial compliance, founders' agreements, ESOP and contract drafting for startups." },
      { property: "og:url", content: "/legal-compliance" },
    ],
    links: [{ rel: "canonical", href: "/legal-compliance" }],
  }),
  component: () => (
    <ServicePage
      title="Legal & Compliance"
      subtitle="Stay clean with ROC filings, secretarial work and startup-grade legal documentation."
      highlight="Compliance retainers from ₹2,999/month"
      benefits={[
        { title: "ROC Filings", desc: "Annual returns (MGT-7, AOC-4) filed on time." },
        { title: "Director KYC", desc: "DIR-3 KYC for every director, every year." },
        { title: "Board Resolutions", desc: "All resolutions drafted and minuted." },
        { title: "Statutory Registers", desc: "Maintained and updated as per Companies Act." },
        { title: "Founders' Agreements", desc: "Equity, vesting, cliff and IP assignment." },
        { title: "Contracts & ESOPs", desc: "Employment, NDAs, vendor and ESOP pool setup." },
      ]}
      documents={[
        "Incorporation documents",
        "PAN & DSC of directors",
        "Previous year financials (if any)",
        "Board / shareholder details",
      ]}
      steps={[
        { title: "Audit & Plan", desc: "We map your current compliance status and gaps." },
        { title: "Documentation", desc: "Prepare resolutions, minutes and statutory filings." },
        { title: "Filings", desc: "Submit annual returns, KYC and event-based forms." },
        { title: "Ongoing Retainer", desc: "Monthly support, alerts and on-demand drafting." },
      ]}
      pricing={[
        { plan: "Starter", price: "₹2,999", features: ["Per month", "Annual ROC filings", "Director KYC"] },
        { plan: "Growth", price: "₹6,999", recommended: true, features: ["Per month", "ROC + Secretarial", "5 contracts/month"] },
        { plan: "Funded", price: "₹14,999", features: ["Per month", "Full compliance", "ESOP + investor docs"] },
      ]}
      faqs={[
        { q: "What happens if I miss ROC filing?", a: "Penalties accumulate at ₹100/day per form and can lead to director disqualification." },
        { q: "Do you handle ESOP pools?", a: "Yes — pool creation, grant letters, vesting schedules and Cap-table updates." },
        { q: "Founders' agreement — when?", a: "On day 1. We help with equity split, vesting, cliffs and IP transfer to the entity." },
      ]}
    />
  ),
});
