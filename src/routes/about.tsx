import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, Sparkles, ShieldCheck, Leaf, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · ShailDent The Dental Studio" },
      { name: "description", content: "The story behind ShailDent — founded by Dr. Shailaja to bring world-class aesthetic dentistry to Rajkot in a calm, luxurious setting." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartHandshake, title: "Empathy First", body: "Treatments begin with listening — never with selling." },
  { icon: Sparkles, title: "Aesthetic Precision", body: "Cosmetic-grade finish, even on routine work." },
  { icon: ShieldCheck, title: "Uncompromising Safety", body: "Hospital-grade sterilisation on every chair, every visit." },
  { icon: Leaf, title: "Gentle by Default", body: "Modern anaesthesia and pacing that respects your comfort." },
];

const whyUs = [
  { title: "Cosmetic-led dentistry", body: "Every restoration is shaped, shaded and polished to look indistinguishable from natural enamel.", img: "/images/clinic-3.jpg" },
  { title: "A space that calms anxiety", body: "Soft lighting, sage seating and a curated playlist — designed to undo years of dental fear in minutes.", img: "/images/consult-room.jpg" },
  { title: "Modern, guided workflows", body: "Digital scans, computer-guided implants and rotary endodontics — faster, more precise, less invasive.", img: "/images/dental-chair.jpg" },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      {/* Header */}
      <section className="pt-8 md:pt-12 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal><SectionLabel>Our Story</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-semibold text-foreground">
              Dentistry, <span className="font-script text-accent">reimagined</span> for Rajkot.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>ShailDent The Dental Studio was founded by Dr. Shailaja with a clear mission — to bring world-class aesthetic dentistry to Rajkot, delivered in a space that feels nothing like a traditional clinic.</p>
              <p>Every detail, from the curved ceilings and sculpted wall art to the soft sage seating, was chosen to undo dental anxiety the moment you step in. Behind the calm exterior is a fully digital, cosmetic-led practice using guided implants, digital smile design and modern endodontics.</p>
              <p>The result is a studio where routine cleanings and complete smile makeovers are delivered with the same standard — meticulous, unhurried and deeply personal.</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <img src="/images/reception.jpg" alt="ShailDent reception" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover ring-1 ring-border shadow-soft" />
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="grid gap-5 md:grid-cols-2 py-10">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-card">
            <div className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">Mission</div>
            <p className="mt-4 font-display text-2xl text-foreground leading-snug">
              To deliver aesthetic, painless dentistry that treats every patient like family — without compromise on quality or comfort.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-card">
            <div className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">Vision</div>
            <p className="mt-4 font-display text-2xl text-foreground leading-snug">
              To become Gujarat's most trusted destination for smile design — known for artistry, ethics and an unrushed patient experience.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Core values */}
      <section className="py-10">
        <Reveal><SectionLabel>Core Values</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground max-w-2xl">
            What we <span className="font-script text-accent">stand</span> for.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why us — zigzag */}
      <section className="py-14 space-y-14">
        <Reveal><SectionLabel>Why ShailDent</SectionLabel></Reveal>
        {whyUs.map((w, i) => (
          <Reveal key={w.title}>
            <div className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={w.img} alt={w.title} className="aspect-[4/3] w-full rounded-3xl object-cover ring-1 ring-border" />
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground">{w.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Team */}
      <section className="py-14">
        <Reveal><SectionLabel>The Team</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground">
            Meet the <span className="font-script text-accent">people</span> behind your smile.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img src="/images/treatment-1.jpg" alt="Dr. Shailaja" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">Dr. Shailaja</h3>
                <p className="text-sm text-accent font-semibold">Founder · Cosmetic & Aesthetic Dentist</p>
                <p className="mt-3 text-sm text-muted-foreground">An aesthetic-first dentist who believes great care begins with a calm, honest conversation. Known for her gentle hand, eye for detail and lifelong-patient relationships.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img src="/images/inauguration.jpg" alt="ShailDent care team" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">The Care Team</h3>
                <p className="text-sm text-accent font-semibold">Hygienists · Assistants · Front Desk</p>
                <p className="mt-3 text-sm text-muted-foreground">Hand-picked for warmth and skill. From your first call to your follow-up, every interaction is meant to make you feel looked after.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Badges */}
      <section className="py-14">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-card">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center gap-3">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">5.0 Star Google Rating</div>
                  <div className="text-sm text-muted-foreground">Consistently rated by real patients</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <HeartHandshake className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">Women-Owned Studio</div>
                  <div className="text-sm text-muted-foreground">Founded and led by Dr. Shailaja</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Star className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">LGBTQ+ Friendly</div>
                  <div className="text-sm text-muted-foreground">A welcoming space for everyone</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
