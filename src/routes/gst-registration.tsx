import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/gst-registration")({
  head: () => ({
    meta: [
      { title: "GST Registration @ ₹899 — Get GSTIN in 24 Hours | StartupEase" },
      { name: "description", content: "Online GST Registration in India at ₹899. Get your GSTIN certificate under 24 hours with expert support from StartupEase." },
      { property: "og:title", content: "GST Registration in 24 Hours @ ₹899" },
      { property: "og:description", content: "Fast, online, expert-handled GST registration." },
      { property: "og:url", content: "/gst-registration" },
    ],
    links: [{ rel: "canonical", href: "/gst-registration" }],
  }),
  component: () => (
    <ServicePage
      badge="24-Hour Delivery"
      title="GST Registration"
      subtitle="Get your GSTIN online with expert help — fast, transparent, and 100% digital."
      price="₹899"
      highlight="Get GST Certificate under 24 hours"
      benefits={[
        { title: "GSTIN Issued", desc: "Unique GSTIN for invoicing and input credit." },
        { title: "Soft Copy Certificate", desc: "Digital GST certificate delivered to your inbox." },
        { title: "Expert Support", desc: "CA-assisted process from application to approval." },
        { title: "100% Online", desc: "No office visits — share documents over WhatsApp." },
        { title: "Pan-India Service", desc: "Register in any state with one flat fee." },
        { title: "Filing Add-ons", desc: "Optional monthly GST return filing from ₹499." },
      ]}
      eligibility={[
        "Businesses with turnover above ₹40L (goods) / ₹20L (services).",
        "Inter-state suppliers and e-commerce sellers (any turnover).",
        "Voluntary registration for input credit and B2B credibility.",
      ]}
      documents={[
        "PAN of business / proprietor",
        "Aadhaar of authorized signatory",
        "Address proof of business (rent agreement / utility bill)",
        "Bank account proof (cancelled cheque or statement)",
        "Passport-size photograph",
        "Digital signature (for companies / LLPs)",
      ]}
      steps={[
        { title: "Share Details", desc: "Send documents over WhatsApp or our secure portal." },
        { title: "Application Filed", desc: "We file on the GSTN within hours of receiving docs." },
        { title: "Aadhaar OTP", desc: "Authenticate via Aadhaar — instant verification." },
        { title: "GSTIN Delivered", desc: "Certificate emailed within 24 hours in most cases." },
      ]}
      pricing={[
        { plan: "Basic", price: "₹899", features: ["GST Registration", "GSTIN Certificate", "Email support"] },
        { plan: "Standard", price: "₹2,499", recommended: true, features: ["GST Registration", "3 months GST returns", "Dedicated CA support"] },
        { plan: "Premium", price: "₹6,999", features: ["GST + Trademark assist", "12 months returns", "Priority support"] },
      ]}
      faqs={[
        { q: "Is GST registration mandatory?", a: "Yes if turnover exceeds threshold limits or if you sell inter-state / via e-commerce platforms." },
        { q: "Can I get GST without office address?", a: "Yes — you can register using a virtual office, co-working space NoC, or residential address with utility bill." },
        { q: "How fast is delivery?", a: "Most clients receive GSTIN within 24 working hours of submitting documents." },
        { q: "Are returns included?", a: "The ₹899 plan covers registration only. Add monthly returns from ₹499/month." },
      ]}
    />
  ),
});
