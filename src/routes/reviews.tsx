import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { reviews } from "@/lib/data";
import { site } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      <section className="pt-8 md:pt-12 pb-12 text-center">
        <Reveal><div className="inline-block"><SectionLabel>Patient Reviews</SectionLabel></div></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground">
            Loved by <span className="font-script text-accent">Rajkot</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-6 inline-flex items-center gap-4 rounded-full border border-border bg-card px-5 py-3 shadow-card">
            <span className="font-display text-3xl font-semibold text-foreground">{site.rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Google reviews</span>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <a href={site.googleReviews} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90">
            Write a Google Review <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 italic text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="font-semibold text-foreground">{r.name}</div>
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{r.source}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="my-20 rounded-[2rem] gradient-brand px-6 py-12 md:py-14 text-center text-primary-foreground">
          <p className="font-display text-2xl md:text-3xl">
            Trusted by <span className="font-semibold">2,000+</span> happy patients across Rajkot.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
