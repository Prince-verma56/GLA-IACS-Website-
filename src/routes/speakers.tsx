import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
  ImageReveal,
} from "@/components/motion/ScrollReveal";
import { internationalSpeakers } from "@/lib/conference";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Distinguished International Scientists — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Distinguished international scientists at the IACS 2027 International Conference on Cardiovascular Sciences, GLA University, Mathura.",
      },
      { property: "og:title", content: "Distinguished International Scientists — IACS 2027" },
      {
        property: "og:description",
        content: "World-leading cardiovascular scientists and clinicians presenting at IACS 2027.",
      },
    ],
  }),
  component: SpeakersPage,
});

/* Initials avatar fallback */
function SpeakerAvatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="aspect-[3/4] w-full overflow-hidden bg-[#e8ede9]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          draggable={false}
        />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(-2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="aspect-[3/4] w-full flex items-center justify-center bg-[#1a3d1e]">
      <span className="text-4xl font-semibold text-white/30 tracking-widest">{initials}</span>
    </div>
  );
}

function SpeakersPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".gsap-speaker-card");
        cards.forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
            y: 32,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 4) * 0.07,
          });
        });
      });
    },
    { scope: gridRef },
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── PAGE HERO ─────────────────────────────────────── */}
        <InternalPageHero hero={pageHeroes.speakers} />

        {/* ── CONTEXT STRIP ─────────────────────────────────── */}
        <section className="border-b border-rule">
          <div className="shell flex flex-wrap items-center gap-x-8 gap-y-3 py-6 md:gap-x-10">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-foreground/70">
                Distinguished International Scientists
              </span>
            </div>
            <div className="hidden h-5 w-px bg-rule sm:block" />
            <div>
              <span className="text-sm text-foreground/50">Global scientific perspectives</span>
            </div>
            <div className="hidden h-5 w-px bg-rule sm:block" />
            <div>
              <span className="text-sm text-foreground/50">11–13 February 2027</span>
            </div>
          </div>
        </section>

        {/* ── SPEAKER GRID ──────────────────────────────────── */}
        <section className="shell py-20 md:py-28" ref={gridRef}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {internationalSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="gsap-speaker-card group relative overflow-hidden border border-rule bg-background transition-shadow duration-300 hover:shadow-lg hover:shadow-black/6"
              >
                {/* Index */}
                <div className="absolute left-0 top-0 z-10 bg-primary-deep px-2.5 py-1">
                  <span className="text-[10px] font-semibold tabular-nums text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Portrait */}
                <SpeakerAvatar name={speaker.name} {...(speaker.image ? { image: speaker.image } : {})} />

                {/* Details */}
                <div className="p-5">
                  <p className="font-semibold leading-snug text-foreground">{speaker.name}</p>
                  {speaker.role && (
                    <p className="mt-1.5 text-xs leading-relaxed text-foreground/55 line-clamp-2">
                      {speaker.role}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-primary/80 leading-relaxed">{speaker.org}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DARK CLOSING STRIP ────────────────────────────── */}
        <section className="bg-primary-deep py-16 md:py-20">
          <div className="shell flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <MaskReveal>
                <h2 className="display-sm text-white">Presenting at IACS 2027</h2>
              </MaskReveal>
              <TextReveal delay={0.15}>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">
                  Full programme with session assignments, timings and abstract details will be
                  published closer to the conference.
                </p>
              </TextReveal>
            </div>
            <div className="shrink-0">
              <a
                href="https://docs.google.com/forms/d/11WC95Z6VY8R4Nln3Y9OIjMwFWVJVIdiw6x-3ONuJnXU/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-white/30 px-8 py-3 text-sm uppercase tracking-widest text-white/80 transition-all hover:border-white/60 hover:text-white"
              >
                Register to Attend
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
