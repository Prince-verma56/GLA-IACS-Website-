import React from "react";
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
import { conference, researchAreas } from "@/lib/conference";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/abstracts")({
  head: () => ({
    meta: [
      { title: "Abstract Submission Guidelines — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Abstract guidelines, formatting rules, poster dimensions and presentation durations for IACS 2027. Submission deadline 25 December 2026.",
      },
      { property: "og:title", content: "Abstract Submission Guidelines — IACS 2027" },
      {
        property: "og:description",
        content:
          "Structure, word limit, formatting and deadlines for abstract submission at IACS 2027.",
      },
    ],
  }),
  component: Abstracts,
});

/* ── IMAGE SYSTEM ────────────────────────────────────────────── */

const abstractVisuals = {
  submission: "/images/abstracts/abstract-research.jpg",
  structure: "/images/programme/Abstract Structure.png",
  poster: "/images/abstracts/presentation-poster.jpg",
  oral: "/images/abstracts/presentation-oral.jpg",
  online: "/images/abstracts/presentation-online.jpg",
  absentia: "/images/programme/Paper Presentation in Absentia.png",
  research: "/images/programme/Research Areas.png"
};

function EditorialImage({ src, alt, className, imgClassName = "object-cover" }: { src: string, alt: string, className?: string, imgClassName?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-muted rounded-sm shadow-sm border border-black/5", className)}>
      <img 
        src={src} 
        alt={alt}
        className={cn("absolute inset-0 w-full h-full transition-transform duration-700 ease-out hover:scale-105 z-10", imgClassName)}
        loading="lazy"
      />
    </div>
  );
}

/* ── MOTIF ───────────────────────────────────────────────────── */

function ScientificEditorialMotif() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.08] overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        {/* Molecular nodes */}
        <circle cx="800" cy="300" r="4" fill="currentColor" />
        <circle cx="860" cy="200" r="3" fill="currentColor" />
        <circle cx="900" cy="300" r="5" fill="currentColor" />
      </svg>
    </div>
  );
}

/* ── CONSTANTS ───────────────────────────────────────────────── */

const abstractStructure = ["Background", "Method", "Result", "Conclusion"];

const formattingSpecs = [
  { key: "Typeface", value: "Times New Roman", icon: "Aa" },
  { key: "Font size", value: "12 pt", icon: "12" },
  { key: "Line spacing", value: "Double spacing", icon: "↕" },
  { key: "Maximum length", value: "250 words", icon: "250" },
  { key: "Keywords", value: "3–5 keywords", icon: "#" },
];

/* ── COMPONENT ───────────────────────────────────────────────── */

