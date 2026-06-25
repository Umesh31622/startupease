import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Registration, Compliance & Fundraising | StartupEase" },
      { name: "description", content: "All services for Indian founders — GST, company registration, trademark, compliance, accounting, fundraising and more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
            Everything you need, <span className="brand-gradient-text">in one place</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From registration to funding — pick a service to learn more.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="All Services" title="Pick the service you need" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .04 }}>
              <Link to={s.slug as any} className="card-3d rounded-2xl p-6 flex flex-col gap-3 group h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] group-hover:bg-[var(--teal)] group-hover:text-[var(--navy)] transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-[var(--navy)] text-lg">{s.title}</h3>
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
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
