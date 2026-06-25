import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[var(--navy)] shadow-[var(--shadow-glass)]">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#16c7b7" />
              <stop offset="100%" stopColor="#7be3d8" />
            </linearGradient>
          </defs>
          {/* paper plane */}
          <path d="M3 15.5L29 4l-7 25-6-11-3 8-3.5-7L3 15.5z" fill="url(#lg)" />
          {/* growth arrow */}
          <path d="M14 18l4-4 3 3 5-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".85" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-[var(--navy)]">
            Startup<span className="text-[var(--teal)]">Ease</span>
          </span>
          <span className="text-[10px] font-medium text-muted-foreground hidden sm:block">
            Registration to Funding
          </span>
        </span>
      )}
    </Link>
  );
}
