import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICE_LINKS, CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 transition-all",
          scrolled ? "glass" : "bg-white/60 backdrop-blur border border-white/40"
        )}>
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) =>
              l.label === "Services" ? (
                <div key={l.label} className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--teal)] transition">
                    Services <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-[280px]">
                      <div className="glass rounded-2xl p-2 grid">
                        {SERVICE_LINKS.map((s) => (
                          <Link key={s.to} to={s.to}
                            className="px-3 py-2 rounded-lg text-sm text-[var(--navy)] hover:bg-[var(--teal)]/10 hover:text-[var(--teal)] transition">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.to} to={l.to}
                  activeProps={{ className: "text-[var(--teal)]" }}
                  className="px-3 py-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--teal)] transition">
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a href={CONTACT.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--teal)]">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-[#25D366] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-glass)]">
              Get Started
            </a>
            <button
              className="lg:hidden grid place-items-center h-10 w-10 rounded-xl bg-white/70 border border-white/60"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 animate-in fade-in slide-in-from-top-2">
            <div className="grid">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--navy)] hover:bg-[var(--teal)]/10">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="my-2 border-t border-white/50" />
            <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Services</p>
            <div className="grid">
              {SERVICE_LINKS.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-[var(--navy)] hover:bg-[var(--teal)]/10">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
