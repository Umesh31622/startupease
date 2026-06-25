import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/startup-india")({
  head: () => ({
    meta: [
      { title: "Startup India DPIIT Registration @ ₹1,499 | StartupEase" },
      { name: "description", content: "Get DPIIT recognition under Startup India. Avail tax exemptions, easier compliance and government schemes for 10 years." },
      { property: "og:url", content: "/startup-india" },
    ],
    links: [{ rel: "canonical", href: "/startup-india" }],
  }),
  component: () => (
    <ServicePage
      badge="Govt Recognized"
      title="Startup India Registration"
      subtitle="Get DPIIT recognition and unlock tax exemptions, IPR benefits and access to government schemes."
      price="₹1,499"
      highlight="DPIIT certificate in 5–7 working days"
      benefits={[
        { title: "Tax Exemption", desc: "3-year income tax holiday under Section 80-IAC." },
        { title: "Angel Tax Relief", desc: "Exemption from angel tax on investments." },
        { title: "Self-Certification", desc: "Compliance under 9 labour & environmental laws." },
        { title: "IPR Benefits", desc: "80% rebate on patent fees; fast-tracked examination." },
        { title: "Govt Tenders", desc: "Eligibility for public procurement schemes." },
        { title: "Easier Winding Up", desc: "Fast-track exit within 90 days." },
      ]}
      eligibility={[
        "Incorporated as Pvt Ltd, LLP or Partnership Firm.",
        "Not older than 10 years from date of incorporation.",
        "Annual turnover under ₹100 Cr in any year since incorporation.",
        "Working towards innovation, improvement of products/services or scalability.",
      ]}
      documents={[
        "Incorporation certificate",
        "PAN of entity",
        "Brief about innovation/idea",
        "Pitch deck or website link",
        "Patents/awards (if any)",
        "Director details",
      ]}
      steps={[
        { title: "Eligibility Check", desc: "We confirm your entity qualifies as a startup." },
        { title: "Documentation", desc: "Prepare write-ups on innovation, scalability and impact." },
        { title: "Application", desc: "File on Startup India portal with all annexures." },
        { title: "Certificate", desc: "DPIIT issues recognition certificate digitally." },
      ]}
      pricing={[
        { plan: "Basic", price: "₹1,499", features: ["DPIIT Application", "Recognition Certificate"] },
        { plan: "Standard", price: "₹4,999", recommended: true, features: ["DPIIT + 80-IAC Tax Exemption filing", "Pitch deck review"] },
        { plan: "Pro", price: "₹14,999", features: ["DPIIT + Tax Exemption", "Trademark filing", "Compliance retainer"] },
      ]}
      faqs={[
        { q: "Is Startup India free?", a: "DPIIT recognition itself has no government fee. Our professional fee is ₹1,499." },
        { q: "What tax benefits do I get?", a: "Eligible startups can claim 3 years of 100% tax holiday on profits under Section 80-IAC." },
        { q: "Do I need a patent?", a: "No, but innovation/scalability of your idea must be clearly documented." },
        { q: "Can a partnership firm apply?", a: "Yes, registered partnership firms are eligible." },
      ]}
    />
  ),
});
