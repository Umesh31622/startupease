import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Sparkles, Landmark, GraduationCap, HeartHandshake } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/startup-network")({
  head: () => ({
    meta: [
      { title: "Startup Network — Angels, VCs & Mentors | StartupEase" },
      { name: "description", content: "Access our network of 200+ angels, VCs and mentors. Get warm introductions to the right people at the right stage." },
      { property: "og:url", content: "/startup-network" },
    ],
    links: [{ rel: "canonical", href: "/startup-network" }],
  }),
  component: Network,
});

const PILLARS = [
  { icon: Sparkles, title: "Angel Investors", desc: "120+ active angels writing ₹5L–₹2 Cr cheques." },
  { icon: Landmark, title: "Venture Capital", desc: "80+ VC firms across Pre-Seed to Series B." },
  { icon: GraduationCap, title: "Startup Mentorship", desc: "Operators and founders who've been there." },
  { icon: HeartHandshake, title: "Business Consulting", desc: "GTM, ops, pricing, hiring — all under one roof." },
  { icon: Users, title: "Founder Community", desc: "Curated WhatsApp and IRL events with peer founders." },
];

function Network() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-bold uppercase">
              The Network
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
              India's most useful <span className="brand-gradient-text">startup network</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Angels, VCs, operators and mentors — already vetted, only one warm intro away.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .05 }}
              className="card-3d rounded-2xl p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--navy)]">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl p-8 md:p-12 bg-[var(--navy)] text-white grid lg:grid-cols-2 gap-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--teal)]/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold">Apply to our network</h2>
            <p className="mt-3 text-white/80 max-w-md">Tell us about your startup. Selected founders get access to mentors and warm intros within 7 days.</p>
            <Link to="/fundraising" className="mt-6 inline-flex items-center rounded-xl bg-[var(--teal)] text-[var(--navy)] px-5 py-2.5 font-semibold">
              See funding services
            </Link>
          </div>
          <div className="glass rounded-2xl p-6 text-foreground">
            <LeadForm defaultService="Startup Network" />
          </div>
        </div>
      </Section>
    </>
  );
}
