import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children, className, id,
}: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, desc, center = true,
}: { eyebrow?: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl mb-12", center && "mx-auto text-center")}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 text-xs font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--navy)]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base md:text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}
