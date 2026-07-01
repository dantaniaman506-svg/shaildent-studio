import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      <section className="pt-8 md:pt-12 pb-12 text-center md:text-left">
        <Reveal>
          <SectionLabel>What We Offer</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
            Comprehensive dental care,{" "}
            <span className="font-script text-accent">crafted</span> for you.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            From routine hygiene to complete smile makeovers — every treatment at ShailDent
            is delivered with the same precision and unhurried care.
          </p>
        </Reveal>
      </section>

      <div className="grid gap-10 md:grid-cols-12">
        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-5 shadow-card">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
              Treatments
            </div>
            <ul className="mt-3 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
                  >
                    <s.icon className="h-3.5 w-3.5 text-accent shrink-0" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="md:col-span-9 space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.03}>
                <article
                  id={s.slug}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-card p-7 md:p-9"
                >
                  {/* Header row */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-soft text-primary shadow-card">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                        Treatment
                      </span>
                      <h2 className="mt-1 font-display text-3xl md:text-[2rem] font-semibold text-foreground leading-tight">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 h-px w-full bg-border" />

                  {/* Description */}
                  <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  {/* Benefits */}
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-7">
                    <Link
                      to="/contact"
                      hash="appointment-form"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      Book this treatment <ArrowRight className="h-4 w-4" />
                    </Link>
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
            <p className="mx-auto mt-3 max-w-xl opacity-90">
              Send us a quick message — Dr. Shailaja will guide you personally, free of charge.
            </p>
            <Link
              to="/contact"
              hash="appointment-form"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
