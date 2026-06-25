import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function EnquiryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("se_enquiry_shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("se_enquiry_shown", "1");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 sm:p-6 animate-in slide-in-from-bottom-4">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-black/5 hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-4 pr-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--teal)]">Free Consultation</p>
          <h3 className="mt-1 text-xl font-extrabold text-[var(--navy)]">Get an instant quote on WhatsApp</h3>
          <p className="mt-1 text-sm text-muted-foreground">Pick a service & share your details — our expert replies on WhatsApp within minutes.</p>
        </div>
        <LeadForm />
      </div>
    </div>
  );
}
