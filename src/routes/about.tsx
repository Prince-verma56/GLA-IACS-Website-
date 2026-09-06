import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
  ImageReveal,
} from "@/components/motion/ScrollReveal";
import {
  ConcentricPulse,
  ScientificGrid,
  HeartbeatLine,
  PulseDivider,
} from "@/components/graphics/ConferenceGraphics";
import { conference, keyDates, researchAreas } from "@/lib/conference";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { MedicalFloatingVisuals } from "@/components/Elements/MedicalFloatingVisuals";

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
        <InternalPageHero hero={pageHeroes.about}>
          <TextReveal delay={0.35}>
            <div className="border-l-2 border-primary/20 pl-5">
              <p className="text-sm uppercase tracking-[0.18em] text-foreground/50">Conference Theme</p>
              <p className="mt-2 text-xl font-semibold leading-snug text-foreground">
                {conference.theme.line1}
                <br />
                {conference.theme.line2}
              </p>
            </div>
          </TextReveal>
        </InternalPageHero>

        {/* ── ABOUT IACS ────────────────────────────────────── */}
        <section className="shell relative py-24 md:py-32">
          <MedicalFloatingVisuals 
            visuals={[
              { src: "/images/Elements/Heart.png", side: "right", className: "top-10 -right-[5%] w-64 md:w-96", opacity: 0.15 },
              { src: "/images/Elements/Stethoscop.png", side: "left", className: "bottom-10 -left-[10%] w-48 md:w-72", opacity: 0.20, delay: 0.15 }
            ]}
          />
          <div className="relative z-10 grid gap-12 md:grid-cols-12 md:items-center">
            {/* Editorial Image */}
            <div className="md:col-span-5 relative order-last md:order-first mt-12 md:mt-0">
              <ImageReveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-2xl rounded-br-2xl shadow-xl border border-black/5 bg-primary-deep/5">
                  {conference.aboutAcademyImage ? (
                    <img
                      src={conference.aboutAcademyImage}
                      alt="IACS"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                      <ScientificGrid className="absolute inset-0 h-full w-full opacity-50" />
                    </div>
                  )}
                  <HeartbeatLine className="absolute bottom-6 left-0 right-0 w-full text-primary opacity-20 mix-blend-multiply" />
                </div>
              </ImageReveal>
              <div className="absolute -z-10 -bottom-4 -left-4 w-2/3 h-1/2 bg-accent/40 rounded-3xl" />
            </div>
            {/* Content */}
            <div className="md:col-span-7 space-y-6 md:pl-8 lg:pl-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-2">Who We Are</p>
              </HorizontalReveal>
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

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-background">
          <svg className="w-full block text-[#f7f5f0] h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ── HOST INSTITUTION ──────────────────────────────── */}
        <section className="bg-[#f7f5f0] py-24 md:py-32">
          <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
            {/* Content */}
            <div className="md:col-span-7 space-y-10 md:pr-8 lg:pr-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-2">Host Institution</p>
              </HorizontalReveal>
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
            {/* Editorial Image */}
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <ImageReveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-2xl rounded-bl-2xl shadow-xl border border-black/5 bg-primary/5">
                  {conference.aboutInstituteImage ? (
                    <img
                      src={conference.aboutInstituteImage}
                      alt="Institute of Pharmaceutical Research"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                      <ScientificGrid className="absolute inset-0 h-full w-full opacity-50" />
                    </div>
                  )}
                </div>
              </ImageReveal>
              <div className="absolute -z-10 -top-4 -right-4 w-2/3 h-1/2 bg-white/60 rounded-3xl border border-black/5" />
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
        <section className="shell relative py-20 md:py-28">
          <MedicalFloatingVisuals 
            visuals={[
              { src: "/images/Elements/Body Visual.png", side: "right", className: "-bottom-20 -right-[15%] w-96 md:w-[600px]", opacity: 0.12 }
            ]}
          />
          <div className="relative z-10 grid gap-16 md:grid-cols-12 mb-14">
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
        <section className="relative overflow-hidden bg-primary-deep py-24 md:py-32">
          {/* Top Curve Overlay for seamless background image transition */}
          <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
            <svg className="w-full block text-background h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" />
            </svg>
          </div>
          {conference.joinConferenceBackground ? (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${conference.joinConferenceBackground}")` }}
            />
          ) : (
            <>
              <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.04]" />
              <ConcentricPulse className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] text-white opacity-[0.15]" />
            </>
          )}
          
          {/* Subtle vignette/gradient to ensure white text remains readable, without aggressive green tinting */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-primary-deep/20" />

          <div className="shell relative z-10 flex flex-col items-center text-center gap-6">
            <MaskReveal>
              <h2 className="display-md text-white">Join IACS 2027</h2>
            </MaskReveal>
            <TextReveal delay={0.15}>
              <p className="max-w-lg text-white/70 leading-relaxed text-lg">
                Submit your abstract, register as a delegate or explore sponsorship opportunities
                for this landmark cardiovascular sciences conference.
              </p>
            </TextReveal>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a
                href={conference.registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-solid bg-accent text-primary-deep hover:bg-white px-8 py-3.5 shadow-xl"
              >
                Register Now
              </a>
              <Link to="/abstracts" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3.5 backdrop-blur-sm">
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
