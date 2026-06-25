import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Rocket, ShieldCheck, TrendingUp, Trophy,
  Star, ChevronRight,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/site/Section";
import { SERVICES, WHY_US, JOURNEY, TESTIMONIALS, FAQS } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartupEase — Your Growth Partner at Every Step" },
      { name: "description", content: "From company registration to fundraising. StartupEase is the all-in-one platform for Indian founders. GST @ ₹899, Pvt Ltd @ ₹7,999." },
      { property: "og:title", content: "StartupEase — Your Growth Partner at Every Step" },
      { property: "og:description", content: "Launch • Comply • Raise • Scale." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg pt-24 md:pt-28">
        <div className="container mx-auto px-5 py-12 md:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--navy)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)] animate-pulse" />
              The Founders' Choice in India
            </span>

            <h1 className="mt-6 text-[40px] sm:text-5xl lg:text-[64px] font-bold text-[var(--navy)] leading-[1.05]">
              From Idea to IPO: Your Startup{" "}
              <span className="serif-accent brand-gradient-text">Partner.</span>
            </h1>

            <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
              We handle the complexity of registration, compliance, and funding — so you can focus on building the future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <a href="https://wa.me/917347574707?text=Hi%20StartupEase%2C%20I%20want%20to%20get%20started." target="_blank" rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-4 font-bold hover:opacity-90 transition shadow-lg shadow-green-200">
                Chat on WhatsApp <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-[var(--navy)] hover:bg-slate-50 transition">
                View Services
              </Link>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--teal)] animate-pulse" />
              <span className="text-xs font-medium text-slate-600">
                Packages from <span className="text-[var(--navy)] font-bold">₹899/-</span>
              </span>
              <Link to="/pricing" className="ml-2 text-xs font-semibold text-[var(--teal)] hover:underline">
                See pricing →
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}
            className="relative">
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Stats strip — navy rounded card */}
        <div className="container mx-auto px-5 pb-12">
          <div className="flex justify-between items-center bg-[var(--navy)] rounded-2xl px-6 py-5 text-white shadow-[var(--shadow-elegant)]">
            {[
              { k: "2,500+", v: "Founders" },
              { k: "₹420Cr+", v: "Raised" },
              { k: "200+", v: "Investors" },
            ].map((s, i, arr) => (
              <div key={s.v} className="contents">
                <div className="text-center flex-1">
                  <div className="text-xl md:text-2xl font-bold">{s.k}</div>
                  <div className="text-[10px] opacity-70 uppercase tracking-widest mt-0.5">{s.v}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-9 bg-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY US */}
      <Section>
        <SectionHeader eyebrow="Why StartupEase" title="Built for founders, by operators" desc="Six reasons why thousands of Indian startups trust us." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((w, i) => (
            <motion.div key={w.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .05 }}
              className="card-3d rounded-2xl p-6 group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white shadow-[var(--shadow-teal)] group-hover:scale-110 transition">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-bold text-[var(--navy)] text-lg">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-gradient-to-b from-white to-[var(--teal)]/5">
        <SectionHeader eyebrow="Services" title="Everything you need to build & scale" desc="From day-zero registration to Series A diligence." />
        {/* Mobile: scroll, Desktop: grid */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory">
            {SERVICES.map((s) => <ServiceCard key={s.title} s={s} className="w-[280px] shrink-0 snap-start" />)}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s) => <ServiceCard key={s.title} s={s} />)}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section>
        <SectionHeader eyebrow="The Journey" title="Launch → Comply → Raise → Scale" desc="A clear 4-step framework — we walk every step with you." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {JOURNEY.map((j, i) => (
            <motion.div key={j.phase}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .1 }}
              className="relative card-3d rounded-2xl p-6">
              <div className={`absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${j.color} text-white font-bold shadow-[var(--shadow-teal)]`}>
                {i + 1}
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-[var(--navy)]">{j.phase}</h3>
              <ul className="mt-3 space-y-1.5">
                {j.items.map((it) => (
                  <li key={it} className="text-sm text-[var(--navy)]/80 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <Section className="!py-12">
        <div className="rounded-3xl p-8 md:p-12 bg-[var(--navy)] text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--teal)]/30 blur-3xl" />
          {[
            { k: "2,500+", v: "Startups served", Icon: Rocket },
            { k: "₹420Cr+", v: "Funding facilitated", Icon: TrendingUp },
            { k: "98%", v: "Compliance accuracy", Icon: ShieldCheck },
            { k: "200+", v: "Investors in network", Icon: Trophy },
          ].map((s) => (
            <div key={s.v} className="relative">
              <s.Icon className="h-6 w-6 text-[var(--teal)]" />
              <p className="mt-3 text-3xl md:text-4xl font-extrabold">{s.k}</p>
              <p className="text-sm text-white/70">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Testimonials" title="Loved by India's founders" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .05 }}
              className="card-3d rounded-2xl p-6">
              <div className="flex gap-0.5 text-[var(--teal)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-[15px] text-[var(--navy)]/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white font-bold">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--navy)]">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-to-b from-white to-[var(--teal)]/5">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="card-3d rounded-2xl px-5 border-0">
                <AccordionTrigger className="text-left font-semibold text-[var(--navy)] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-[var(--navy)] via-[var(--navy)] to-[var(--teal)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-extrabold">Ready to launch your startup?</h3>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">Join 2,500+ founders building India's next generation of companies with StartupEase.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/917347574707?text=Hi%20StartupEase%2C%20I%20want%20to%20get%20started." target="_blank" rel="noreferrer" className="rounded-xl bg-[#25D366] text-white px-6 py-3.5 font-bold hover:opacity-90 transition">
                Get Started on WhatsApp
              </a>

              <Link to="/pricing" className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ServiceCard({ s, className = "" }: { s: typeof SERVICES[number]; className?: string }) {
  return (
    <Link to={s.slug as any}
      className={`card-3d rounded-2xl p-6 flex flex-col gap-3 group ${className}`}>
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-[var(--navy)] transition">
        <s.icon className="h-5 w-5" />
      </div>
      <h3 className="font-bold text-[var(--navy)]">{s.title}</h3>
      <p className="text-sm text-muted-foreground flex-1">{s.short}</p>
      {s.price && (
        <p className="text-sm font-bold text-[var(--navy)]">
          Starting at <span className="brand-gradient-text">{s.price}</span>
          {s.priceNote && <span className="text-xs font-medium text-muted-foreground ml-1">{s.priceNote}</span>}
        </p>
      )}
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--teal)]">
        Learn more <ChevronRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square max-w-[520px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--teal)]/40 to-[var(--navy)]/30 blur-3xl" />
      {/* Glass dashboard card */}
      <div className="relative glass rounded-3xl p-6 shadow-[var(--shadow-elegant)] animate-float">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Funding Pipeline</p>
            <p className="text-2xl font-extrabold text-[var(--navy)]">₹4.2 Cr</p>
          </div>
          <span className="rounded-full bg-[var(--teal)]/15 text-[var(--teal)] px-2 py-0.5 text-xs font-bold">+38%</span>
        </div>
        {/* Chart */}
        <svg viewBox="0 0 300 120" className="mt-4 w-full">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16c7b7" stopOpacity=".5" />
              <stop offset="100%" stopColor="#16c7b7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,90 C40,80 60,70 90,60 C120,52 150,55 180,40 C210,28 240,30 300,10 L300,120 L0,120 Z" fill="url(#g1)" />
          <path d="M0,90 C40,80 60,70 90,60 C120,52 150,55 180,40 C210,28 240,30 300,10" stroke="#0a2458" strokeWidth="2.5" fill="none" />
          {[[0,90],[90,60],[180,40],[300,10]].map(([x,y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#16c7b7" stroke="#fff" strokeWidth="2" />
          ))}
        </svg>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[["Pre-Seed","✓"],["Seed","✓"],["Series A","→"]].map(([s,m]) => (
            <div key={s} className="rounded-xl bg-white/70 backdrop-blur px-2 py-2">
              <p className="text-[10px] text-muted-foreground">{s}</p>
              <p className="text-sm font-bold text-[var(--navy)]">{m}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div initial={{ y: 10 }} animate={{ y: -10 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
        className="absolute -top-2 -right-2 sm:-right-6 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-elegant)]">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-[var(--teal)]" />
          <div>
            <p className="text-xs text-muted-foreground">DPIIT Recognized</p>
            <p className="text-sm font-bold text-[var(--navy)]">Startup India ✓</p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ y: -10 }} animate={{ y: 10 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5 }}
        className="absolute -bottom-2 -left-2 sm:-left-6 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-elegant)]">
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Live</p>
        <p className="text-sm font-bold text-[var(--navy)]">GSTIN issued in 22 hrs</p>
      </motion.div>
    </div>
  );
}
