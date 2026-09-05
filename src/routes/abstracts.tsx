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
import { conference, researchAreas } from "@/lib/conference";
import { ConcentricPulse, ScientificGrid, HeartbeatLine, PulseDivider } from "@/components/graphics/ConferenceGraphics";

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

/* ── PAGE CONSTANTS ──────────────────────────────────────────── */

const abstractStructure = ["Aim", "Method", "Result", "Conclusion"];

const formattingSpecs = [
  { key: "Typeface", value: "Times New Roman" },
  { key: "Font size", value: "12 pt" },
  { key: "Line spacing", value: "Double spacing" },
  { key: "Maximum length", value: "250 words" },
  { key: "Keywords", value: "3–5 keywords" },
];

const presentationTypes = [
  {
    type: "POSTER",
    specs: [{ label: "Poster size", value: "3 × 5 feet" }],
  },
  {
    type: "ORAL",
    specs: [
      { label: "Maximum presentation duration", value: "8 minutes" },
      { label: "Discussion / interaction", value: "2 minutes" },
    ],
  },
  {
    type: "ONLINE",
    specs: [
      { label: "Maximum presentation duration", value: "8 minutes" },
      { label: "Discussion / interaction", value: "2 minutes" },
    ],
  },
];

/* ── COMPONENT ───────────────────────────────────────────────── */

