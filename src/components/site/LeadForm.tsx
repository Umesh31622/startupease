import { useState } from "react";
import { toast } from "sonner";
import { SERVICE_LINKS, waLink } from "@/lib/site-data";

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const service = String(fd.get("service") || "");
    const message = String(fd.get("message") || "");

    const text =
      `*New Enquiry — StartupEase*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Service:* ${service || "Not selected"}\n` +
      `*Message:* ${message || "-"}`;

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    toast.success("Opening WhatsApp… please tap Send to share your enquiry.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input required name="name" placeholder="Your name"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
        <input required type="tel" name="phone" placeholder="Phone"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
      </div>
      <input required type="email" name="email" placeholder="Email"
        className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
      <select name="service" defaultValue={defaultService ?? ""}
        className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]">
        <option value="">Select a service</option>
        {SERVICE_LINKS.map((s) => <option key={s.to} value={s.label}>{s.label}</option>)}
      </select>
      <textarea name="message" rows={3} placeholder="Tell us briefly about your need"
        className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]" />
      <button disabled={submitting}
        className="rounded-xl bg-[#25D366] text-white font-semibold py-3 hover:opacity-90 transition disabled:opacity-60">
        {submitting ? "Opening WhatsApp…" : "Send on WhatsApp"}
      </button>
      <p className="text-[11px] text-muted-foreground">
        By submitting you agree to be contacted by StartupEase on WhatsApp at +91 7347574707.
      </p>
    </form>
  );
}
