import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { InternalPageHero } from "@/components/InternalPageHero";
import {
  HorizontalReveal,
  MaskReveal,
  StaggerReveal,
  TextReveal,
} from "@/components/motion/ScrollReveal";
import { EditorialMediaBlock } from "@/components/editorial/EditorialMediaBlock";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { ScientificEditorialMotif } from "@/components/editorial/ScientificEditorialMotif";
import { SectionTransition } from "@/components/editorial/SectionTransition";
import { orations, symposia, youngInvestigatorAwards } from "@/lib/conference";
import { pageHeroes } from "@/lib/pageHeroes";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards, Orations & Symposia — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Named orations, scientific symposia and young investigator awards at the IACS India Section International Conference 2027, GLA University, Mathura.",
      },
      { property: "og:title", content: "Awards, Orations & Symposia — IACS 2027" },
      {
        property: "og:description",
        content: "Named scientific sessions and young investigator awards at IACS 2027.",
      },
    ],
  }),
  component: Awards,
});

function Awards() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <InternalPageHero hero={pageHeroes.awards} />

        <EditorialSection className="py-16 md:py-20">
          <ScientificEditorialMotif
            variant="line"
            className="absolute inset-x-0 bottom-0 h-24 w-full text-primary opacity-[0.08]"
          />
          <div className="shell relative">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-4">
                <HorizontalReveal>
                  <p className="eyebrow text-primary">Scientific recognition</p>
                </HorizontalReveal>
              </div>
              <div className="md:col-span-8">
                <MaskReveal delay={0.08}>
                  <h2 className="display-md max-w-2xl">
                    Celebrating exemplary contributions to cardiovascular science
                  </h2>
                </MaskReveal>
                <TextReveal delay={0.16}>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    IACS 2027 brings together named orations, scientific symposia and young
                    investigator awards as part of its academic programme.
                  </p>
                </TextReveal>
              </div>
            </div>
          </div>
        </EditorialSection>

        <SectionTransition variant="brush" />

        <EditorialSection tone="ivory" className="py-16 md:py-24">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <HorizontalReveal>
                  <p className="eyebrow text-primary">01 — Named sessions</p>
                </HorizontalReveal>
                <MaskReveal delay={0.08}>
                  <h2 className="display-lg mt-5">Orations</h2>
                </MaskReveal>
                <TextReveal delay={0.16}>
                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                    These named orations honour leaders whose work has shaped cardiovascular
                    sciences and related disciplines.
                  </p>
                </TextReveal>
              </div>
              <TextReveal className="md:col-span-7" delay={0.12}>
                <EditorialMediaBlock
                  src="/images/programme/scientific-conference.jpg"
                  alt="Researcher delivering a cardiovascular science lecture to an academic audience"
                  className="aspect-[16/9] w-full"
                  caption="Scientific exchange"
                />
              </TextReveal>
            </div>

            <StaggerReveal
              as="ol"
              className="mt-14 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.05}
            >
              {orations.map((oration, index) => (
                <li
                  key={oration}
                  className="flex gap-4 border-b border-rule px-0 py-5 sm:px-5 sm:odd:border-r lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n)]:border-r-0"
                >
                  <span className="eyebrow shrink-0 pt-0.5 text-primary/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-snug tracking-tight">
                    {oration}
                  </span>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </EditorialSection>

        <SectionTransition variant="green-entry" />

        <EditorialSection tone="green" className="py-16 md:py-24">
          <ScientificEditorialMotif
            variant="all"
            className="absolute inset-0 h-full w-full text-white opacity-[0.07]"
          />
          <div className="shell relative grid gap-12 md:grid-cols-12 md:items-center md:gap-8">
            <div className="md:col-span-5">
              <HorizontalReveal>
                <p className="eyebrow text-white/45">02 — Scientific symposia</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-5 text-white">Focused scientific dialogue</h2>
              </MaskReveal>
              <StaggerReveal as="ol" className="mt-9 border-t border-white/15" stagger={0.06}>
                {symposia.map((symposium, index) => (
                  <li key={symposium} className="flex gap-4 border-b border-white/15 py-5">
                    <span className="eyebrow shrink-0 pt-0.5 text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] font-medium leading-snug text-white/90">
                      {symposium}
                    </span>
                  </li>
                ))}
              </StaggerReveal>
            </div>

            <TextReveal className="order-3 md:order-none md:col-span-2" delay={0.12}>
              <EditorialMediaBlock
                src="/images/programme/scientific-symposium.jpg"
                alt="Early-career researcher discussing work at a scientific poster session"
                className="aspect-[3/2] w-full md:aspect-[3/4]"
                imageClassName="opacity-75"
                caption="Emerging research"
              />
            </TextReveal>

            <div className="md:col-span-5">
              <HorizontalReveal>
                <p className="eyebrow text-white/45">03 — Young investigators</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-5 text-white">Awards</h2>
              </MaskReveal>
              <TextReveal delay={0.16}>
                <p className="mt-5 max-w-md leading-relaxed text-white/60">
                  Recognition for promising researchers contributing original work to the field.
                </p>
              </TextReveal>
              <StaggerReveal as="ol" className="mt-9 border-t border-white/15" stagger={0.06}>
                {youngInvestigatorAwards.map((award, index) => (
                  <li key={award} className="flex gap-4 border-b border-white/15 py-5">
                    <span className="eyebrow shrink-0 pt-0.5 text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] font-medium leading-snug text-white/90">
                      {award}
                    </span>
                  </li>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </EditorialSection>

        <SectionTransition variant="green-exit" />

        <EditorialSection className="py-16 text-center md:py-20">
          <ScientificEditorialMotif
            variant="line"
            className="absolute inset-0 h-full w-full text-primary opacity-[0.08]"
          />
          <div className="shell relative">
            <TextReveal>
              <p className="eyebrow text-primary">Awards & Orations <span aria-hidden>→</span> Programme</p>
            </TextReveal>
            <MaskReveal delay={0.08}>
              <h2 className="display-md mt-4">Plan your IACS 2027 experience</h2>
            </MaskReveal>
            <TextReveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                The detailed day-wise timetable will be published once it is confirmed by the
                scientific committee.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <Link to="/programme" className="link-arrow mt-7 inline-flex">
                View the programme <span aria-hidden>→</span>
              </Link>
            </TextReveal>
          </div>
        </EditorialSection>
      </main>
      <SectionTransition variant="footer-entry" />
      <SiteFooter />
    </div>
  );
}
