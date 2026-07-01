import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { gallery, type GalleryItem } from "@/lib/data";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const categories = ["All", "Reception", "Treatment Rooms", "Moments", "Exterior"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-5">
      <section className="pt-8 md:pt-12 pb-10 text-center">
        <Reveal><div className="inline-block"><SectionLabel>Inside The Studio</SectionLabel></div></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground">
            A studio designed to <span className="font-script text-accent">calm</span> you.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Curated interiors, soft lighting and a thoughtful flow — every corner of ShailDent is built to put you at ease.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "border border-border bg-card text-foreground/70 hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {items.map((g, i) => (
          <Reveal key={g.src} delay={i * 0.04}>
            <button onClick={() => setActive(g)} className="group relative w-full overflow-hidden rounded-2xl">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square w-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white" onClick={() => setActive(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
