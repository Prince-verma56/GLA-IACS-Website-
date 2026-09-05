import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { conference, sightseeing, sponsorTiers } from "@/lib/conference";
import campus from "@/assets/campus-hero.jpg";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
  ParallaxImage,
} from "@/components/motion/ScrollReveal";
import { ConcentricPulse, ScientificGrid, HeartbeatLine, PulseDivider } from "@/components/graphics/ConferenceGraphics";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [
      { title: "Venue & Sponsorship — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content: `Venue details, sightseeing and sponsorship opportunities for the ${conference.name} at GLA University, Mathura.`,
      },
      { property: "og:title", content: "Venue & Sponsorship — IACS 2027" },
      {
        property: "og:description",
        content: "GLA University, Mathura — conference venue, sightseeing and sponsorship packages.",
      },
    ],
  }),
  component: Venue,
});

/* ── PAGE ─────────────────────────────────────────────────────── */

function Venue() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── 1. SPONSORSHIP ──────────────────────────────── */}
        <SponsorshipSection />

        {/* ── EDITORIAL RULE ──────────────────────────────── */}
        <div className="shell">
          <div className="border-t border-rule" />
        </div>

        {/* ── 2 & 3. EXISTING VENUE + SIGHTSEEING ─────────── */}
        <VenueContent />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── SPONSORSHIP SECTION ──────────────────────────────────────── */

function SponsorshipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* Tier-specific entrance animations */
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        /* 01 Main — vertical reveal */
        gsap.from(".gsap-tier-main", {
          scrollTrigger: { trigger: ".gsap-tier-main", start: "top 88%", once: true },
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
        /* 02 Platinum — horizontal reveal */
        gsap.from(".gsap-tier-platinum", {
          scrollTrigger: { trigger: ".gsap-tier-platinum", start: "top 88%", once: true },
          x: 30,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        });
        /* 03 Gold — masked upward reveal */
        gsap.from(".gsap-tier-gold", {
          scrollTrigger: { trigger: ".gsap-tier-gold", start: "top 90%", once: true },
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        });
        /* 04 Silver — scale + opacity */
        gsap.from(".gsap-tier-silver", {
          scrollTrigger: { trigger: ".gsap-tier-silver", start: "top 90%", once: true },
          scale: 0.97,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.2,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="sponsorship-heading"
    >
      {/* ── Intro band — dark editorial ── */}
      <div className="relative overflow-hidden bg-primary-deep pt-[74px]">
        <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
        <ConcentricPulse className="absolute -right-20 -top-20 h-[360px] w-[360px] text-white opacity-30" />
        <div className="shell relative z-10 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">Sponsorship</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 id="sponsorship-heading" className="display-lg text-white">
                  Partner with IACS 2027
                </h1>
              </MaskReveal>
              <TextReveal delay={0.25}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  Support an international academic gathering connecting cardiovascular scientists,
                  clinicians, researchers and healthcare professionals.
                </p>
              </TextReveal>
              <TextReveal delay={0.35}>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45">
                  Four sponsorship tiers are available. Each offers distinct visibility across
                  the conference programme, materials and venue.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tier grid ── */}
      <div className="shell py-16 md:py-24">

        {/* ── 01 Main Event — full-width featured tier ── */}
        <TierCard
          gsapClass="gsap-tier-main"
          number="01"
          title="Main Event Sponsor"
          price="INR 5 Lakh"
          benefits={sponsorTiers[0]?.benefits ?? []}
          featured
        />

        {/* ── 02–04 Remaining tiers ── */}
        <div className="mt-0 grid gap-0 md:grid-cols-3">
          <TierCard
            gsapClass="gsap-tier-platinum"
            number="02"
            title="Platinum Sponsor"
            price="INR 3 Lakh"
            benefits={sponsorTiers[1]?.benefits ?? []}
          />
          <TierCard
            gsapClass="gsap-tier-gold"
            number="03"
            title="Gold Sponsor"
            price="INR 2 Lakh"
            benefits={sponsorTiers[2]?.benefits ?? []}
          />
          <TierCard
            gsapClass="gsap-tier-silver"
            number="04"
            title="Silver Sponsor"
            price="INR 1 Lakh"
            benefits={sponsorTiers[3]?.benefits ?? []}
          />
        </div>

        {/* ── Subtle CTA ── */}
        <TextReveal delay={0.1}>
          <div className="mt-16 border-t border-rule pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">Sponsorship Enquiries</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-md">
                Interested in partnering with IACS 2027? Contact the conference secretariat for
                further information.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-3 border border-rule px-7 py-3.5 text-[0.875rem] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Contact Secretariat <span aria-hidden>→</span>
            </Link>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}

/* ── TIER CARD ────────────────────────────────────────────────── */

function TierCard({
  gsapClass,
  number,
  title,
  price,
  benefits,
  featured = false,
}: {
  gsapClass: string;
  number: string;
  title: string;
  price: string;
  benefits: string[];
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article
        className={`${gsapClass} group relative border border-rule border-b-0 md:border-b-0 transition-colors duration-500 hover:border-primary/50`}
      >
        {/* Top accent line — animates on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="grid gap-0 md:grid-cols-12">
          {/* Left — identity */}
          <div className="md:col-span-5 border-b border-rule md:border-b-0 md:border-r md:border-rule px-6 py-10 md:px-10 md:py-12 group-hover:border-primary/30 transition-colors duration-500">
            <span className="eyebrow text-primary/50">{number}</span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {title}
            </p>
            <p className="mt-6 font-[family-name:var(--font-display)] text-[2.125rem] leading-[1.1] tracking-tight text-foreground group-hover:translate-y-[-2px] transition-transform duration-400">
              {price}
            </p>
          </div>

          {/* Right — benefits */}
          <div className="md:col-span-7 px-6 py-10 md:px-10 md:py-12">
            <p className="eyebrow text-muted-foreground mb-6">Includes</p>
            <ul className="space-y-3 group-hover:translate-y-[-2px] transition-transform duration-400">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-snug">
                  <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${gsapClass} group relative border-t border-r border-b border-rule first:border-l md:border-l md:border-r-0 md:last:border-r transition-colors duration-500 hover:border-primary/40`}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="px-6 py-8 md:px-7 md:py-10 h-full flex flex-col">
        {/* Identity */}
        <div className="border-b border-rule pb-7 group-hover:border-primary/25 transition-colors duration-500">
          <span className="eyebrow text-primary/40 group-hover:text-primary/70 transition-colors duration-400">
            {number}
          </span>
          <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.17em] text-muted-foreground">
            {title}
          </p>
          <p className="mt-5 font-[family-name:var(--font-display)] text-[1.625rem] leading-tight tracking-tight text-foreground group-hover:translate-y-[-2px] transition-transform duration-400">
            {price}
          </p>
        </div>

        {/* Benefits */}
        <ul className="mt-6 space-y-2.5 flex-1 group-hover:translate-y-[-1px] transition-transform duration-400">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-snug text-muted-foreground">
              <span className="mt-[6px] h-px w-3 shrink-0 bg-primary/50" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ── EXISTING VENUE + SIGHTSEEING CONTENT (preserved exactly) ─── */

function VenueContent() {
  return (
    <section className="shell py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading index="01" title="Conference Venue" />
          <TextReveal>
            <p className="mt-6 leading-relaxed text-muted-foreground font-medium">
              Institute of Pharmaceutical Research
              <br />
              GLA University, Mathura - 281406
              <br />
              Uttar Pradesh, India
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The conference is organized by the Institute of Pharmaceutical Research, GLA University,
              Mathura.
            </p>
          </TextReveal>

          <SectionHeading index="02" title="Sightseeing around Mathura" />
          <TextReveal>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mathura is a holy city situated on the banks of the Yamuna River, with many places of
              historic and religious importance in Mathura and its neighboring towns.
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="mt-4 leading-relaxed text-muted-foreground mb-4">
              Vrindavan, the twin city of Mathura, is closely associated with Lord Krishna and is
              known for its many temples and rich cultural heritage.
            </p>
          </TextReveal>
          <StaggerReveal as="ul" className="divide-y divide-rule border-y border-rule">
            {sightseeing.map((item, i) => (
              <li key={item.place} className="flex gap-6 py-5">
                <span className="eyebrow shrink-0 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">
                  <strong>{item.place}</strong>{" "}
                  <span className="text-muted-foreground">— {item.city}</span>
                </span>
              </li>
            ))}
          </StaggerReveal>
        </div>

        <aside className="md:col-span-5">
          <ParallaxImage
            src={campus}
            alt="GLA University campus"
            className="rounded-md shadow-sm h-[600px]"
          />
        </aside>
      </div>
    </section>
  );
}
