import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "./motion/ScrollReveal";
import { InternalPageHero } from "./InternalPageHero";
import { PageHeroConfig } from "@/lib/pageHeroes";

export function PageLayout({
  eyebrow,
  title,
  intro,
  heroConfig,
  children,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  heroConfig?: PageHeroConfig;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── Editorial page hero ──────────────────────── */}
        {heroConfig ? (
          <InternalPageHero hero={heroConfig} />
        ) : (
          <InternalPageHero 
            hero={{
              eyebrow: eyebrow || "",
              title: title || "",
              description: intro || "",
              image: "",
              imageAlt: title || "Page Image"
            }} 
          />
        )}

        {/* ── Page content ─────────────────────────────────── */}
        <section className="shell relative py-20 md:py-28">{children}</section>
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
