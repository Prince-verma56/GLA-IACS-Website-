import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "./motion/ScrollReveal";
import { ConcentricPulse, ScientificGrid } from "./graphics/ConferenceGraphics";

export function PageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── Dark editorial page hero ──────────────────────── */}
        <section className="relative overflow-hidden bg-primary-deep pt-[74px]">
          {/* Subtle graphic texture */}
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
          <ConcentricPulse className="absolute -right-20 -top-20 h-[340px] w-[340px] text-white opacity-30" />

          <div className="shell relative z-10 grid gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">{eyebrow}</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 className="display-lg text-white">{title}</h1>
              </MaskReveal>
              {intro && (
                <TextReveal delay={0.25}>
                  <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                    {intro}
                  </p>
                </TextReveal>
              )}
            </div>
          </div>
        </section>

        {/* ── Page content ─────────────────────────────────── */}
        <section className="shell py-20 md:py-28">{children}</section>
      </main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule-top flex items-baseline gap-6 pt-6 mt-14 first:mt-0">
      <HorizontalReveal>
        <span className="eyebrow text-muted-foreground">{index}</span>
      </HorizontalReveal>
      <MaskReveal delay={0.1}>
        <h2 className="display-md">{title}</h2>
      </MaskReveal>
    </div>
  );
}

export function NameList({ items }: { items: string[] }) {
  return (
    <StaggerReveal
      as="ul"
      className="mt-8 grid gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((n) => (
        <li key={n} className="border-b border-rule py-4 text-sm leading-relaxed">
          {n}
        </li>
      ))}
    </StaggerReveal>
  );
}

export function PlaceholderNote({ what }: { what: string }) {
  return (
    <div className="mt-6 rounded-sm bg-muted p-4 border-l-4 border-primary">
      <p className="text-sm text-muted-foreground">
        <strong className="font-semibold text-foreground">Content Placeholder: </strong>
        {what}
      </p>
    </div>
  );
}
