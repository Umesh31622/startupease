import {
  Rocket, FileText, Building2, Briefcase, Award, ShieldCheck,
  Calculator, TrendingUp, Users, Landmark, Sparkles, Scale,
  HeartHandshake, Target, BadgeCheck, Headphones, Zap, Trophy,
} from "lucide-react";

export const CONTACT = {
  phone: "+91 7347574707",
  phoneHref: "tel:+917347574707",
  whatsappNumber: "917347574707",
  whatsapp: "https://wa.me/917347574707",
  email: "info@startupease.in",
  emailHref: "mailto:info@startupease.in",
  website: "startupease.in",
};

export function waLink(message: string) {
  return `https://wa.me/917347574707?text=${encodeURIComponent(message)}`;
}


export type Service = {
  slug: string;
  title: string;
  short: string;
  price?: string;
  priceNote?: string;
  icon: any;
};

export const SERVICES: Service[] = [
  { slug: "/gst-registration", title: "GST Registration", short: "Get GSTIN under 24 hours.", price: "₹899", icon: FileText },
  { slug: "/company-registration", title: "Pvt Ltd Company Registration", short: "DSC, DIN, PAN, TAN & MoA.", price: "₹7,999", icon: Building2 },
  { slug: "/llp-registration", title: "LLP Registration", short: "Limited liability with flexibility.", price: "₹4,999", icon: Briefcase },
  { slug: "/startup-india", title: "Startup India Registration", short: "DPIIT recognition & tax benefits.", price: "₹1,499", icon: Rocket },
  { slug: "/trademark", title: "Trademark Registration", short: "Protect your brand identity.", price: "₹1,999", priceNote: "+ Govt Fee", icon: Award },
  { slug: "/finance-tax", title: "Accounting & Tax", short: "Bookkeeping, GST returns, ITR.", icon: Calculator },
  { slug: "/legal-compliance", title: "Compliance & ROC", short: "Annual filings & secretarial.", icon: Scale },
  { slug: "/fundraising", title: "Fundraising & Growth", short: "Pitch decks, valuation, diligence.", icon: TrendingUp },
  { slug: "/startup-network", title: "Angel Investor Connect", short: "Warm intros to active angels.", icon: Sparkles },
  { slug: "/startup-network", title: "Venture Capital Connect", short: "Series A+ VC introductions.", icon: Landmark },
];

export const WHY_US = [
  { icon: BadgeCheck, title: "Trusted Experts", desc: "CAs, CSs & lawyers under one roof." },
  { icon: Zap, title: "Fast & Reliable", desc: "GST in 24 hrs. Company in 7 days." },
  { icon: HeartHandshake, title: "Investor Connect", desc: "200+ angels and VCs in our network." },
  { icon: Headphones, title: "End-to-End Support", desc: "From idea to Series A and beyond." },
  { icon: Target, title: "Startup Focused", desc: "Built only for founders, not enterprises." },
  { icon: ShieldCheck, title: "Compliance Experts", desc: "Stay clean with ROC, GST & ITR filings." },
];

export const JOURNEY = [
  { phase: "Launch", color: "from-teal to-teal", items: ["Register Company", "Setup GST", "Startup India"] },
  { phase: "Comply", color: "from-navy to-navy", items: ["ROC Filings", "Trademark", "Tax Returns"] },
  { phase: "Raise", color: "from-teal to-navy", items: ["Pitch Deck", "Valuation", "Angel Investors"] },
  { phase: "Scale", color: "from-navy to-teal", items: ["VC Funding", "Mentorship", "Partnerships"] },
];

export const TESTIMONIALS = [
  { name: "Ananya Verma", role: "Founder, Brewly", quote: "From incorporation to seed round in 6 months. Their investor intros changed our trajectory." },
  { name: "Rohan Mehta", role: "CEO, FleetIQ", quote: "GST was live in under 24 hours. The team genuinely cares about founders." },
  { name: "Priya Iyer", role: "Co-founder, Tendr", quote: "Their pitch deck rework helped us close ₹3.2 Cr from angels in 5 weeks." },
  { name: "Karan Shah", role: "Founder, Loopwear", quote: "Trademark, ROC, accounting—everything handled. I focus on product, they handle the rest." },
  { name: "Sneha Kapoor", role: "CTO, Northbeam", quote: "Best startup compliance partner we've worked with. Responsive and proactive." },
  { name: "Aditya Rao", role: "Founder, Sparrow", quote: "Their VC connect program got us 14 warm intros. We closed our pre-Series A in 8 weeks." },
];

