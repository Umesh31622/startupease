import { motion } from "motion/react";
import { Check, Sparkles, FileCheck2, ListChecks, IndianRupee } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { LeadForm } from "./LeadForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type ServicePageProps = {
  badge?: string;
  title: string;
  subtitle: string;
  price?: string;
  priceNote?: string;
  highlight?: string;
  benefits: { title: string; desc: string }[];
  eligibility?: string[];
  documents: string[];
  steps: { title: string; desc: string }[];
  pricing: { plan: string; price: string; features: string[]; recommended?: boolean }[];
  faqs: { q: string; a: string }[];
};

export function ServicePage(p: ServicePageProps) {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            {p.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-bold uppercase">
                <Sparkles className="h-3 w-3" /> {p.badge}
              </span>
            )}
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--navy)]">
              {p.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{p.subtitle}</p>
            {p.highlight && (
              <div className="mt-5 inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm font-semibold text-[var(--navy)]">
                <Check className="h-4 w-4 text-[var(--teal)]" /> {p.highlight}
              </div>
            )}
            {p.price && (
              <div className="mt-6 flex items-end gap-2">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <span className="text-4xl font-extrabold brand-gradient-text">{p.price}</span>
                {p.priceNote && <span className="text-xs text-muted-foreground mb-2">{p.priceNote}</span>}
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead" className="rounded-xl bg-[var(--navy)] text-white px-6 py-3 font-semibold hover:bg-[var(--teal)] hover:text-[var(--navy)] transition shadow-[var(--shadow-glass)]">
                Get Started
              </a>
              <a href="#process" className="rounded-xl border border-[var(--navy)]/20 px-6 py-3 font-semibold text-[var(--navy)] hover:bg-white transition">
                How it works
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6, delay: .15 }}
            className="glass rounded-3xl p-6 md:p-8 max-w-md mx-auto lg:ml-auto w-full">
            <h3 className="text-lg font-bold text-[var(--navy)]">Talk to a startup expert</h3>
            <p className="text-sm text-muted-foreground mb-4">Get a free 15-min consultation.</p>
            <LeadForm defaultService={p.title} />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader eyebrow="Benefits" title={`Why choose StartupEase for ${p.title}`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .05 }}
              className="card-3d rounded-2xl p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] mb-4">
                <Check className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-[var(--navy)]">{b.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Eligibility + Documents */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-6">
          {p.eligibility && (
            <div className="card-3d rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <ListChecks className="h-5 w-5 text-[var(--teal)]" />
                <h3 className="text-xl font-bold text-[var(--navy)]">Eligibility</h3>
              </div>
              <ul className="space-y-2">
                {p.eligibility.map((e) => (
                  <li key={e} className="flex gap-2 text-sm text-[var(--navy)]/80">
                    <Check className="h-4 w-4 text-[var(--teal)] mt-0.5 shrink-0" />{e}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="card-3d rounded-2xl p-7">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck2 className="h-5 w-5 text-[var(--teal)]" />
              <h3 className="text-xl font-bold text-[var(--navy)]">Documents Required</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {p.documents.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-[var(--navy)]/80">
                  <Check className="h-4 w-4 text-[var(--teal)] mt-0.5 shrink-0" />{d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="bg-gradient-to-b from-white to-[var(--teal)]/5">
        <SectionHeader eyebrow="Process" title="Step-by-step" desc="Transparent, online and fast." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07 }}
              className="relative card-3d rounded-2xl p-6">
              <span className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-xl bg-[var(--navy)] text-white text-sm font-bold shadow-[var(--shadow-glass)]">
                {i + 1}
              </span>
              <h4 className="mt-2 font-bold text-[var(--navy)]">{s.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader eyebrow="Pricing" title="Simple, transparent plans" />
        <div className="grid md:grid-cols-3 gap-6">
          {p.pricing.map((pl) => (
            <div key={pl.plan}
              className={`rounded-2xl p-7 border ${pl.recommended ? "bg-[var(--navy)] text-white border-transparent shadow-[var(--shadow-elegant)]" : "card-3d"}`}>
              {pl.recommended && (
                <span className="inline-flex items-center rounded-full bg-[var(--teal)] text-[var(--navy)] px-2 py-0.5 text-[10px] font-bold uppercase mb-3">
                  Recommended
                </span>
              )}
              <h4 className={`text-lg font-bold ${pl.recommended ? "text-white" : "text-[var(--navy)]"}`}>{pl.plan}</h4>
              <p className={`mt-2 text-3xl font-extrabold flex items-center ${pl.recommended ? "text-[var(--teal)]" : "text-[var(--navy)]"}`}>
                {pl.price.startsWith("₹") ? <IndianRupee className="h-6 w-6" /> : null}
                {pl.price.replace("₹", "")}
              </p>
              <ul className={`mt-5 space-y-2 text-sm ${pl.recommended ? "text-white/85" : "text-[var(--navy)]/80"}`}>
                {pl.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-[var(--teal)] mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="#lead" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition
                ${pl.recommended ? "bg-[var(--teal)] text-[var(--navy)] hover:bg-white" : "bg-[var(--navy)] text-white hover:bg-[var(--teal)] hover:text-[var(--navy)]"}`}>
                Choose {pl.plan}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!pt-0">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {p.faqs.map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="card-3d rounded-2xl px-5 border-0">
                <AccordionTrigger className="text-left font-semibold text-[var(--navy)] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Lead */}
      <Section id="lead" className="!pt-0">
        <div className="rounded-3xl p-8 md:p-12 bg-[var(--navy)] text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--teal)]/30 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-10 relative">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold">Ready to get started?</h3>
              <p className="mt-3 text-white/80 max-w-md">Share a few details and our expert will call you back within an hour.</p>
            </div>
            <div className="glass rounded-2xl p-6 text-foreground">
              <LeadForm defaultService={p.title} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
