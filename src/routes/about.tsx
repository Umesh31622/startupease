import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About StartupEase — Built for Indian Founders" },
      { name: "description", content: "We're a team of CAs, CSs, lawyers and operators helping India's next generation of startups go from registration to funding." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-bold uppercase">About us</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
              Built by founders, <span className="brand-gradient-text">for founders</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
              StartupEase is the all-in-one growth partner for Indian startups. We combine the precision of chartered accountants and company secretaries with the speed and empathy of operators who have built and scaled companies themselves.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To make it 10x easier for any Indian founder to start, comply, raise and scale a company." },
            { icon: Eye, title: "Our Vision", desc: "Be the most trusted growth partner for the next 100,000 Indian startups." },
            { icon: Heart, title: "Our Values", desc: "Transparency, speed, empathy and a bias for founder outcomes — always." },
            { icon: Award, title: "Our Promise", desc: "No hidden fees, no jargon, no missed deadlines. One dedicated team for your journey." },
          ].map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07 }}
              className="card-3d rounded-2xl p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--teal)] to-[var(--navy)] text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--navy)]">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white to-[var(--teal)]/5">
        <SectionHeader eyebrow="By the numbers" title="A track record founders trust" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["2,500+", "Startups served"],
            ["₹420 Cr+", "Funding facilitated"],
            ["200+", "Investors in network"],
            ["98%", "Compliance accuracy"],
          ].map(([k, v]) => (
            <div key={v} className="card-3d rounded-2xl p-7 text-center">
              <p className="text-4xl font-extrabold brand-gradient-text">{k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-3xl p-10 md:p-14 text-center bg-[var(--navy)] text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--teal)]/30 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-extrabold">Let's build something great together</h3>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">Whether you're just starting up or raising your Series A, we're here for the long run.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-xl bg-[var(--teal)] text-[var(--navy)] px-6 py-3 font-bold hover:bg-white transition">
              Get in touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
