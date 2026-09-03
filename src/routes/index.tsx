import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HorizontalReveal, MaskReveal, TextReveal, StaggerReveal, ImageReveal, ParallaxImage } from "@/components/motion/ScrollReveal";
import { conference, keyDates, internationalSpeakers, PLACEHOLDER } from "@/lib/conference";
import auditorium from "@/assets/auditorium.jpg";
import lab from "@/assets/lab.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IACS 2027 — International Conference | GLA University, Mathura" },
      {
        name: "description",
        content:
          "Transforming Cardiovascular Care Through Science, Technology and Innovation. IACS India Section International Conference, 11–13 February 2027 at GLA University, Mathura.",
      },
      { property: "og:title", content: "IACS 2027 — International Conference, GLA University" },
      {
        property: "og:description",
        content:
          "11–13 February 2027 · GLA University, Mathura. Hosted by the Institute of Pharmaceutical Research.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isMobile, reduceMotion } = context.conditions as {
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            const tl = gsap.timeline();
            tl.from(".gsap-nav-logo, .gsap-nav-link, .gsap-nav-btn", {
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
            });
            tl.from(
              ".gsap-eyebrow, .gsap-title-1",
              { opacity: 0, duration: 0.5, stagger: 0.1 },
              "-=0.2",
            );
            tl.from(
              ".gsap-theme, .gsap-meta-wrapper, .gsap-meta-text, .gsap-btn, .gsap-hosted",
              { opacity: 0, duration: 0.5, stagger: 0.1 },
              "-=0.2",
            );
            return;
          }

          const tl = gsap.timeline();

          // 0.00: Background image begins settling
          tl.from(
            ".gsap-hero-bg",
            {
              scale: isMobile ? 1.02 : 1.04,
              duration: 1.2,
              ease: "power2.out",
            },
            0,
          );

          // 0.15: Navbar begins appearing
          tl.from(
            ".gsap-nav-logo",
            {
              y: 8,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            0.15,
          );

          tl.from(
            ".gsap-nav-link",
            {
              opacity: 0,
              x: 5,
              duration: 0.5,
              stagger: 0.05,
              ease: "power3.out",
            },
            0.2,
          );

          tl.from(
            ".gsap-nav-btn",
            {
              opacity: 0,
              scale: 0.95,
              duration: 0.5,
              ease: "power3.out",
            },
            0.35,
          );

          // 0.45: Eyebrow mask reveal
          tl.from(
            ".gsap-eyebrow",
            {
              yPercent: 100,
              opacity: 0.1,
              duration: 0.65,
              ease: "power3.out",
            },
            0.45,
          );

          // 0.65: Main title line 1 begins (staggered)
          tl.from(
            ".gsap-title-1",
            {
              yPercent: 110,
              opacity: 0,
              duration: 0.9,
              stagger: isMobile ? 0.08 : 0.12,
              ease: "power4.out",
            },
            0.65,
          );

          // 1.00: Theme continuation begins
          tl.from(
            ".gsap-theme",
            {
              y: isMobile ? 15 : 25,
              x: isMobile ? 0 : 8,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            1.0,
          );

          // 1.20: Date/location reveal
          tl.from(
            ".gsap-meta-wrapper",
            {
              clipPath: "inset(0 100% 0 0)",
              duration: 0.8,
              ease: "power3.out",
            },
            1.2,
          );

          tl.from(
            ".gsap-meta-text",
            {
              x: isMobile ? -8 : -15,
              opacity: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            1.3,
          );

          tl.from(
            ".gsap-meta-dot",
            {
              opacity: 0,
              duration: 0.5,
            },
            1.5,
          );

          // 1.60: CTA buttons begin
          tl.from(
            ".gsap-btn",
            {
              y: isMobile ? 10 : 20,
              opacity: 0,
              scale: 0.98,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            },
            1.6,
          );

          // 1.70: Hosted-by block begins
          tl.from(
            ".gsap-hosted",
            {
              opacity: 0,
              x: isMobile ? 0 : 15,
              y: isMobile ? 10 : 0,
              duration: 0.8,
              ease: "power3.out",
            },
            1.7,
          );
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <SiteHeader overHero />
      <main>
        <Hero />
        <Introduction />
        <Theme />
        <InfoStrip />
        <FeaturedSpeakers />
        <ImportantDates />
        <RegistrationCall />
        <CampusSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const words = conference.theme.line1.split(" ");
  const firstWord = words[0];
  const secondWord = words[1];
  const thirdWord = words[2];
  const restWords = words.slice(1).join(" ");

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[84px] pb-24 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <img
        src="/GLA Drone Shot.png"
        alt="GLA University campus, Mathura, drone shot"
        width={1920}
        height={1200}
        className="gsap-hero-bg absolute inset-0 h-full w-full object-cover object-[center_center]"
      />
      {/* 
        MOBILE: subtle overall dark tint with gentle vertical gradient. 
        DESKTOP: heavy left-side gradient.
      */}
      <div className="absolute inset-0 bg-black/20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] md:bg-transparent md:bg-[linear-gradient(100deg,rgba(9,26,18,0.92)_0%,rgba(9,26,18,0.6)_35%,rgba(9,26,18,0)_65%)] pointer-events-none" />
      
      {/* Navbar protection gradient */}
      <div className="absolute top-0 inset-x-0 h-32 bg-[linear-gradient(180deg,rgba(9,26,18,0.7)_0%,rgba(9,26,18,0)_100%)] pointer-events-none" />

      <div className="shell relative w-full flex flex-col justify-center">
        <div className="w-full max-w-[640px] md:pr-10 lg:pr-0 mt-4 md:mt-0">
          <div className="overflow-hidden pb-1">
            <p className="gsap-eyebrow text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.15em] text-white/85 uppercase leading-relaxed inline-block">
              IACS 2027 · India Section
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              International Conference
            </p>
          </div>

          <h1 className="mt-4 md:mt-5 flex flex-col gap-1 md:gap-3">
            <span className="font-[family-name:var(--font-display)] text-[12.5vw] leading-[1.05] tracking-tight text-white min-[390px]:text-[3rem] sm:text-[3.25rem] md:text-[3.5rem]">
              <span className="overflow-hidden block md:inline-block md:align-top">
                <span className="gsap-title-1 block pb-1 md:inline-block">{firstWord}</span>
              </span>{" "}
              {/* Desktop rendering (combined) */}
              <span className="hidden md:inline-block overflow-hidden align-top">
                <span className="gsap-title-1 inline-block pb-1">{restWords}</span>
              </span>
              {/* Mobile rendering (split) */}
              <span className="md:hidden overflow-hidden block">
                <span className="gsap-title-1 block pb-1">{secondWord}</span>
              </span>
              <span className="md:hidden overflow-hidden block">
                <span className="gsap-title-1 block pb-1">{thirdWord}</span>
              </span>
            </span>
            <span className="overflow-hidden pb-2 mt-1 md:mt-0">
              <span className="gsap-theme block font-[family-name:var(--font-display)] text-[1.25rem] leading-[1.3] tracking-tight text-white/80 sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2.125rem]">
                {conference.theme.line2}
              </span>
            </span>
          </h1>

          <div className="overflow-hidden mt-6 md:mt-8">
            <div className="gsap-meta-wrapper flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 md:gap-y-1.5 text-[0.875rem] md:text-[0.9375rem] text-white/90 lg:text-[1rem]">
              <span className="gsap-meta-text font-medium tracking-wide sm:whitespace-nowrap">
                {conference.dates}
              </span>
              <span className="gsap-meta-dot hidden sm:block text-white/40">•</span>
              <span className="gsap-meta-text leading-snug sm:leading-normal text-white/80 md:text-white/90">
                GLA University, Mathura,<br className="sm:hidden" /> Uttar Pradesh, India
              </span>
            </div>
          </div>

          <div className="mt-8 md:mt-8 flex flex-wrap gap-3 md:gap-4">
            <div className="overflow-hidden rounded p-[1px] -m-[1px]">
              <Link
                to="/registration"
                className="gsap-btn btn-solid flex items-center justify-center h-[46px] md:h-[50px] px-6 md:px-8 text-[0.875rem] md:text-[0.9375rem]"
              >
                Register Now
              </Link>
            </div>
            <div className="overflow-hidden rounded p-[1px] -m-[1px]">
              <Link
                to="/programme"
                className="gsap-btn inline-flex items-center justify-center h-[46px] md:h-[50px] border border-white/60 px-6 md:px-8 text-[0.875rem] md:text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
              >
                Explore Programme
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="gsap-hosted absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-auto md:right-10 z-10 text-left md:text-right">
        <p className="text-[0.6rem] md:text-[0.6rem] font-bold tracking-[0.2em] text-white/50 uppercase">
          Hosted by
        </p>
        <p className="mt-1 text-[0.75rem] md:text-[0.8125rem] leading-snug text-white/75 md:text-white/80">
          Institute of Pharmaceutical Research
          <span className="md:hidden">, </span>
          <br className="hidden md:block" />
          GLA University, Mathura
        </p>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <HorizontalReveal className="md:col-span-4">
          <p className="eyebrow text-primary">About the Conference</p>
        </HorizontalReveal>
        <div className="md:col-span-8">
          <MaskReveal delay={0.1}>
            <p className="text-[1.375rem] leading-[1.55] tracking-[-0.01em] md:text-[1.625rem]">
              The {conference.name} of the {conference.society}, centered on the theme "
              {conference.theme.line1} {conference.theme.line2}", will be held from {conference.dates}{" "}
              at {conference.venue}.
            </p>
          </MaskReveal>
          <TextReveal delay={0.2}>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
              The conference brings together eminent scientists, cardiologists, clinicians,
              academicians, researchers, healthcare professionals, technologists and industry leaders
              from across the globe.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              It will provide a platform for exchanging pioneering ideas, showcasing cutting-edge
              research, exploring emerging technologies and discussing innovative strategies for the
              prevention, diagnosis, treatment and management of cardiovascular diseases.
            </p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <Link to="/about" className="link-arrow mt-9 inline-block">
              Explore the Conference <span aria-hidden>→</span>
            </Link>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}

function Theme() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="shell py-24 md:py-32">
        <HorizontalReveal>
          <p className="eyebrow text-primary">Conference Theme</p>
        </HorizontalReveal>
        <MaskReveal delay={0.1}>
          <h2 className="display-lg mt-8 max-w-4xl">
            Transforming Cardiovascular Care
            <br />
            Through Science, Technology
            <br />
            <span className="text-primary">and Innovation</span>
          </h2>
        </MaskReveal>
        <TextReveal delay={0.2}>
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden
            className="mt-14 h-12 w-full text-primary/45"
          >
            <path
              d="M0 30 H420 l14 -22 l16 44 l14 -30 l12 8 H700 l18 -16 l14 30 l12 -14 H1200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
            />
          </svg>
        </TextReveal>
      </div>
    </section>
  );
}

