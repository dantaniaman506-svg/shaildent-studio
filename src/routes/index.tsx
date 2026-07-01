import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ArrowRight, Phone, MessageCircle, Quote, ShieldCheck, Sparkles, HeartHandshake, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ScrollVideo } from "@/components/ScrollVideo";
import { services, reviews, gallery, trustStats } from "@/lib/data";
import { site, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShailDent The Dental Studio · Rajkot | Dr. Shailaja" },
      { name: "description", content: "Premium aesthetic dental care in Rajkot — smile design, implants, aligners, painless treatments by Dr. Shailaja at ShailDent The Dental Studio." },
    ],
  }),
  component: Home,
});

function Home() {
  const previewServices = services.slice(0, 6);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <div className="mx-auto max-w-7xl px-5 pt-8 md:pt-16 pb-16 md:pb-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Rajkot's Aesthetic Dental Studio
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[44px] leading-[1.05] md:text-[68px] md:leading-[1.02] font-semibold tracking-tight text-foreground">
                Where every smile <span className="font-script text-accent">matters.</span>
                <br className="hidden md:block" /> Healthy teeth, <span className="font-script text-accent">happy you.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-poppins)" }}>
                Advanced, personalised dental care by <span className="text-foreground font-semibold">Dr. Shailaja</span> — delivered in a calm, luxuriously designed studio in Mota Mava, Rajkot.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <Link to="/contact" hash="appointment-form" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90 transition">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition">
                  <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-poppins)" }}>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span><span className="font-semibold text-foreground">5.0</span> · Loved by patients on Google</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sage-soft to-accent-soft blur-2xl opacity-60 -z-10" />
              <img
                src="/images/hero-door.jpg"
                alt="ShailDent entrance — Where every smile matters"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-soft ring-1 ring-border"
              />
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card/90 backdrop-blur px-4 py-3 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-xs" style={{ fontFamily: "var(--font-poppins)" }}>
                  <div className="font-semibold text-foreground">Painless & Sterilised</div>
                  <div className="text-muted-foreground">Hospital-grade protocols</div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-y border-border bg-card/50 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustStats, ...trustStats, ...trustStats, ...trustStats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-6 text-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="font-semibold text-foreground">{s.value}</span>
              <span className="text-muted-foreground">{s.label}</span>
              <span className="ml-3 text-border">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTOR */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 grid gap-12 md:grid-cols-12 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-sage-soft -z-10" />
            <img
              src="/images/treatment-1.jpg"
              alt="Dr. Shailaja treating a patient"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover ring-1 ring-border"
            />
          </div>
        </Reveal>
        <div className="md:col-span-7">
          <Reveal><SectionLabel>Meet Your Doctor</SectionLabel></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-foreground">
              Care that's <span className="font-script text-accent">gentle</span>, precise, and deeply personal.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Dr. Shailaja founded ShailDent with a simple belief: dentistry should never feel rushed, cold or transactional. Every patient is met with patience and a treatment plan tailored to their face, habits and goals. From a five-minute polish to a full smile makeover, the standard of care is the same — meticulous, modern, and unhurried.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <blockquote className="mt-7 rounded-2xl border-l-4 border-accent bg-card p-5 shadow-card">
              <Quote className="h-5 w-5 text-accent" />
              <p className="mt-2 font-script text-xl md:text-2xl text-foreground leading-snug">
                "A great smile isn't designed in a lab — it's understood in conversation, and crafted with care."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">— Dr. Shailaja, Founder</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* STUDIO TOUR — photos + autoplay videos */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <Reveal>
            <SectionLabel>Step Inside</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground max-w-2xl">
              A cinematic <span className="font-script text-accent">tour</span> of the studio.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground" style={{ fontFamily: "var(--font-poppins)" }}>
              Scroll through — every video and photo auto-plays as it enters view. Tap to unmute or pause.
            </p>
          </Reveal>
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent" style={{ fontFamily: "var(--font-poppins)" }}>
              <PlayCircle className="h-3.5 w-3.5" /> Auto-plays on scroll
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-6 md:grid-rows-2 md:auto-rows-fr">
          <Reveal className="md:col-span-4 md:row-span-2">
            <ScrollVideo
              src="/videos/tour-1.mp4"
              poster="/images/reception.jpg"
              label="Studio Walkthrough"
              className="aspect-video md:h-full md:aspect-auto"
            />
          </Reveal>
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="h-full overflow-hidden rounded-3xl ring-1 ring-border shadow-card aspect-[4/3] md:aspect-auto">
              <img src="/images/entrance-smile.jpg" alt="Smile entrance arch" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <ScrollVideo
              src="/videos/tour-2.mp4"
              poster="/images/consult-room.jpg"
              label="Inside the Rooms"
              className="aspect-[4/3] md:h-full md:aspect-auto"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 md:gap-4">
          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-border">
              <img src="/images/reception.jpg" alt="Reception" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-border">
              <img src="/images/dental-chair.jpg" alt="Dental chair" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-border">
              <img src="/images/inauguration.jpg" alt="Inauguration" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <Reveal>
            <SectionLabel>Treatments</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground max-w-2xl">
              Every treatment, <span className="font-script text-accent">refined</span> for comfort.
            </h2>
          </Reveal>
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link to="/services" hash={s.slug} className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                    <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-background/90 backdrop-blur text-accent shadow-card">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal><SectionLabel>Why ShailDent</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground max-w-2xl">
            Built around <span className="font-script text-accent">you</span>, not a checklist.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: HeartHandshake, title: "Unhurried Consultations", body: "We listen first. Every plan is explained until you're fully comfortable proceeding." },
            { icon: Sparkles, title: "Aesthetic-First Mindset", body: "Designed by a cosmetic specialist — every restoration is finished to a mirror polish." },
            { icon: ShieldCheck, title: "Hospital-Grade Sterilisation", body: "Autoclaved instruments, sealed pouches and single-use barriers on every chair." },
            { icon: Star, title: "5.0 Rated Care", body: "Consistently rated 5 stars on Google by patients across Rajkot." },
            { icon: Phone, title: "Always Reachable", body: "Direct WhatsApp and call line — get answers from our team within minutes." },
            { icon: Quote, title: "Women-Owned Studio", body: "Founded and led by Dr. Shailaja — a calm, welcoming space for every patient." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <Reveal>
            <SectionLabel>Inside The Studio</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground">
              A space designed to <span className="font-script text-accent">calm</span> you.
            </h2>
          </Reveal>
          <Reveal>
            <Link to="/gallery" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted">
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.slice(0, 6).map((g, i) => (
            <Reveal key={g.src} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl aspect-square">
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal><SectionLabel>Patient Stories</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground max-w-2xl">
            Kind words from <span className="font-script text-accent">our patients.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 italic text-foreground leading-relaxed line-clamp-5">"{r.text}"</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{r.source}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-5">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[2rem] gradient-brand px-6 py-12 md:py-16 text-primary-foreground">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { v: "5.0★", l: "Google Rating" },
                { v: "2,000+", l: "Happy Smiles" },
                { v: "12+", l: "Specialised Treatments" },
                { v: "100%", l: "Sterilised Care" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl font-semibold">{s.v}</div>
                  <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28 text-center">
        <Reveal><SectionLabel>Book Today</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-foreground">
            Ready for a smile you'll <span className="font-script text-accent">love</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-muted-foreground">
            Reach us on WhatsApp or call directly — we typically reply within minutes during clinic hours.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex justify-center flex-wrap gap-3">
            <Link to="/contact" hash="appointment-form" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
