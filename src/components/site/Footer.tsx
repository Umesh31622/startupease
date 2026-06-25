import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, NAV_LINKS, SERVICE_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--navy)] text-white/90">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--teal)]/60 to-transparent" />
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="bg-white rounded-xl p-2 inline-block">
              <Logo />
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              From Registration to Funding. We help founders launch, comply, raise and scale.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-[var(--teal)] hover:text-[var(--navy)] transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[var(--teal)] transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {SERVICE_LINKS.slice(0, 7).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[var(--teal)] transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-[var(--teal)]"><Phone className="h-4 w-4" />{CONTACT.phone}</a></li>
              <li><a href={CONTACT.emailHref} className="flex items-center gap-2 hover:text-[var(--teal)]"><Mail className="h-4 w-4" />{CONTACT.email}</a></li>
              <li><span className="flex items-center gap-2"><Globe className="h-4 w-4" />{CONTACT.website}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} StartupEase. All rights reserved.</p>
          <p>From Registration to Funding.</p>
        </div>
      </div>
    </footer>
  );
}
