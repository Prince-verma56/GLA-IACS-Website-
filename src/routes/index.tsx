import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { conference, keyDates, internationalSpeakers, PLACEHOLDER } from "@/lib/conference";
import campus from "@/assets/campus-hero.jpg";
import auditorium from "@/assets/auditorium.jpg";
import lab from "@/assets/lab.jpg";

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
  return (
    <div className="min-h-screen bg-background">
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
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24">
      <img
        src="/GLA Drone Shot.png"
        alt="GLA University campus, Mathura, drone shot"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle directional gradient for readability while preserving the building */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(9,26,18,0.92)_0%,rgba(9,26,18,0.6)_35%,rgba(9,26,18,0)_65%)] max-md:bg-[linear-gradient(110deg,rgba(9,26,18,0.95)_0%,rgba(9,26,18,0.85)_50%,rgba(9,26,18,0.4)_100%)] pointer-events-none" />
      {/* Navbar protection gradient */}
      <div className="absolute top-0 inset-x-0 h-32 bg-[linear-gradient(180deg,rgba(9,26,18,0.7)_0%,rgba(9,26,18,0)_100%)] pointer-events-none" />

      <div className="shell relative w-full flex flex-col justify-center">
        <div className="w-full max-w-[640px] md:pr-10 lg:pr-0">
          <p className="text-[0.7rem] font-bold tracking-[0.15em] text-white/75 uppercase leading-relaxed">
            IACS 2027 · India Section
            <br />
            International Conference
          </p>
          
          <h1 className="mt-5 flex flex-col gap-2 md:gap-3">
            <span className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.1] tracking-tight text-white sm:text-[3rem] lg:text-[3.5rem]">
              {conference.theme.line1}
            </span>
            <span className="font-[family-name:var(--font-display)] text-[1.5rem] leading-[1.25] tracking-tight text-white/85 sm:text-[1.75rem] lg:text-[2.125rem]">
              {conference.theme.line2}
            </span>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1.5 text-[0.9375rem] text-white/90 lg:text-[1rem]">
            <span className="font-medium tracking-wide whitespace-nowrap">{conference.dates}</span>
            <span className="hidden sm:block text-white/40">•</span>
            <span>GLA University, Mathura, Uttar Pradesh, India</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/registration" className="btn-solid flex items-center justify-center h-[50px] px-8 text-[0.9375rem]">
              Register Now
            </Link>
            <Link
              to="/programme"
              className="inline-flex items-center justify-center h-[50px] border border-white/60 px-8 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
            >
              Explore Programme
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 hidden text-right lg:block">
        <p className="text-[0.6rem] font-bold tracking-[0.2em] text-white/50 uppercase">Hosted by</p>
        <p className="mt-1 text-[0.8125rem] leading-snug text-white/80">
          Institute of Pharmaceutical Research
          <br />
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
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-primary">About the Conference</p>
        </Reveal>
        <Reveal className="md:col-span-8" delay={80}>
          <p className="text-[1.375rem] leading-[1.55] tracking-[-0.01em] md:text-[1.625rem]">
            The {conference.name} of the {conference.society}, centered on the theme "{conference.theme.line1} {conference.theme.line2}", will be held from {conference.dates} at {conference.venue}.
          </p>
          <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
            The conference brings together eminent scientists, cardiologists, clinicians, academicians, researchers, healthcare professionals, technologists and industry leaders from across the globe.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            It will provide a platform for exchanging pioneering ideas, showcasing cutting-edge research, exploring emerging technologies and discussing innovative strategies for the prevention, diagnosis, treatment and management of cardiovascular diseases.
          </p>
          <Link to="/about" className="link-arrow mt-9">
            Explore the Conference <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Theme() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-primary">Conference Theme</p>
          <h2 className="display-lg mt-8 max-w-4xl">
            Transforming Cardiovascular Care
            <br />
            Through Science, Technology
            <br />
            <span className="text-primary">and Innovation</span>
          </h2>
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
        </Reveal>
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
      <dl className="grid divide-y divide-rule border-y border-rule md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((i) => (
          <div key={i.k} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
            <dt className="eyebrow text-muted-foreground">{i.k}</dt>
            <dd className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight md:text-[1.375rem]">
              {i.v}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function FeaturedSpeakers() {
  return (
    <section className="shell py-24 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6 border-t border-rule pt-7">
        <h2 className="display-md max-w-md">Featured Speakers</h2>
        <Link to="/speakers" className="link-arrow">
          View All Speakers <span aria-hidden>→</span>
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <img
            src={auditorium}
            alt="Delegates in a university auditorium during a plenary session"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <p className="mt-5 font-[family-name:var(--font-display)] text-2xl">
            {internationalSpeakers[0].name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {internationalSpeakers[0].role && <span className="block">{internationalSpeakers[0].role}</span>}
            {internationalSpeakers[0].org}
          </p>
        </Reveal>

        <div className="grid gap-10 md:col-span-5">
          {internationalSpeakers.slice(1, 3).map(
            (speaker, i) => (
              <Reveal key={speaker.name} delay={i * 90}>
                <img
                  src={lab}
                  alt={`${speaker.name}`}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="mt-4 font-[family-name:var(--font-display)] text-lg">{speaker.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {speaker.role && <span className="block">{speaker.role}</span>}
                  {speaker.org}
                </p>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ImportantDates() {
  return (
    <section className="border-y border-rule bg-surface">
      <div className="shell py-24">
        <Reveal>
          <h2 className="display-md">Important Dates</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {keyDates.map((d) => (
              <li key={d.date} className="border-t border-primary/40 pt-6">
                <p className="font-[family-name:var(--font-display)] text-xl font-medium tracking-tight">
                  {d.date}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function RegistrationCall() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <h2 className="display-lg">
            Join the International
            <br />
            Cardiovascular Community
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={80}>
          <p className="leading-relaxed text-muted-foreground">
            Join scientists, clinicians, researchers, academicians, healthcare professionals, technologists and industry experts at IACS 2027 in Mathura.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Link to="/registration" className="btn-solid">
              Register Now <span aria-hidden>→</span>
            </Link>
            <Link to="/registration" hash="fees" className="text-sm underline underline-offset-4">
              View Registration Fees
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CampusSection() {
  return (
    <section className="border-t border-rule">
      <div className="grid md:grid-cols-2">
        <img
          src={campus}
          alt="GLA University campus buildings and lawns, Mathura"
          width={1920}
          height={1200}
          loading="lazy"
          className="h-full min-h-[380px] w-full object-cover"
        />
        <Reveal className="flex items-center bg-surface px-6 py-20 md:px-16">
          <div className="max-w-xl">
            <p className="eyebrow text-primary">The Host</p>
            <h2 className="display-md mt-6">GLA University, Mathura</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The Institute of Pharmaceutical Research at GLA University is among the leading
              centres for pharmaceutical education and research in northern India, with
              laboratories spanning drug discovery, formulation, pharmacology and clinical
              research.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Mathura sits on the Yamuna in Uttar Pradesh, an hour from Agra and within easy reach
              of Delhi — placing delegates beside Vrindavan, Govardhan, Gokul and the Taj Mahal.
            </p>
            <Link to="/venue" className="link-arrow mt-9">
              Discover Mathura <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-primary-deep">
      <div className="shell py-28 text-center md:py-36">
        <Reveal>
          <h2 className="display-lg text-white">See you in Mathura.</h2>
          <p className="mt-6 text-white/70">11–13 February 2027</p>
          <Link
            to="/registration"
            className="mt-10 inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
          >
            Register for IACS 2027 <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