function InfoStrip() {
  const items = [
    { k: "Dates", v: "11–13 February 2027" },
    { k: "Venue", v: "GLA University, Mathura" },
    { k: "Organised with", v: "IACS – India Section" },
  ];
  return (
    <section className="shell py-16">
      <StaggerReveal as="dl" className="grid divide-y divide-rule border-y border-rule md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((i) => (
          <div key={i.k} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
            <dt className="eyebrow text-muted-foreground">{i.k}</dt>
            <dd className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight md:text-[1.375rem]">
              {i.v}
            </dd>
          </div>
        ))}
      </StaggerReveal>
    </section>
  );
}

function FeaturedSpeakers() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-rule pt-7">
        <MaskReveal>
          <h2 className="display-md max-w-md">Featured Speakers</h2>
        </MaskReveal>
        <TextReveal delay={0.1}>
          <Link to="/speakers" className="link-arrow">
            View All Speakers <span aria-hidden>→</span>
          </Link>
        </TextReveal>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <ImageReveal>
            <img
              src={internationalSpeakers[0].image || auditorium}
              alt={internationalSpeakers[0].name}
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </ImageReveal>
          <TextReveal delay={0.2}>
            <p className="mt-5 font-[family-name:var(--font-display)] text-2xl">
              {internationalSpeakers[0].name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {internationalSpeakers[0].role && (
                <span className="block">{internationalSpeakers[0].role}</span>
              )}
              {internationalSpeakers[0].org}
            </p>
          </TextReveal>
        </div>

        <StaggerReveal className="grid gap-10 md:col-span-5" delay={0.2}>
          {internationalSpeakers.slice(1, 3).map((speaker, i) => (
            <div key={speaker.name}>
              <ImageReveal>
                <img
                  src={speaker.image || lab}
                  alt={`${speaker.name}`}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </ImageReveal>
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg">{speaker.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {speaker.role && <span className="block">{speaker.role}</span>}
                {speaker.org}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function ImportantDates() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="shell py-24">
        <MaskReveal>
          <h2 className="display-md">Important Dates</h2>
        </MaskReveal>
        <StaggerReveal as="ol" className="mt-12 grid gap-10 md:grid-cols-3">
          {keyDates.map((d) => (
            <li key={d.date} className="border-t border-primary/40 pt-6">
              <p className="font-[family-name:var(--font-display)] text-xl font-medium tracking-tight">
                {d.date}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.label}</p>
            </li>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function RegistrationCall() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <MaskReveal className="md:col-span-7">
          <h2 className="display-lg">
            Join the International
            <br />
            Cardiovascular Community
          </h2>
        </MaskReveal>
        <div className="md:col-span-5">
          <TextReveal delay={0.1}>
            <p className="leading-relaxed text-muted-foreground">
              Join scientists, clinicians, researchers, academicians, healthcare professionals,
              technologists and industry experts at IACS 2027 in Mathura.
            </p>
          </TextReveal>
          <StaggerReveal className="mt-8 flex flex-wrap items-center gap-8" delay={0.2} yOffset={10}>
            <Link to="/registration" className="btn-solid">
              Register Now <span aria-hidden>→</span>
            </Link>
            <Link to="/registration" hash="fees" className="text-sm underline underline-offset-4 hover:text-primary transition-colors">
              View Registration Fees
            </Link>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}

function CampusSection() {
  return (
    <section className="border-t border-rule overflow-hidden">
      <div className="grid md:grid-cols-2">
        <ParallaxImage
          src="/GLA Drone Shot.png"
          alt="GLA University campus buildings and lawns, Mathura"
          className="h-full min-h-[380px] w-full"
        />
        <div className="flex items-center bg-surface px-6 py-20 md:px-16">
          <div className="max-w-xl">
            <HorizontalReveal>
              <p className="eyebrow text-primary">The Host</p>
            </HorizontalReveal>
            <MaskReveal delay={0.1}>
              <h2 className="display-md mt-6">GLA University, Mathura</h2>
            </MaskReveal>
            <TextReveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                The Institute of Pharmaceutical Research at GLA University is among the leading
                centres for pharmaceutical education and research in northern India, with laboratories
                spanning drug discovery, formulation, pharmacology and clinical research.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Mathura sits on the Yamuna in Uttar Pradesh, an hour from Agra and within easy reach
                of Delhi — placing delegates beside Vrindavan, Govardhan, Gokul and the Taj Mahal.
              </p>
            </TextReveal>
            <TextReveal delay={0.3}>
              <Link to="/venue" className="link-arrow mt-9 inline-block">
                Discover Mathura <span aria-hidden>→</span>
              </Link>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-primary-deep">
      <div className="shell py-28 text-center md:py-36">
        <MaskReveal>
          <h2 className="display-lg text-white">See you in Mathura.</h2>
        </MaskReveal>
        <TextReveal delay={0.1}>
          <p className="mt-6 text-white/70">11–13 February 2027</p>
        </TextReveal>
        <TextReveal delay={0.2}>
          <Link
            to="/registration"
            className="mt-10 inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
          >
            Register for IACS 2027 <span aria-hidden>→</span>
          </Link>
        </TextReveal>
      </div>
    </section>
  );
}