export const FAQS = [
  { q: "How long does company registration take?", a: "A Private Limited Company is typically incorporated within 7–10 working days once all documents are received." },
  { q: "Can I get my GSTIN in 24 hours?", a: "Yes. With complete documentation our team files within hours and most clients receive their GSTIN within 1 working day." },
  { q: "What is Startup India DPIIT recognition?", a: "It's a government certification giving startups tax exemptions, easier compliance, and access to government schemes for up to 10 years." },
  { q: "Do I need a Pvt Ltd or LLP?", a: "Pvt Ltd is preferred if you plan to raise external funding. LLP is suited for service businesses with partners not seeking equity investors." },
  { q: "How much does trademark registration cost?", a: "Our professional fee is ₹1,999 per class plus government fees (₹4,500 for individuals/startups, ₹9,000 for others)." },
  { q: "Do you help with fundraising?", a: "Yes. We assist with pitch decks, financial models, valuation, investor outreach, and due diligence support." },
  { q: "What is included in compliance services?", a: "Annual ROC filings, board resolutions, statutory registers, director KYC, and secretarial advisory." },
  { q: "Can you handle monthly accounting?", a: "Yes. We provide bookkeeping, GST returns, TDS, payroll, and monthly MIS reports starting at ₹2,999/month." },
  { q: "Do you connect startups with angel investors?", a: "We make warm introductions to relevant angels and angel networks based on your sector and stage." },
  { q: "What sectors do you work with?", a: "SaaS, D2C, fintech, healthtech, edtech, climate, B2B services and more. Anything early-stage and India-incorporated." },
  { q: "Is everything online?", a: "Yes. Onboarding, document collection, signing, and delivery is 100% digital." },
  { q: "Do you offer mentorship?", a: "Our network includes operators and founders who mentor portfolio startups across product, GTM, and fundraising." },
  { q: "What is the cost of Startup India registration?", a: "Our service fee is ₹1,499. Government recognition itself is free." },
  { q: "Will I get a dedicated point of contact?", a: "Yes. Every founder is assigned a dedicated account manager from day one." },
  { q: "Do you serve founders outside India?", a: "We serve Indian-incorporated entities and NRIs setting up in India. Cross-border structuring is offered on consultation." },
];

export const FUNDING_STAGES = [
  { stage: "Pre-Seed", range: "₹25L – ₹1.5 Cr", focus: "MVP, founding team" },
  { stage: "Seed", range: "₹1.5 – 8 Cr", focus: "Early traction, PMF" },
  { stage: "Series A", range: "₹15 – 60 Cr", focus: "Scaling GTM" },
  { stage: "Series B", range: "₹60 – 200 Cr", focus: "Market expansion" },
  { stage: "Growth", range: "₹200 Cr+", focus: "Category leadership" },
];

export const PRICING_PLANS = [
  {
    name: "Starter", price: "₹899", tag: "For new founders",
    features: ["GST Registration", "GSTIN Certificate", "Expert support", "Online process"],
    cta: "Start Now", highlight: false,
  },
  {
    name: "Growth", price: "₹7,999", tag: "Most popular",
    features: ["Pvt Ltd Incorporation", "DSC + DIN + PAN + TAN", "MoA & AoA drafting", "Bank account assistance"],
    cta: "Get Started", highlight: true,
  },
  {
    name: "Business", price: "₹24,999", tag: "Launch + comply",
    features: ["Company + GST + Startup India", "Trademark filing (1 class)", "3 months accounting", "Dedicated manager"],
    cta: "Choose Business", highlight: false,
  },
  {
    name: "Enterprise", price: "Custom", tag: "Funding-ready",
    features: ["Everything in Business", "Pitch deck + valuation", "Investor connect", "Full compliance retainer"],
    cta: "Talk to Sales", highlight: false,
  },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Funding", to: "/fundraising" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const SERVICE_LINKS = [
  { label: "GST Registration", to: "/gst-registration" },
  { label: "Company Registration", to: "/company-registration" },
  { label: "LLP Registration", to: "/llp-registration" },
  { label: "Startup India", to: "/startup-india" },
  { label: "Trademark", to: "/trademark" },
  { label: "Legal & Compliance", to: "/legal-compliance" },
  { label: "Finance & Tax", to: "/finance-tax" },
  { label: "Fundraising & Growth", to: "/fundraising" },
  { label: "Startup Network", to: "/startup-network" },
];
