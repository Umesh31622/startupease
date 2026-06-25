import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/trademark")({
  head: () => ({
    meta: [
      { title: "Trademark Registration @ ₹1,999 + Govt Fee | StartupEase" },
      { name: "description", content: "Protect your brand with trademark registration. Class selection, search and filing handled by IP experts." },
      { property: "og:url", content: "/trademark" },
    ],
    links: [{ rel: "canonical", href: "/trademark" }],
  }),
  component: () => (
    <ServicePage
      title="Trademark Registration"
      subtitle="Protect your brand name, logo or tagline with India-wide trademark protection."
      price="₹1,999"
      priceNote="+ Govt Fee"
      highlight="Use ™ from day 1 of filing"
      benefits={[
        { title: "Brand Protection", desc: "Exclusive rights to use your mark across India for 10 years." },
        { title: "Class Selection", desc: "Expert guidance on the right Nice classification." },
        { title: "Filing Support", desc: "End-to-end filing, objection and hearing support." },
        { title: "Use ™ Immediately", desc: "Display ™ as soon as application is filed." },
        { title: "Renewable Forever", desc: "Renew every 10 years to keep protection active." },
        { title: "Legal Action Ready", desc: "Sue infringers under Trade Marks Act, 1999." },
      ]}
      eligibility={[
        "Any individual, business or entity owning a unique brand element.",
        "Mark must not be deceptively similar to existing trademarks.",
        "Cannot include prohibited words/symbols under Trade Marks Act.",
      ]}
      documents={[
        "Applicant identity proof",
        "Brand logo (if applicable, in JPG)",
        "Description of goods/services",
        "Date of first use (if any)",
        "Power of Attorney (we provide)",
        "MSME / Startup India certificate (for discounted fees)",
      ]}
      steps={[
        { title: "Trademark Search", desc: "Public search to identify conflicts and class fit." },
        { title: "Application Filing", desc: "Online filing with the Trademark Registry." },
        { title: "Examination", desc: "Respond to any objections raised by the examiner." },
        { title: "Registration", desc: "Mark published in journal; certificate issued after 4 months if unopposed." },
      ]}
      pricing={[
        { plan: "Individual", price: "₹6,499", features: ["1 class", "Govt fee for individuals/startups included", "Search + filing"] },
        { plan: "SME", price: "₹10,999", recommended: true, features: ["1 class (non-startup)", "Search + filing", "Examination reply"] },
        { plan: "Multi-Class", price: "₹18,999", features: ["Up to 3 classes", "Includes govt fees", "Priority support"] },
      ]}
      faqs={[
        { q: "How long does trademark take?", a: "Use ™ on filing day. ® comes once registered, typically 12–18 months if unopposed." },
        { q: "What are the govt fees?", a: "₹4,500 per class for individuals/startups; ₹9,000 per class for others (online filing)." },
        { q: "Can I file logo and name together?", a: "Yes, as a combined device mark in one filing." },
        { q: "What if someone objects?", a: "We handle examination replies and opposition proceedings as add-on services." },
      ]}
    />
  ),
});
