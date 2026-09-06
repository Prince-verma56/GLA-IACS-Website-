import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import { sponsorTiers, conference } from "@/lib/conference";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { PulseDivider } from "@/components/graphics/ConferenceGraphics";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Partner with IACS 2027. Sponsorship opportunities for the International Academy of Cardiovascular Sciences India Section conference at GLA University, Mathura.",
      },
      { property: "og:title", content: "Sponsorship — IACS 2027" },
      {
        property: "og:description",
        content:
          "Four sponsorship tiers available — Main Event, Platinum, Gold and Silver. Support the leading cardiovascular sciences conference in India.",
      },
    ],
  }),
  component: SponsorshipPage,
});

const TIER_ACCENTS: Record<string, string> = {
  "Main Event Sponsor": "#b8953a",
  "Platinum Sponsor": "#8fa8c4",
  "Gold Sponsor": "#c4a95a",
  "Silver Sponsor": "#8a9aa6",
};

function SponsorshipPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        /* Main tier — vertical reveal */
        gsap.from(".gsap-tier-main", {
          scrollTrigger: { trigger: ".gsap-tier-main", start: "top 88%", once: true },
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });

        /* Secondary tiers — staggered from left */
        gsap.from(".gsap-tier-secondary", {
          scrollTrigger: { trigger: ".gsap-tier-secondary", start: "top 85%", once: true },
          x: -24,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        });
      });
    },
    { scope: pageRef },
  );

  const [mainTier, ...otherTiers] = sponsorTiers;

  if (!mainTier) return null;

  return (
    <div ref={pageRef} className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <InternalPageHero hero={pageHeroes.sponsorship}>
          <TextReveal delay={0.35}>
            <p className="mt-2 text-sm leading-relaxed text-foreground/50 max-w-lg">
              Four sponsorship tiers are available. Each offers distinct visibility across the
              conference programme, materials and venue.
            </p>
          </TextReveal>
        </InternalPageHero>

        {/* ── MAIN EVENT SPONSOR ─────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="border-b border-rule pb-3 mb-14">
            <HorizontalReveal>
              <p className="eyebrow text-primary">Premier Sponsorship</p>
            </HorizontalReveal>
          </div>

          <div
            className="gsap-tier-main grid gap-0 md:grid-cols-2 border border-rule overflow-hidden"
            style={{ borderTopColor: TIER_ACCENTS["Main Event Sponsor"], borderTopWidth: "3px" }}
          >
            {/* Left: Tier info */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-rule">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-5">01</p>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3"
                style={{ color: TIER_ACCENTS["Main Event Sponsor"] }}
              >
                {mainTier.tier}
              </p>
              <p className="text-5xl font-bold tracking-tight text-foreground mb-8">
                {mainTier.amount}
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
                The highest-visibility sponsorship tier — your organisation featured prominently
                across all conference materials, branding and the main auditorium.
              </p>
            </div>

            {/* Right: Benefits */}
            <div className="p-10 md:p-14">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-6">
                Includes
              </p>
              <ul className="space-y-4">
                {mainTier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: TIER_ACCENTS["Main Event Sponsor"] }}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PulseDivider className="mx-auto text-rule" />

        {/* ── SECONDARY TIERS ────────────────────────────────── */}
        <section className="shell py-16 md:py-24">
          <div className="border-b border-rule pb-3 mb-14">
            <HorizontalReveal>
              <p className="eyebrow text-primary">Additional Tiers</p>
            </HorizontalReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {otherTiers.map((tier, i) => (
              <div
                key={tier.tier}
                className="gsap-tier-secondary flex flex-col border border-rule overflow-hidden"
                style={{ borderTopColor: TIER_ACCENTS[tier.tier], borderTopWidth: "2px" }}
              >
                <div className="p-8 border-b border-rule">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-4">
                    0{i + 2}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2"
                    style={{ color: TIER_ACCENTS[tier.tier] }}
                  >
                    {tier.tier}
                  </p>
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {tier.amount}
                  </p>
                </div>

                <div className="flex-1 p-8">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/65"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                          style={{ background: TIER_ACCENTS[tier.tier] }}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ENQUIRY CTA ────────────────────────────────────── */}
        <section className="bg-primary-deep py-16 md:py-20">
          <div className="shell flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <MaskReveal>
                <h2 className="display-sm text-white">Interested in Sponsoring?</h2>
              </MaskReveal>
              <TextReveal delay={0.15}>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  Contact the organising secretariat to discuss sponsorship arrangements,
                  customised packages or any questions about the conference.
                </p>
              </TextReveal>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={`mailto:${conference.email}`}
                className="inline-block border border-white/30 px-8 py-3 text-sm uppercase tracking-widest text-white/80 transition-all hover:border-white/60 hover:text-white"
              >
                Email Secretariat
              </a>
              <a
                href={`tel:${conference.phone}`}
                className="inline-block bg-white/10 px-8 py-3 text-sm uppercase tracking-widest text-white/80 transition-all hover:bg-white/15 hover:text-white"
              >
                {conference.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
