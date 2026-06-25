import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { PRICING_PLANS, FAQS } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Plans for Founders | StartupEase" },
      { name: "description", content: "Flat, transparent pricing for company registration, compliance and fundraising support. Plans from ₹899." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-bold uppercase">
            <Sparkles className="h-3 w-3" /> Simple, transparent pricing
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
            Plans that grow <span className="brand-gradient-text">with your startup</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first GST filing to your Series A — one partner, fair pricing.
          </p>
        </div>
      </section>

      <Section className="!pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07 }}
              className={`rounded-3xl p-7 flex flex-col ${
                p.highlight
                  ? "bg-[var(--navy)] text-white shadow-[var(--shadow-elegant)] scale-[1.02]"
                  : "card-3d"
              }`}>
              <span className={`inline-flex items-center w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase
                ${p.highlight ? "bg-[var(--teal)] text-[var(--navy)]" : "bg-[var(--teal)]/10 text-[var(--teal)]"}`}>
                {p.tag}
              </span>
              <h3 className={`mt-4 text-2xl font-extrabold ${p.highlight ? "text-white" : "text-[var(--navy)]"}`}>{p.name}</h3>
              <p className={`mt-2 text-4xl font-extrabold ${p.highlight ? "text-[var(--teal)]" : "text-[var(--navy)]"}`}>{p.price}</p>
              <ul className={`mt-5 space-y-2 text-sm flex-1 ${p.highlight ? "text-white/85" : "text-[var(--navy)]/80"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-[var(--teal)] mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-6 inline-flex justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition
                ${p.highlight ? "bg-[var(--teal)] text-[var(--navy)] hover:bg-white" : "bg-[var(--navy)] text-white hover:bg-[var(--teal)] hover:text-[var(--navy)]"}`}>
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Compare" title="Add-ons & monthly retainers" />
        <div className="overflow-x-auto card-3d rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-[var(--navy)] text-white">
              <tr>
                {["Service", "Lean", "Scale", "Pro"].map((h) => (
                  <th key={h} className="text-left p-4 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Monthly Accounting", "₹2,999", "₹6,999", "₹14,999"],
                ["GST Returns", "Included", "Included", "Included"],
                ["TDS Filing", "—", "Included", "Included"],
                ["Payroll", "—", "≤5 staff", "≤25 staff"],
                ["ROC Compliance", "₹4,999/yr", "Included", "Included"],
                ["Investor Updates", "—", "—", "Included"],
              ].map((row) => (
                <tr key={row[0]} className="bg-white">
                  {row.map((c, i) => (
                    <td key={i} className={`p-4 ${i === 0 ? "font-semibold text-[var(--navy)]" : "text-muted-foreground"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeader eyebrow="FAQ" title="Pricing questions" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.slice(0, 8).map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="card-3d rounded-2xl px-5 border-0">
                <AccordionTrigger className="text-left font-semibold text-[var(--navy)] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}
