import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <a
        href={CONTACT.whatsapp}
        target="_blank" rel="noreferrer"
        aria-label="WhatsApp"
        className="group grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,.55)] hover:scale-110 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-[var(--teal)] text-[var(--navy)] shadow-[var(--shadow-teal)] hover:scale-110 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
