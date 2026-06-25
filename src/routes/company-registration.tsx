import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/company-registration")({
  head: () => ({
    meta: [
      { title: "Private Limited Company Registration @ ₹7,999 | StartupEase" },
      { name: "description", content: "Register your Private Limited Company online with DSC, DIN, PAN, TAN and Incorporation Certificate. Funding-ready in 7 days." },
      { property: "og:url", content: "/company-registration" },
    ],
    links: [{ rel: "canonical", href: "/company-registration" }],
  }),
  component: () => (
    <ServicePage
      badge="Most Popular"
      title="Private Limited Company Registration"
      subtitle="The investor-preferred structure. Complete incorporation with DSC, DIN, PAN, TAN, MoA and AoA."
      price="₹7,999"
      highlight="Funding-ready entity in 7 working days"
      benefits={[
        { title: "DSC & DIN", desc: "Digital signatures and Director Identification Numbers for 2 directors." },
        { title: "PAN & TAN", desc: "Company PAN and TAN issued post incorporation." },
        { title: "Incorporation Certificate", desc: "Official Certificate of Incorporation from MCA." },
        { title: "MoA & AoA Drafting", desc: "Custom Memorandum and Articles drafted by experts." },
        { title: "Bank Account Help", desc: "Assistance opening a current account with leading banks." },
        { title: "Investor-Preferred", desc: "Pvt Ltd is the structure VCs and angels require." },
      ]}
      eligibility={[
        "Minimum 2 directors and 2 shareholders (can be the same persons).",
        "At least one director must be an Indian resident.",
        "Unique company name not conflicting with existing trademarks.",
      ]}
      documents={[
        "PAN & Aadhaar of all directors",
        "Passport (for foreign directors / NRIs)",
        "Address proof of directors",
        "Registered office address proof",
        "NoC from owner of office premises",
        "Passport-size photos",
      ]}
      steps={[
        { title: "Name Reservation", desc: "Apply on RUN/SPICe+ for unique name approval." },
        { title: "DSC & DIN", desc: "Generate Digital Signatures and Director IDs." },
        { title: "Filing on MCA", desc: "Submit SPICe+ form with MoA, AoA and supporting docs." },
        { title: "Certificate Issued", desc: "Receive Incorporation Certificate, PAN and TAN." },
      ]}
      pricing={[
        { plan: "Basic", price: "₹7,999", features: ["Up to 2 directors", "DSC + DIN", "PAN + TAN", "MoA & AoA"] },
        { plan: "Growth", price: "₹14,999", recommended: true, features: ["Everything in Basic", "Startup India + GST", "Trademark search", "Bank account help"] },
        { plan: "Pro", price: "₹29,999", features: ["Everything in Growth", "3 months compliance", "Founders' agreement", "Dedicated CA"] },
      ]}
      faqs={[
        { q: "Pvt Ltd or LLP?", a: "Pvt Ltd if you plan to raise funding. LLP for service partnerships not seeking equity capital." },
        { q: "How long does it take?", a: "7–10 working days end-to-end with complete documents." },
        { q: "Do I need an office?", a: "Yes, a registered address. Co-working spaces and home addresses are acceptable." },
        { q: "Can a single person start?", a: "OPC (One Person Company) is for solo founders. Pvt Ltd needs 2 directors minimum." },
      ]}
    />
  ),
});
