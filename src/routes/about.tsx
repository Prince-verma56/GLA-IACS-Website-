import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import {
  ConcentricPulse,
  ScientificGrid,
  HeartbeatLine,
  PulseDivider,
} from "@/components/graphics/ConferenceGraphics";
import { conference, keyDates, researchAreas } from "@/lib/conference";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IACS 2027 — International Conference, GLA University Mathura" },
      {
        name: "description",
        content:
          "Learn about the International Academy of Cardiovascular Sciences (IACS) India Section International Conference 2027, hosted by the Institute of Pharmaceutical Research, GLA University, Mathura.",
      },
      { property: "og:title", content: "About IACS 2027 — International Conference" },
      {
        property: "og:description",
        content:
          "Transforming Cardiovascular Care Through Science, Technology and Innovation. 11–13 February 2027, Mathura, India.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary-deep pt-[74px]">
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
          <ConcentricPulse className="absolute -right-24 -top-24 h-[400px] w-[400px] text-white opacity-25" />
          <div className="shell relative z-10 grid gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">About the Conference</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 className="display-lg text-white">IACS 2027</h1>
              </MaskReveal>
              <TextReveal delay={0.25}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  International Academy of Cardiovascular Sciences — India Section
                  International Conference 2027.
                </p>
              </TextReveal>
              <TextReveal delay={0.35}>
                <div className="mt-8 border-l-2 border-white/20 pl-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/40">Conference Theme</p>
                  <p className="mt-2 text-xl font-semibold leading-snug text-white">
                    {conference.theme.line1}
                    <br />
                    {conference.theme.line2}
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── ABOUT IACS ────────────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Who We Are</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8 space-y-6">
              <MaskReveal delay={0.1}>
                <h2 className="display-md">International Academy of Cardiovascular Sciences</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="text-[1.0625rem] leading-relaxed text-foreground/70">
                  The International Academy of Cardiovascular Sciences (IACS) is a globally
                  recognized scientific organization dedicated to advancing cardiovascular research,
                  education and clinical practice. The IACS – India Section brings together leading
                  cardiovascular scientists, clinicians, researchers and healthcare professionals
                  across India and internationally.
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-[1.0625rem] leading-relaxed text-foreground/70">
                  IACS 2027 is the India Section's International Conference — a premier platform
                  for sharing cutting-edge cardiovascular research, fostering international
                  collaborations and presenting innovations in science, technology and clinical
                  therapeutics.
                </p>
              </TextReveal>
            </div>
          </div>
        </section>

        <PulseDivider className="mx-auto text-rule" />

        {/* ── HOST INSTITUTION ──────────────────────────────── */}
        <section className="bg-[#f7f5f0] py-20 md:py-28">
          <div className="shell grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Host Institution</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8 space-y-10">
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Institute of Pharmaceutical Research, GLA University</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="text-[1.0625rem] leading-relaxed text-foreground/70">
                  The Institute of Pharmaceutical Research (IPR) at GLA University, Mathura is the
                  proud host of IACS 2027. A leading pharmaceutical sciences institution in North
                  India, IPR brings together multidisciplinary research in drug discovery,
                  cardiovascular pharmacology and translational medicine.
                </p>
              </TextReveal>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Conference Dates", value: conference.dates },
                  { label: "Location", value: "Mathura, Uttar Pradesh, India" },
                  { label: "Format", value: "In-person & Online" },
                ].map((item, i) => (
                  <StaggerReveal key={i} stagger={0.08} delay={0.1}>
                    <div className="border border-rule p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </StaggerReveal>
                ))}
              </div>
              <TextReveal delay={0.35}>
                <div className="border-t border-rule pt-6">
                  <p className="text-sm text-foreground/55">{conference.address}</p>
                </div>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── KEY DATES ─────────────────────────────────────── */}
        <section className="bg-primary-deep py-20 md:py-28 relative overflow-hidden">
          <HeartbeatLine className="absolute bottom-0 left-0 right-0 text-white opacity-[0.06] w-full" />
          <div className="shell relative z-10">
            <div className="grid gap-8 md:grid-cols-12 mb-14">
              <div className="md:col-span-4">
                <HorizontalReveal>
                  <p className="eyebrow text-white/50">Important Dates</p>
                </HorizontalReveal>
              </div>
              <div className="md:col-span-8">
                <MaskReveal delay={0.1}>
                  <h2 className="display-md text-white">Mark Your Calendar</h2>
                </MaskReveal>
              </div>
            </div>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {keyDates.map((kd, i) => (
                <div key={i} className="bg-primary-deep p-8 md:p-10">
                  <TextReveal delay={i * 0.1}>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3">
                      0{i + 1}
                    </p>
                    <p className="text-xl font-semibold text-white mb-2">{kd.date}</p>
                    <p className="text-sm leading-relaxed text-white/60">{kd.label}</p>
                  </TextReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCIENTIFIC SCOPE ──────────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12 mb-14">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Scientific Scope</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Research Areas & Topics</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-4 text-foreground/60 leading-relaxed">
                  IACS 2027 covers the full breadth of cardiovascular science — from fundamental
                  pharmacology to clinical applications, public health and emerging technologies.
                </p>
              </TextReveal>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border border-rule p-4 transition-colors hover:border-primary/40 hover:bg-accent/30"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p className="text-sm leading-relaxed text-foreground/75">{area}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="bg-[#f7f5f0] py-16 md:py-20">
          <div className="shell flex flex-col items-center text-center gap-6">
            <MaskReveal>
              <h2 className="display-md">Join IACS 2027</h2>
            </MaskReveal>
            <TextReveal delay={0.15}>
              <p className="max-w-lg text-foreground/60 leading-relaxed">
                Submit your abstract, register as a delegate or explore sponsorship opportunities
                for this landmark cardiovascular sciences conference.
              </p>
            </TextReveal>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <a
                href={conference.registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-solid px-8 py-3"
              >
                Register Now
              </a>
              <Link to="/abstracts" className="btn-outline px-8 py-3">
                Submit Abstract
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
