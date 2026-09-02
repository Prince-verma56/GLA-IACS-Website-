import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Reveal } from "./Reveal";

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
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-rule bg-surface pt-[74px]">
          <div className="shell grid gap-8 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-4">
              <p className="eyebrow text-primary">{eyebrow}</p>
            </div>
            <div className="md:col-span-8">
              <h1 className="display-lg">{title}</h1>
              {intro && (
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {intro}
                </p>
              )}
            </div>
          </div>
        </section>
        <Reveal as="section" className="shell py-20 md:py-28">
          {children}
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule-top flex items-baseline gap-6 pt-6">
      <span className="eyebrow text-muted-foreground">{index}</span>
      <h2 className="display-md">{title}</h2>
    </div>
  );
}

export function NameList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
      {items.map((n) => (
        <li key={n} className="border-b border-rule py-4 text-sm leading-relaxed">
          {n}
        </li>
      ))}
    </ul>
  );
}

export function PlaceholderNote({ what }: { what: string }) {
  return (
    <div className="mt-6 rounded-md bg-muted p-4 border-l-4 border-primary">
      <p className="text-sm text-muted-foreground">
        <strong className="font-semibold text-foreground">Content Placeholder: </strong>
        {what}
      </p>
    </div>
  );
}