function Abstracts() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>

        {/* ── PAGE HERO ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary-deep pt-[74px]">
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
          <ConcentricPulse className="absolute -right-20 -top-16 h-[320px] w-[320px] text-white opacity-25" />
          <div className="shell relative z-10 grid gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">Abstracts</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 className="display-lg text-white">Abstract Submission Guidelines</h1>
              </MaskReveal>
              <TextReveal delay={0.25}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  Guidelines for preparing and submitting abstracts for oral, poster and online
                  presentations at IACS 2027.
                </p>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── DEADLINE + FORMAT ─────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">

            {/* Left — Format content */}
            <div className="md:col-span-7">

              {/* Required fields */}
              <SectionBlock index="01" title="Required Fields">
                <TextReveal delay={0.1}>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Every abstract must include the following header information:
                  </p>
                </TextReveal>
                <StaggerReveal
                  as="ul"
                  className="mt-6 divide-y divide-rule border-y border-rule"
                  stagger={0.06}
                >
                  {["Title", "Author name(s)", "Complete affiliation(s)", "Zip code(s)"].map(
                    (field) => (
                      <li key={field} className="flex gap-5 py-4 text-sm">
                        <span className="text-primary" aria-hidden>
                          —
                        </span>
                        <span>{field}</span>
                      </li>
                    )
                  )}
                </StaggerReveal>
              </SectionBlock>

              {/* Structure */}
              <SectionBlock index="02" title="Abstract Structure">
                <TextReveal delay={0.1}>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Structure the abstract body into the following sections, followed by 3–5
                    keywords:
                  </p>
                </TextReveal>
                <StaggerReveal
                  as="ol"
                  className="mt-6 divide-y divide-rule border-y border-rule"
                  stagger={0.07}
                >
                  {abstractStructure.map((s, i) => (
                    <li key={s} className="flex gap-6 py-5 list-none">
                      <span className="eyebrow text-primary shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-[1.0625rem] tracking-tight">
                        {s}
                      </span>
                    </li>
                  ))}
                </StaggerReveal>
                <TextReveal delay={0.15}>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Followed by 3–5 keywords. Maximum 250 words.
                  </p>
                </TextReveal>
              </SectionBlock>

              {/* Formatting */}
              <SectionBlock index="03" title="Formatting Specifications">
                <StaggerReveal
                  as="dl"
                  className="mt-6 divide-y divide-rule border-y border-rule"
                  stagger={0.06}
                >
                  {formattingSpecs.map(({ key, value }) => (
                    <div key={key} className="grid gap-1 py-4 text-sm sm:grid-cols-2">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </StaggerReveal>
              </SectionBlock>

            </div>

            {/* Right — Deadline + submit */}
            <aside className="md:col-span-5">
              <TextReveal>
                <div className="border-t-2 border-primary pt-8">
                  <p className="eyebrow text-primary">Submission Deadline</p>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.1] tracking-tight">
                    25 December
                    <br />
                    2026
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Abstract submission closes on 25 December 2026. Submissions received after this
                    date will not be considered.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <a href={`mailto:${conference.email}`} className="btn-solid text-center">
                      Submit Abstract →
                    </a>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Send submissions to{" "}
                      <a
                        href={`mailto:${conference.email}`}
                        className="underline underline-offset-2"
                      >
                        {conference.email}
                      </a>{" "}
                      until the official portal link is published.
                    </p>
                  </div>
                </div>
              </TextReveal>

              {/* Abstract opens */}
              <TextReveal delay={0.1}>
                <div className="mt-10 border-t border-rule pt-6">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="eyebrow text-muted-foreground">Submissions Open</dt>
                      <dd className="mt-1 font-medium">25 August 2026</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Submissions Close</dt>
                      <dd className="mt-1 font-medium">25 December 2026</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted-foreground">Conference Dates</dt>
                      <dd className="mt-1 font-medium">{conference.dates}</dd>
                    </div>
                  </dl>
                </div>
              </TextReveal>
            </aside>
          </div>
        </section>

        {/* ── PRESENTATION GUIDELINES ───────────────────────── */}
        <section className="border-t border-rule bg-surface">
          <div className="shell py-20 md:py-28">
            <div className="border-b border-rule pb-3 mb-14">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Presentation</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md mt-4">Presentation Guidelines</h2>
              </MaskReveal>
            </div>

            <StaggerReveal className="grid gap-0 md:grid-cols-3 md:divide-x md:divide-rule" stagger={0.1}>
              {presentationTypes.map(({ type, specs }) => (
                <div key={type} className="border-t border-rule md:border-t-0 py-10 md:px-10 md:first:pl-0 md:last:pr-0">
                  <p className="eyebrow text-primary mb-6">{type}</p>
                  <dl className="space-y-4">
                    {specs.map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs text-muted-foreground uppercase tracking-wide">{label}</dt>
                        <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── PAPER IN ABSENTIA ─────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <HorizontalReveal className="md:col-span-4">
              <div>
                <p className="eyebrow text-primary">In Absentia</p>
              </div>
            </HorizontalReveal>
            <div className="md:col-span-8">
              <MaskReveal>
                <h2 className="display-md">Paper Presentation in Absentia</h2>
              </MaskReveal>
              <TextReveal delay={0.15}>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  Registered participants who are unable to attend the conference on the scheduled
                  date but still wish to present their work may submit their abstract. Co-authors may
                  present the paper during the conference on their behalf.
                </p>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── RESEARCH AREAS ────────────────────────────────── */}
        <section className="border-t border-rule bg-surface">
          <div className="shell py-20 md:py-28">
            <div className="border-b border-rule pb-3 mb-14">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Scope</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md mt-4">Research Areas</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                  Abstracts are invited across the following research areas.
                </p>
              </TextReveal>
            </div>

            <StaggerReveal
              as="ol"
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.04}
            >
              {researchAreas.map((area, idx) => (
                <li
                  key={area}
                  className="flex gap-5 border-b border-rule py-5 list-none"
                >
                  <span className="eyebrow text-primary/50 shrink-0 pt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.9375rem] leading-snug">{area}</span>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="bg-primary-deep">
          <div className="shell py-20 md:py-28 text-center">
            <MaskReveal>
              <h2 className="display-lg text-white">Ready to submit?</h2>
            </MaskReveal>
            <TextReveal delay={0.1}>
              <p className="mt-5 text-white/70 max-w-xl mx-auto leading-relaxed">
                Deadline: 25 December 2026. Send your abstract to{" "}
                <a
                  href={`mailto:${conference.email}`}
                  className="text-white/90 underline underline-offset-2 hover:text-white transition-colors"
                >
                  {conference.email}
                </a>
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${conference.email}`}
                  className="inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
                >
                  Submit Abstract →
                </a>
                <Link
                  to="/registration"
                  className="text-sm text-white/70 underline underline-offset-4 hover:text-white transition-colors"
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

/* ── SECTION BLOCK ───────────────────────────────────────────── */
function SectionBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-14 border-t border-rule pt-6 first:mt-0 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-5">
        <HorizontalReveal>
          <span className="eyebrow text-muted-foreground">{index}</span>
        </HorizontalReveal>
        <MaskReveal delay={0.1}>
          <h2 className="display-md">{title}</h2>
        </MaskReveal>
      </div>
      {children}
    </div>
  );
}
