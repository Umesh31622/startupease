import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/finance-tax")({
  head: () => ({
    meta: [
      { title: "Accounting, Tax & Bookkeeping for Startups | StartupEase" },
      { name: "description", content: "Monthly bookkeeping, GST returns, TDS, payroll and ITR filings. Founder-friendly accounting starting at ₹2,999/month." },
      { property: "og:url", content: "/finance-tax" },
    ],
    links: [{ rel: "canonical", href: "/finance-tax" }],
  }),
  component: () => (
    <ServicePage
      title="Finance & Tax"
      subtitle="From bookkeeping to tax filings — accounting that scales with your startup."
      highlight="Monthly MIS, GST, TDS and ITR — all handled"
      benefits={[
        { title: "Monthly Bookkeeping", desc: "Cloud accounting on Zoho / Tally with reconciliations." },
        { title: "GST Returns", desc: "GSTR-1, 3B and annual returns filed on time." },
        { title: "TDS Filing", desc: "Quarterly TDS returns and Form 16/16A issuance." },
        { title: "Payroll", desc: "Salary processing, PF, ESIC and payslip generation." },
        { title: "Income Tax Returns", desc: "Company and director ITR filings each year." },
        { title: "Monthly MIS", desc: "Founder-friendly dashboards on revenue, burn and runway." },
      ]}
      documents={[
        "Bank statements (monthly)",
        "Sales & expense invoices",
        "Employee details for payroll",
        "Previous year financials",
      ]}
      steps={[
        { title: "Onboarding", desc: "Migrate prior books to cloud accounting." },
        { title: "Monthly Books", desc: "Reconcile bank, vendors and customer ledgers." },
        { title: "Returns", desc: "File GST, TDS, PF and ESIC on schedule." },
        { title: "Year-End", desc: "Finalize books, audit support and ITR filing." },
      ]}
      pricing={[
        { plan: "Lean", price: "₹2,999", features: ["Per month", "Bookkeeping (≤50 txns)", "GST returns"] },
        { plan: "Scale", price: "₹6,999", recommended: true, features: ["Per month", "Bookkeeping (≤200 txns)", "GST + TDS + Payroll (≤5)"] },
        { plan: "Pro", price: "₹14,999", features: ["Per month", "Unlimited txns", "Payroll (≤25)", "MIS dashboards"] },
      ]}
      faqs={[
        { q: "Which software do you use?", a: "Zoho Books by default; we can work on Tally or QuickBooks on request." },
        { q: "Do you handle audit?", a: "Yes, we coordinate with statutory and tax auditors and prepare audit-ready books." },
        { q: "Can I switch from my CA?", a: "Absolutely — we handle the migration smoothly with minimal disruption." },
      ]}
    />
  ),
});