function Abstracts() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── PAGE HERO ─────────────────────────────────────── */}
        <InternalPageHero hero={pageHeroes.abstracts} />

        {/* ── REQUIRED FIELDS + DEADLINE ─────────────────────── */}
        <section className="shell pt-24 pb-16 md:pt-32 md:pb-20 relative z-10 bg-white">
          <div className="grid gap-16 md:grid-cols-12 items-start">
            
            {/* Left — Required Fields */}
            <div className="md:col-span-5 lg:col-span-6">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">Submission</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Required Fields</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Every abstract must include the following header information.
                </p>
              </TextReveal>
              
              <StaggerReveal
                as="ul"
                className="mt-10 border-t border-rule"
                stagger={0.06}
              >
                {["Title", "Author name(s)", "Complete affiliation(s)", "Zip code(s)"].map(
                  (field, i) => (
                    <li key={field} className="flex gap-6 py-5 border-b border-rule list-none items-center">
                      <span className="eyebrow text-primary/50 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground font-medium text-[0.9375rem] tracking-tight">{field}</span>
                    </li>
                  )
                )}
              </StaggerReveal>
            </div>

            {/* Right — Image & Deadline */}
            <div className="md:col-span-7 lg:col-span-6 space-y-8">
              <TextReveal delay={0.3}>
                <EditorialImage 
                  src={abstractVisuals.submission} 
                  alt="Scientific research laboratory" 
                  className="aspect-[4/3] md:aspect-[3/2] w-full"
                />
              </TextReveal>
              
              <TextReveal delay={0.4}>
                <div className="bg-[#faf8f5] p-8 rounded-sm border border-black/5">
                  <p className="eyebrow text-primary mb-4">Submission Deadline</p>
                  <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight leading-none mb-4">
                    25 December 2026
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Abstract submission closes on 25 December 2026. Submissions received after this date will not be considered.
                  </p>
                  <a href={`mailto:${conference.email}`} className="btn-solid inline-block text-center px-8">
                    Submit Abstract →
                  </a>
                </div>
              </TextReveal>
            </div>

          </div>
        </section>

        {/* ── VENUE -> STRUCTURE TRANSITION (BRUSH STROKES) ──────────────── */}
        <div className="w-full h-16 md:h-[100px] relative z-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full" aria-hidden="true">
            {/* Base top layer (white) */}
            <path fill="#ffffff" d="M0,0 L1440,0 L1440,40 C1100,60 900,10 600,30 C300,50 150,20 0,40 Z" />
            {/* Brush Stroke 1: Pale sage */}
            <path fill="#f3f4f1" d="M-20,35 C200,55 350,15 650,40 C950,65 1150,20 1460,45 L1460,120 L-20,120 Z" opacity="0.6" />
            {/* Brush Stroke 2: Subtle warm ivory */}
            <path fill="#faf8f5" d="M-20,50 C250,70 450,30 750,55 C1050,80 1250,35 1460,60 L1460,120 L-20,120 Z" opacity="0.9" />
            {/* Base bottom layer (warm ivory background matching next section) */}
            <path fill="#fcfbf9" d="M-20,65 C300,85 500,45 800,70 C1100,95 1300,50 1460,75 L1460,120 L-20,120 Z" />
            
            {/* Editorial Scientific Line */}
            <path 
              fill="none" 
              stroke="#2c4c3b" 
              strokeWidth="1.5" 
              d="M-10,75 C150,75 200,105 220,65 L230,25 L245,115 L255,75 C400,75 600,95 800,80 C950,70 1000,100 1020,60 L1030,20 L1045,110 L1055,70 C1200,70 1300,85 1450,80" 
              opacity="0.12" 
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
        </div>

        {/* ── ABSTRACT STRUCTURE & FORMAT ──────────────────── */}
        <section className="bg-[#fcfbf9] relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
          <ScientificEditorialMotif />
          <div className="shell relative z-10 space-y-24">
            
            {/* Split: Structure */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[8%] lg:gap-[10%]">
              <div className="w-full md:w-[42%] order-2 md:order-1">
                <TextReveal delay={0.2}>
                  <EditorialImage 
                    src={abstractVisuals.structure} 
                    alt="Scientific research manuscript" 
                    className="aspect-[4/3] w-full"
                    imgClassName="object-contain bg-white"
                  />
                </TextReveal>
              </div>
              
              <div className="w-full md:w-[50%] lg:w-[48%] order-1 md:order-2">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">Guidelines</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md">Abstract Structure</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Structure the abstract body into the following sections.
                  </p>
                </TextReveal>
                
                <StaggerReveal
                  as="ol"
                  className="mt-8 border-t border-rule"
                  stagger={0.07}
                >
                  {abstractStructure.map((s, i) => (
                    <li key={s} className="flex gap-6 py-5 border-b border-rule list-none items-center">
                      <span className="eyebrow text-primary/50 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                        {s}
                      </span>
                    </li>
                  ))}
                </StaggerReveal>
              </div>
            </div>

            {/* Grid: Formatting Specs */}
            <div>
              <MaskReveal>
                <h3 className="text-2xl font-[family-name:var(--font-display)] mb-8">Formatting Specifications</h3>
              </MaskReveal>
              <StaggerReveal 
                className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                stagger={0.05}
              >
                {formattingSpecs.map(({ key, value, icon }) => (
                  <div key={key} className="bg-white p-6 border border-black/5 rounded-sm shadow-sm transition-colors hover:bg-[#faf8f5]">
                    <span className="block text-primary/40 font-mono text-xl mb-4 font-light">{icon}</span>
                    <dt className="eyebrow text-muted-foreground mb-2">{key}</dt>
                    <dd className="font-medium text-[0.9375rem]">{value}</dd>
                  </div>
                ))}
              </StaggerReveal>
            </div>

          </div>
        </section>

        {/* ── STRUCTURE -> PRESENTATION TRANSITION ──────────── */}
        <div className="w-full h-12 md:h-20 bg-white relative z-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-[#fcfbf9]" aria-hidden="true">
            <path fill="currentColor" d="M0,120 C350,10 700,120 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        {/* ── PRESENTATION GUIDELINES ───────────────────────── */}
        <section className="bg-white py-16 md:py-20">
          <div className="shell">
            <div className="mb-14 max-w-2xl">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">Presentation</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Presentation Guidelines</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  IACS 2027 supports multiple presentation modalities. Ensure your materials meet the timing and sizing constraints below.
                </p>
              </TextReveal>
            </div>

            <StaggerReveal className="grid gap-8 md:grid-cols-3" stagger={0.1}>
              {/* Poster */}
              <div className="group">
                <EditorialImage src={abstractVisuals.poster} alt="Poster Presentation" className="aspect-[4/3] mb-6" />
                <p className="eyebrow text-primary mb-4">Poster</p>
                <div className="border-t border-rule pt-4">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Poster Size</dt>
                  <dd className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">3 × 5 feet</dd>
                </div>
              </div>
              
              {/* Oral */}
              <div className="group">
                <EditorialImage src={abstractVisuals.oral} alt="Oral Presentation" className="aspect-[4/3] mb-6" />
                <p className="eyebrow text-primary mb-4">Oral</p>
                <div className="border-t border-rule pt-4 space-y-4">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Presentation</dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">8 minutes</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Discussion</dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">2 minutes</dd>
                  </div>
                </div>
              </div>

              {/* Online */}
              <div className="group">
                <EditorialImage src={abstractVisuals.online} alt="Online Presentation" className="aspect-[4/3] mb-6" />
                <p className="eyebrow text-primary mb-4">Online</p>
                <div className="border-t border-rule pt-4 space-y-4">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Presentation</dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">8 minutes</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Discussion</dt>
                    <dd className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">2 minutes</dd>
                  </div>
                </div>
              </div>
            </StaggerReveal>

            {/* Absentia */}
            <div className="mt-20 md:mt-28 pt-16 border-t border-rule flex flex-col md:flex-row items-center gap-8 md:gap-[8%] lg:gap-[10%] max-w-[95%] lg:max-w-[90%] mx-auto">
              <div className="w-full md:w-[42%]">
                <TextReveal>
                  <EditorialImage src={abstractVisuals.absentia} alt="Presentation in Absentia" className="aspect-[4/3] w-full" imgClassName="object-contain bg-white" />
                </TextReveal>
              </div>
              <div className="w-full md:w-[50%] lg:w-[48%]">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">In Absentia</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h3 className="display-sm mb-4">Paper Presentation in Absentia</h3>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="text-muted-foreground leading-relaxed">
                    Registered participants who are unable to attend the conference on the scheduled
                    date but still wish to present their work may submit their abstract. Co-authors may
                    present the paper during the conference on their behalf.
                  </p>
                </TextReveal>
              </div>
            </div>
            
          </div>
        </section>

        {/* ── RESEARCH AREAS ────────────────────────────────── */}
        <section className="bg-surface relative py-20 md:py-28 border-t border-rule overflow-hidden">
          <ScientificEditorialMotif />
          <div className="shell relative z-10">
            <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-[8%] mb-16">
              <div className="w-full lg:w-[55%]">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">Scope</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md">Research Areas</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                    Abstracts are invited across the following major research areas in pharmaceutical and cardiovascular sciences.
                  </p>
                </TextReveal>
              </div>
              <div className="w-full lg:w-[37%] hidden lg:block">
                <TextReveal delay={0.3}>
                  <EditorialImage 
                    src={abstractVisuals.research} 
                    alt="Cardiovascular scientific visualization" 
                    className="aspect-[3/2] w-full"
                    imgClassName="object-contain bg-white"
                  />
                </TextReveal>
              </div>
            </div>

            <StaggerReveal
              as="ol"
              className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.03}
            >
              {researchAreas.map((area, idx) => (
                <li
                  key={area}
                  className="flex gap-4 border-t border-rule py-4 list-none items-start"
                >
                  <span className="text-[10px] font-mono text-primary/40 shrink-0 pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground/80">{area}</span>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── MAP -> CTA TRANSITION ─────────────────────────── */}
        <div className="w-full h-12 md:h-20 bg-primary-deep relative z-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-surface" aria-hidden="true">
            <path fill="currentColor" d="M0,0 L1440,120 L1440,0 Z"></path>
          </svg>
        </div>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="bg-primary-deep pb-20 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden" aria-hidden="true">
            {/* Scientific Line Motif repeated for the CTA */}
            <svg className="w-full h-full text-white" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <path d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          
          <div className="shell relative z-10 text-center">
            <MaskReveal>
              <h2 className="display-lg text-white">Ready to submit?</h2>
            </MaskReveal>
            <TextReveal delay={0.1}>
              <p className="mt-6 text-white/70 max-w-xl mx-auto leading-relaxed">
                Deadline: 25 December 2026.<br/>
                Send your abstract to <a href={`mailto:${conference.email}`} className="text-white hover:underline underline-offset-4 transition-colors">{conference.email}</a>
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${conference.email}`}
                  className="inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-primary-deep"
                >
                  Submit Abstract →
                </a>
                <Link
                  to="/registration"
                  className="text-sm text-white/70 uppercase tracking-widest hover:text-white transition-colors"
                >
                  View Registration →
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
