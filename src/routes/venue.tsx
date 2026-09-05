import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { conference, sightseeing } from "@/lib/conference";
import campus from "@/assets/campus-hero.jpg";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
  ParallaxImage,
} from "@/components/motion/ScrollReveal";
import {
  ConcentricPulse,
  ScientificGrid,
  HeartbeatLine,
  PulseDivider,
} from "@/components/graphics/ConferenceGraphics";

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [
      { title: "Venue & Destination — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content: `Conference venue, campus information and sightseeing destinations for the ${conference.name} at GLA University, Mathura.`,
      },
      { property: "og:title", content: "Venue & Destination — IACS 2027" },
      {
        property: "og:description",
        content:
          "GLA University, Mathura — conference venue, sightseeing and destination guide for IACS 2027.",
      },
    ],
  }),
  component: Venue,
});

function Venue() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary-deep pt-[74px]">
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
          <ConcentricPulse className="absolute -right-20 -top-20 h-[360px] w-[360px] text-white opacity-25" />
          <HeartbeatLine className="absolute bottom-0 left-0 right-0 text-white opacity-[0.07] w-full" />
          <div className="shell relative z-10 grid gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">Venue &amp; Destination</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 className="display-lg text-white">GLA University, Mathura</h1>
              </MaskReveal>
              <TextReveal delay={0.25}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  IACS 2027 is hosted at the Institute of Pharmaceutical Research, GLA University —
                  located in the historic city of Mathura, Uttar Pradesh.
                </p>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── CAMPUS IMAGE HERO ─────────────────────────────── */}
        <section className="relative h-[420px] md:h-[540px] overflow-hidden">
          <img
            src={campus}
            alt="GLA University campus aerial view"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </section>

        {/* ── CONFERENCE VENUE ──────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7 space-y-10">
              <div>
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">Conference Venue</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md">Institute of Pharmaceutical Research</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="mt-6 leading-relaxed text-foreground/65">
                    The Institute of Pharmaceutical Research (IPR) at GLA University is a leading
                    pharmaceutical sciences institution in North India, bringing together
                    multidisciplinary research in drug discovery, cardiovascular pharmacology and
                    translational medicine.
                  </p>
                </TextReveal>
              </div>

              <TextReveal delay={0.25}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Address", value: conference.address },
                    { label: "Conference Dates", value: conference.dates },
                    { label: "Email", value: conference.email },
                    { label: "Phone", value: conference.phone },
                  ].map((item) => (
                    <div key={item.label} className="border border-rule p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              </TextReveal>
            </div>

            <aside className="md:col-span-5">
              <ParallaxImage
                src="/Institute of Pharmaceutical Research.png"
                alt="Institute of Pharmaceutical Research, GLA University"
                className="rounded-sm shadow-sm h-[440px]"
              />
            </aside>
          </div>
        </section>

        <PulseDivider className="mx-auto text-rule" />

        {/* ── SIGHTSEEING ───────────────────────────────────── */}
        <section className="bg-[#f7f5f0] py-20 md:py-28">
          <div className="shell grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">Explore Mathura</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Sightseeing &amp; Destinations</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-6 text-foreground/60 leading-relaxed text-sm">
                  Mathura is a holy city on the banks of the Yamuna River, with many places of
                  historic and religious significance in and around the region.
                </p>
              </TextReveal>
              <TextReveal delay={0.25}>
                <p className="mt-4 text-foreground/60 leading-relaxed text-sm">
                  Vrindavan, the twin city of Mathura, is closely associated with Lord Krishna and
                  is known for its many temples and rich cultural heritage. Agra and the Taj Mahal
                  are also within easy reach.
                </p>
              </TextReveal>
            </div>

            <div className="md:col-span-8">
              <StaggerReveal as="ul" className="divide-y divide-rule border-y border-rule" stagger={0.05}>
                {sightseeing.map((item, i) => (
                  <li key={item.place} className="flex items-center gap-6 py-5">
                    <span className="eyebrow shrink-0 text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 leading-relaxed">
                      <strong className="font-medium text-foreground">{item.place}</strong>
                      <span className="ml-2 text-sm text-foreground/50">— {item.city}</span>
                    </span>
                  </li>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* ── SPONSORSHIP CTA STRIP ─────────────────────────── */}
        <section className="bg-primary-deep py-12 md:py-16">
          <div className="shell flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <MaskReveal>
                <p className="text-white font-semibold text-lg">
                  Interested in Sponsoring IACS 2027?
                </p>
              </MaskReveal>
              <TextReveal delay={0.1}>
                <p className="mt-1 text-sm text-white/55">
                  Four sponsorship tiers available — Main Event, Platinum, Gold and Silver.
                </p>
              </TextReveal>
            </div>
            <Link
              to="/sponsorship"
              className="shrink-0 inline-block border border-white/30 px-7 py-3 text-sm uppercase tracking-widest text-white/80 transition-all hover:border-white/60 hover:text-white"
            >
              View Sponsorship →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
