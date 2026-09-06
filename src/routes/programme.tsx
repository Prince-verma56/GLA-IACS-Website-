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
import {
  conference,
  orations,
  symposia,
  youngInvestigatorAwards,
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
  { id: "11", label: "11 February", sub: "Wednesday" },
  { id: "12", label: "12 February", sub: "Thursday" },
  { id: "13", label: "13 February", sub: "Friday" },
];

const programmeVisuals = {
  conference: "/images/programme/scientific-conference.jpg",
  components: "/images/programme/scientific-symposium.jpg",
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

function BrushSeparatorWhiteToIvory() {
  return (
    <div className="w-full h-16 md:h-24 relative z-10 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full" aria-hidden="true">
        <path fill="#ffffff" d="M0,0 L1440,0 L1440,40 C1100,60 900,10 600,30 C300,50 150,20 0,40 Z" />
        <path fill="#f3f4f1" d="M-20,35 C200,55 350,15 650,40 C950,65 1150,20 1460,45 L1460,120 L-20,120 Z" opacity="0.6" />
        <path fill="#faf8f5" d="M-20,50 C250,70 450,30 750,55 C1050,80 1250,35 1460,60 L1460,120 L-20,120 Z" opacity="0.9" />
        <path fill="#fcfbf9" d="M-20,65 C300,85 500,45 800,70 C1100,95 1300,50 1460,75 L1460,120 L-20,120 Z" />
        <path fill="none" stroke="#2c4c3b" strokeWidth="1.5" d="M-10,75 C150,75 200,105 220,65 L230,25 L245,115 L255,75 C400,75 600,95 800,80 C950,70 1000,100 1020,60 L1030,20 L1045,110 L1055,70 C1200,70 1300,85 1450,80" opacity="0.12" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function BrushSeparatorIvoryToWhite() {
  return (
    <div className="w-full h-16 md:h-24 relative z-10 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full" aria-hidden="true">
        <path fill="#fcfbf9" d="M0,0 L1440,0 L1440,30 C1200,50 900,15 500,45 C200,65 100,25 0,35 Z" />
        <path fill="#faf8f5" d="M-20,30 C200,40 300,10 600,35 C900,60 1100,20 1460,50 L1460,120 L-20,120 Z" opacity="0.7" />
        <path fill="#ffffff" d="M-20,45 C250,60 400,25 700,50 C1000,75 1250,35 1460,65 L1460,120 L-20,120 Z" />
        <path fill="none" stroke="#2c4c3b" strokeWidth="1" d="M-10,60 C200,70 250,30 300,55 C400,100 500,40 600,65 C750,100 800,50 900,70 C1100,100 1200,40 1450,65" opacity="0.1" vectorEffect="non-scaling-stroke" />
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

        <BrushSeparatorWhiteToIvory />

        {/* ── SCIENTIFIC COMPONENTS ─────────────────────── */}
        <section className="bg-[#fcfbf9] py-20 md:py-28 relative">
          <div className="shell">
            <div className="grid gap-16 lg:grid-cols-12 items-start">
              
              <div className="lg:col-span-7">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">01</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-sm mb-12">Scientific Components</h2>
                </MaskReveal>
                
                <div className="grid md:grid-cols-2 gap-12 border-t border-rule pt-8">
                  <StaggerReveal delay={0.2}>
                    <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">Orations + Symposia</h3>
                    <ul className="space-y-4">
                      {[...orations, ...symposia].map((item) => (
                        <li key={item} className="text-[0.9375rem] font-medium leading-snug flex gap-3">
                          <span className="text-primary/40">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerReveal>
                  
                  <StaggerReveal delay={0.3}>
                    <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">Young Investigators</h3>
                    <ul className="space-y-4">
                      {youngInvestigatorAwards.map((item) => (
                        <li key={item} className="text-[0.9375rem] font-medium leading-snug flex gap-3">
                          <span className="text-primary/40">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </StaggerReveal>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-10">
                <TextReveal delay={0.4}>
                  <EditorialImage 
                    src={programmeVisuals.components} 
                    alt="Cardiovascular researcher presenting" 
                    className="aspect-[4/5] w-full"
                  />
                </TextReveal>
              </div>

            </div>
          </div>
        </section>

        <BrushSeparatorIvoryToWhite />

        {/* ── SCIENTIFIC TOPICS INDEX ────────────────────── */}
        <section className="bg-white py-20 md:py-28 relative overflow-hidden">
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

        <BrushSeparatorWhiteToIvory />

        {/* ── ABSTRACT SUBMISSION GUIDELINES ─────────────── */}
        <section className="bg-[#fcfbf9] py-20 md:py-28 relative">
          <div className="shell relative z-10">
            <div className="mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">03</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-sm">Abstract Submission Guidelines</h2>
              </MaskReveal>
            </div>

            <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-rule pt-12" stagger={0.05}>
              <div className="bg-white p-6 border border-black/5 rounded-sm shadow-sm">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Deadline</dt>
                <dd className="font-[family-name:var(--font-display)] text-2xl tracking-tight">25 December 2026</dd>
              </div>
              
              <div className="bg-white p-6 border border-black/5 rounded-sm shadow-sm">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Format</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  Aim, Method, Result, Conclusion, 3-5 key words.<br/>
                  Max 250 words. Times New Roman, 12 pt, double line spacing.
                </dd>
              </div>
              
              <div className="bg-white p-6 border border-black/5 rounded-sm shadow-sm">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Oral / Online</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  Maximum 8 minutes presentation followed by 2 minutes of discussion.
                </dd>
              </div>
              
              <div className="bg-white p-6 border border-black/5 rounded-sm shadow-sm">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Poster Size</dt>
                <dd className="font-[family-name:var(--font-display)] text-2xl tracking-tight">3 × 5 feet</dd>
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ── MAP -> CTA TRANSITION ─────────────────────────── */}
        <div className="w-full h-12 md:h-20 bg-primary-deep relative z-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-[#fcfbf9]" aria-hidden="true">
            <path fill="currentColor" d="M0,0 L1440,120 L1440,0 Z"></path>
          </svg>
        </div>

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
