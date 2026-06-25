import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { TrendingUp, FileText, Calculator, Users, Landmark, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { FUNDING_STAGES } from "@/lib/site-data";

const SERVICES = [
  { icon: FileText, title: "Pitch Deck", desc: "Investor-grade decks with story, traction and ask." },
  { icon: CheckCircle2, title: "Investor Readiness", desc: "Data room, KPIs, projections and unit economics." },
  { icon: Calculator, title: "Startup Valuation", desc: "DCF, comparables and venture method valuations." },
  { icon: Users, title: "Angel Investors", desc: "Warm intros to relevant angels and syndicates." },
  { icon: Landmark, title: "Venture Capital Connect", desc: "Curated VC introductions for Series A and beyond." },
  { icon: Search, title: "Due Diligence", desc: "Financial, legal and secretarial diligence support." },
];

export const Route = createFileRoute("/fundraising")({
  head: () => ({
    meta: [
      { title: "Startup Fundraising — Angel & VC Connect | StartupEase" },
      { name: "description", content: "Pitch decks, valuation, investor readiness and warm intros to angels and VCs. ₹420 Cr+ funding facilitated." },
      { property: "og:title", content: "Startup Fundraising — Angel & VC Connect" },
      { property: "og:url", content: "/fundraising" },
    ],
    links: [{ rel: "canonical", href: "/fundraising" }],
  }),
  component: Fundraising,
});

function Fundraising() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-bold uppercase">
              Funding & Growth
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--navy)]">
              Raise capital with <span className="brand-gradient-text">conviction</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              We've helped startups raise <strong className="text-[var(--navy)]">₹420 Cr+</strong> from angels and VCs.
              From pitch deck to wire-in, we walk every step with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead" className="rounded-xl bg-[var(--navy)] text-white px-6 py-3.5 font-semibold hover:bg-[var(--teal)] hover:text-[var(--navy)] transition">
                Get Investor-Ready
              </a>
              <a href="https://wa.me/917347574707?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20a%20StartupEase%20expert%20about%20fundraising." target="_blank" rel="noreferrer" className="rounded-xl border border-[var(--navy)]/15 bg-white/70 px-6 py-3.5 font-semibold text-[var(--navy)]">
                Talk to Expert
              </a>

            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15 }}
            className="glass rounded-3xl p-6">
            <p className="text-xs uppercase font-bold text-[var(--teal)]">Funding Pipeline</p>
            <p className="text-3xl font-extrabold text-[var(--navy)]">200+ Investors</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[["Angels", "120+"], ["VCs", "80+"], ["Syndicates", "40+"], ["Family Offices", "25+"]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/70 p-3">
                  <p className="text-xs text-muted-foreground">{k}</p>
                  <p className="text-xl font-extrabold text-[var(--navy)]">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stages */}
      <Section>
        <SectionHeader eyebrow="Funding Stages" title="From Pre-Seed to Growth" desc="A roadmap of what to expect at every round." />
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-[var(--teal)] via-[var(--navy)] to-[var(--teal)]" />
          <div className="grid md:grid-cols-5 gap-5">
            {FUNDING_STAGES.map((s, i) => (
              <motion.div key={s.stage}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
                className="card-3d rounded-2xl p-5 relative">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--navy)] text-white font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-[var(--navy)]">{s.stage}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--teal)]">{s.range}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gradient-to-b from-white to-[var(--teal)]/5">
        <SectionHeader eyebrow="Services" title="Full-stack fundraising support" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }}
              className="card-3d rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-[var(--navy)]">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader eyebrow="Process" title="How we get you funded" />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { t: "Discovery", d: "We assess stage, traction and capital need." },
            { t: "Storytelling", d: "Sharpen narrative, deck and financials." },
            { t: "Outreach", d: "Warm intros to relevant investors in our network." },
            { t: "Close", d: "Termsheet, diligence and closing support." },
          ].map((p, i) => (
            <div key={p.t} className="card-3d rounded-2xl p-6 relative">
              <span className="text-5xl font-extrabold text-[var(--teal)]/20">{i + 1}</span>
              <h4 className="mt-2 font-bold text-[var(--navy)]">{p.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Lead */}
      <Section id="lead" className="!pt-0">
        <div className="rounded-3xl p-8 md:p-12 bg-[var(--navy)] text-white relative overflow-hidden grid lg:grid-cols-2 gap-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--teal)]/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold">Pitch your startup to us</h2>
            <p className="mt-3 text-white/80 max-w-md">Share your stage and ask. If there's a fit, we'll get you in front of the right investors fast.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
              <ArrowRight className="h-4 w-4 text-[var(--teal)]" /> Avg. 14 warm intros / startup
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-white/80">
              <ArrowRight className="h-4 w-4 text-[var(--teal)]" /> 8-week median time-to-term-sheet
            </div>
          </div>
          <div className="glass rounded-2xl p-6 text-foreground">
            <LeadForm defaultService="Fundraising & Growth" />
          </div>
        </div>
      </Section>
    </>
  );
}
