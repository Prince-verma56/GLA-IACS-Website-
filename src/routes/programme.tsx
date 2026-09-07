import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { SectionTransition } from "@/components/editorial/SectionTransition";
import {
  conference,
  researchAreas,
} from "@/lib/conference";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Day-wise scientific programme for 11, 12 and 13 February 2027 at the IACS India Section International Conference, GLA University, Mathura.",
      },
      { property: "og:title", content: "Programme — IACS 2027" },
      { property: "og:description", content: "Scientific schedule for 11–13 February 2027." },
    ],
  }),
  component: Programme,
});

/* ── CONSTANTS & ASSETS ────────────────────────────────────────────── */

const days = [
  { id: "11", label: "11 February", sub: "Thursday" },
  { id: "12", label: "12 February", sub: "Friday" },
  { id: "13", label: "13 February", sub: "Saturday" },
];

const programmeVisuals = {
  conference: "/images/programme/scientific-conference.jpg",
  topics: "/images/programme/cardiovascular-research.jpg"
};

/* ── COMPONENTS ────────────────────────────────────────────────────── */

function EditorialImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-muted rounded-sm shadow-sm border border-black/5", className)}>
      <img 
        src={src} 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 z-10"
        loading="lazy"
      />
    </div>
  );
}

function ScientificEditorialMotif({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none opacity-[0.06] overflow-hidden", className)} aria-hidden="true">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <circle cx="800" cy="300" r="4" fill="currentColor" />
        <circle cx="860" cy="200" r="3" fill="currentColor" />
        <circle cx="900" cy="300" r="5" fill="currentColor" />
      </svg>
    </div>
  );
}

/* ── MAIN ROUTE ────────────────────────────────────────────────────── */

function Programme() {
  const [activeDay, setActiveDay] = useState("11");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <InternalPageHero hero={pageHeroes.programme} />

        {/* ── DAY NAVIGATION & TIMELINE ───────────────── */}
        <section className="bg-white relative z-10 pt-16 md:pt-24 pb-8 border-b border-rule/50">
          <div className="shell">
            <HorizontalReveal>
              <p className="eyebrow text-primary text-center mb-12">Conference Journey</p>
            </HorizontalReveal>
            
            <div className="relative">
              {/* Timeline connecting line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 -translate-y-1/2 hidden md:block" aria-hidden="true" />
              
              <StaggerReveal className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                {days.map((d, i) => {
                  const isActive = activeDay === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDay(d.id)}
                      className={cn(
                        "group flex flex-col items-center bg-white px-8 transition-all duration-300",
                        isActive ? "scale-105" : "hover:scale-105 opacity-60 hover:opacity-100"
                      )}
                    >
                      <span className={cn(
                        "text-[10px] font-mono tracking-widest mb-2 transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary/60"
                      )}>
                        0{i + 1}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-3xl tracking-tight mb-1">
                        {d.label}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                        {d.sub} 2027
                      </span>
                      {/* Active indicator dot */}
                      <span className={cn(
                        "w-2 h-2 rounded-full mt-4 transition-all duration-300",
                        isActive ? "bg-primary scale-100" : "bg-transparent scale-0"
                      )} />
                    </button>
                  );
                })}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* ── PROGRAMME SCHEDULE ───────────────────────── */}
        <section className="bg-white pt-12 pb-20 relative overflow-hidden">
          <ScientificEditorialMotif className="text-primary/30" />
          <div className="shell relative z-10">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-6 border-b border-rule pb-4 mb-4">
              <div className="col-span-2 eyebrow text-muted-foreground">Time</div>
              <div className="col-span-5 eyebrow text-muted-foreground">Session</div>
              <div className="col-span-3 eyebrow text-muted-foreground">Speaker</div>
              <div className="col-span-2 eyebrow text-muted-foreground">Venue</div>
            </div>

            {/* Pending State Row */}
            <MaskReveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start py-8 md:py-12 border-b border-rule group hover:bg-[#faf8f5]/50 transition-colors rounded-sm px-4 -mx-4">
                <div className="col-span-1 md:col-span-2 text-primary/40 font-mono text-sm">—</div>
                <div className="col-span-1 md:col-span-5">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight mb-3">
                    Session details to be announced
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    The detailed session schedule will be published here once confirmed by the scientific committee.
                  </p>
                </div>
                <div className="col-span-1 md:col-span-3 text-sm font-medium text-foreground/80 mt-4 md:mt-0">
                  <span className="md:hidden eyebrow text-muted-foreground mr-2">Speaker:</span>
                  As per official programme
                </div>
                <div className="col-span-1 md:col-span-2 text-sm text-muted-foreground mt-2 md:mt-0">
                  <span className="md:hidden eyebrow text-muted-foreground mr-2">Venue:</span>
                  GLA University, Mathura
                </div>
              </div>
            </MaskReveal>

            {/* Scientific Image Anchor */}
            <div className="mt-24 md:mt-32">
              <TextReveal delay={0.2}>
                <EditorialImage 
                  src={programmeVisuals.conference} 
                  alt="Scientific conference auditorium" 
                  className="w-full aspect-video md:aspect-[21/9]"
                />
              </TextReveal>
            </div>
          </div>
        </section>

        <SectionTransition variant="brush" />


        {/* ── SCIENTIFIC TOPICS INDEX ────────────────────── */}
        <section className="bg-surface py-20 md:py-28 relative overflow-hidden">
          <ScientificEditorialMotif />
          <div className="shell relative z-10">
            <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-[8%] mb-16">
              <div className="w-full lg:w-[45%]">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">02</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md">Scientific Topics</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                    Comprehensive research areas and disciplines to be explored throughout the conference.
                  </p>
                </TextReveal>
              </div>
              <div className="w-full lg:w-[47%]">
                <TextReveal delay={0.3}>
                  <EditorialImage 
                    src={programmeVisuals.topics} 
                    alt="High-end biomedical cardiovascular visualization" 
                    className="aspect-[21/9] w-full"
                  />
                </TextReveal>
              </div>
            </div>

            <StaggerReveal
              as="ol"
              className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3 border-t border-rule"
              stagger={0.03}
            >
              {researchAreas.map((area, idx) => (
                <li
                  key={area}
                  className="flex gap-4 border-b border-rule py-4 list-none items-start"
                >
                  <span className="text-[10px] font-mono text-primary/40 shrink-0 pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] font-medium leading-snug">{area}</span>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>



        <SectionTransition variant="green-entry" />

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="bg-primary-deep pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden" aria-hidden="true">
            <svg className="w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <path d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          
          <div className="shell relative z-10 text-center">
            <HorizontalReveal>
              <p className="eyebrow text-white/50 mb-3">Explore the conference</p>
            </HorizontalReveal>
            <MaskReveal delay={0.1}>
              <h2 className="display-lg text-white">Ready to submit?</h2>
            </MaskReveal>
            <TextReveal delay={0.2}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/abstracts"
                  className="inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-primary-deep w-full sm:w-auto justify-center"
                >
                  View Abstract Details →
                </Link>
                <Link
                  to="/registration"
                  className="text-sm text-white/70 uppercase tracking-widest hover:text-white transition-colors w-full sm:w-auto text-center py-4"
                >
                  Register Now →
                </Link>
              </div>
            </TextReveal>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
