import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/llp-registration")({
  head: () => ({
    meta: [
      { title: "LLP Registration @ ₹4,999 | StartupEase" },
      { name: "description", content: "Register your Limited Liability Partnership (LLP) with DSC, DIN and LLP Agreement. Best for services & professional firms." },
      { property: "og:url", content: "/llp-registration" },
    ],
    links: [{ rel: "canonical", href: "/llp-registration" }],
  }),
  component: () => (
    <ServicePage
      title="LLP Registration"
      subtitle="Limited Liability Partnership — the right choice for service businesses and professional partnerships."
      price="₹4,999"
      highlight="Liability protection with partnership flexibility"
      benefits={[
        { title: "Limited Liability", desc: "Partners' personal assets are protected." },
        { title: "Lower Compliance", desc: "Lesser ROC filings compared to Pvt Ltd." },
        { title: "No Minimum Capital", desc: "Start with any contribution amount." },
        { title: "Tax Efficient", desc: "Profits taxed only at LLP level, not partners." },
        { title: "Perpetual Existence", desc: "LLP continues despite partner changes." },
        { title: "Easy to Manage", desc: "Flexible internal structure via LLP Agreement." },
      ]}
      eligibility={[
        "Minimum 2 designated partners.",
        "At least one designated partner must be an Indian resident.",
        "Unique LLP name approved by MCA.",
      ]}
      documents={[
        "PAN & Aadhaar of partners",
        "Address proof of partners",
        "Registered office address proof",
        "Utility bill of office (recent)",
        "NoC from premises owner",
        "Passport-size photos",
      ]}
      steps={[
        { title: "DSC & DIN", desc: "Generate digital signatures and DIN for designated partners." },
        { title: "Name Approval", desc: "Reserve unique LLP name on MCA portal." },
        { title: "Incorporation", desc: "File FiLLiP form with required documents." },
        { title: "LLP Agreement", desc: "Draft and file LLP Agreement within 30 days." },
      ]}
      pricing={[
        { plan: "Basic", price: "₹4,999", features: ["2 designated partners", "DSC + DIN", "Incorporation"] },
        { plan: "Standard", price: "₹9,999", recommended: true, features: ["Basic + LLP Agreement", "PAN + TAN", "GST registration"] },
        { plan: "Pro", price: "₹19,999", features: ["Everything in Standard", "3 months compliance", "Dedicated CA"] },
      ]}
      faqs={[
        { q: "LLP vs Pvt Ltd?", a: "LLP is cheaper to comply with but harder to raise equity from. Pvt Ltd is investor-preferred." },
        { q: "Can foreigners be partners?", a: "Yes, subject to FDI rules. At least one partner must be an Indian resident." },
        { q: "Is audit mandatory?", a: "Only if turnover exceeds ₹40L or contribution exceeds ₹25L." },
        { q: "Can LLP be converted to Pvt Ltd?", a: "Yes, conversion is possible under prescribed MCA process." },
      ]}
    />
  ),
});
