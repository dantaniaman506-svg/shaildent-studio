import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { site, telLink, waLink } from "@/lib/site";
import { services } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book · ShailDent The Dental Studio" },
      { name: "description", content: "Book your appointment at ShailDent The Dental Studio, Rajkot. WhatsApp, call or use our online form — we reply within minutes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi ShailDent, I'd like to book an appointment.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Treatment:* ${form.service || "—"}%0A*Preferred Date:* ${form.date || "—"}%0A*Message:* ${form.message || "—"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <div className="mx-auto max-w-7xl px-5">
      <section className="pt-8 md:pt-12 pb-10 text-center">
        <Reveal><div className="inline-block"><SectionLabel>Get In Touch</SectionLabel></div></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground">
            Let's get you <span className="font-script text-accent">smiling.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reach us on WhatsApp, call directly, or send the form below — we typically reply within minutes during clinic hours.
          </p>
        </Reveal>
      </section>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Info card */}
        <Reveal className="md:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card space-y-5">
            <h2 className="font-display text-2xl font-semibold">Visit the studio</h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <span className="text-foreground">{site.address}</span>
              </div>
              <a href={telLink} className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <span className="text-foreground group-hover:text-accent">{site.phone}</span>
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
                <MessageCircle className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <span className="text-foreground group-hover:text-accent">WhatsApp us instantly</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <span className="text-foreground group-hover:text-accent">{site.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div className="text-foreground">
                  {site.hours.map((h) => (
                    <div key={h.d}><span className="text-muted-foreground">{h.d}:</span> {h.h}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3]">
              <iframe
                title="ShailDent location"
                src="https://www.google.com/maps?q=Heera+Panna+Complex+Mota+Mava+Rajkot&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08} className="md:col-span-3">
          <form
            id="appointment-form"
            onSubmit={onSubmit}
            className="scroll-mt-28 rounded-3xl border border-border bg-card p-7 md:p-8 shadow-card"
          >
            <h2 className="font-display text-3xl font-semibold">Book your appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill in your details and we'll confirm via WhatsApp.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Phone Number" required>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+91" />
              </Field>
              <Field label="Treatment">
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputCls}>
                  <option value="">Select a treatment</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General Consultation">General Consultation</option>
                </select>
              </Field>
              <Field label="Preferred Date">
                <input type="date" min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputCls} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message (optional)">
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} placeholder="Anything you'd like Dr. Shailaja to know" />
                </Field>
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90 transition">
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-foreground">
                <Check className="h-4 w-4 text-accent" />
                Opening WhatsApp — your message is ready to send.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.14em] font-semibold text-muted-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
