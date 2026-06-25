import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact StartupEase — Talk to a Startup Expert" },
      { name: "description", content: "Get in touch with StartupEase. Call +91 7347574707, WhatsApp or email info@startupease.in. Free 15-min consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="hero-bg pt-28">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-[var(--navy)]">
            Let's <span className="brand-gradient-text">talk</span>
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Free 15-minute consultation. Most founders hear back within an hour.
          </p>
        </div>
      </section>

      <Section className="!pt-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { Icon: Phone, title: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
              { Icon: MessageCircle, title: "WhatsApp", value: "Chat with an expert", href: CONTACT.whatsapp },
              { Icon: Mail, title: "Email", value: CONTACT.email, href: CONTACT.emailHref },
              { Icon: Globe, title: "Website", value: CONTACT.website, href: "#" },
              { Icon: MapPin, title: "Address", value: "India — serving founders pan-India", href: "#" },
            ].map((c) => (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="card-3d rounded-2xl p-5 flex items-start gap-4 hover:border-[var(--teal)]/40 transition block">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--teal)]/10 text-[var(--teal)]">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-muted-foreground">{c.title}</p>
                  <p className="font-bold text-[var(--navy)]">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 glass rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[var(--navy)]">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We'll get back within 1 business hour.</p>
            <div className="mt-6"><LeadForm /></div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="card-3d rounded-3xl overflow-hidden">
          <div className="aspect-[16/8] w-full bg-gradient-to-br from-[var(--navy)]/5 to-[var(--teal)]/10 grid place-items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "linear-gradient(#0a245820 1px, transparent 1px), linear-gradient(90deg, #0a245820 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="relative text-center">
              <MapPin className="h-10 w-10 text-[var(--teal)] mx-auto" />
              <p className="mt-3 font-bold text-[var(--navy)]">Serving startups across India</p>
              <p className="text-sm text-muted-foreground">100% online onboarding · WhatsApp first</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
