import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Treatments & Services · ShailDent The Dental Studio" },
      { name: "description", content: "Smile design, implants, veneers, aligners, whitening, root canal, kids' dentistry & more — all delivered with painless, aesthetic-first care." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      <section className="pt-8 md:pt-12 pb-12 text-center md:text-left">
        <Reveal><SectionLabel>What We Offer</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
            Comprehensive dental care, <span className="font-script text-accent">crafted</span> for you.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            From routine hygiene to complete smile makeovers — every treatment at ShailDent is delivered with the same precision and unhurried care.
          </p>
        </Reveal>
      </section>

      <div className="grid gap-10 md:grid-cols-12">
        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-5 shadow-card">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Treatments</div>
            <ul className="mt-3 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="block rounded-full px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="md:col-span-9 space-y-14">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug}>
                <article id={s.slug} className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                      <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-soft text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Treatment</span>
                      </div>
                      <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">{s.title}</h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                              <Check className="h-3 w-3" />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" hash="appointment-form" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                        Book this treatment <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <section className="my-20 md:my-28">
        <Reveal>
          <div className="rounded-[2rem] gradient-brand px-6 py-12 md:py-16 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl opacity-90">Send us a quick message — Dr. Shailaja will guide you personally, free of charge.</p>
            <Link to="/contact" hash="appointment-form" className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
