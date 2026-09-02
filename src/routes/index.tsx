import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { conference, keyDates, PLACEHOLDER } from "@/lib/conference";
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
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={campus}
        alt="GLA University campus, Mathura, at golden hour"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,32,22,0.55)_0%,rgba(12,32,22,0.12)_38%,rgba(9,26,18,0.82)_100%)]" />

      <div className="shell relative w-full pb-20 pt-40 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <p className="eyebrow text-white/75">{conference.name}</p>
            <h1 className="display-xl mt-6 text-white">
              {conference.theme.line1}
              <span className="mt-2 block font-normal text-white/80">
                {conference.theme.line2}
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/25 pt-6 text-white/85">
              <span className="font-[family-name:var(--font-display)] text-lg">
                {conference.dates}
              </span>
              <span className="text-sm">{conference.venue}</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/registration" className="btn-solid">
                Register Now
              </Link>
              <Link
                to="/abstracts"
                className="inline-flex items-center justify-center border border-white/60 px-7 py-[0.9rem] text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-primary-deep"
              >
                Submit Abstract
              </Link>
            </div>
          </div>

          <div className="hidden md:col-span-3 md:block">
            <div className="ml-auto w-fit border-l border-white/30 pl-5 text-right">
              <p className="eyebrow text-white/60">Hosted by</p>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Institute of Pharmaceutical
                <br />
                Research, GLA University
                <br />
                Mathura, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
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
            The International Academy of Cardiovascular Sciences – India Section, together with
            the Institute of Pharmaceutical Research at GLA University, Mathura, convenes an
            international gathering of clinicians, pharmaceutical scientists and researchers from
            11–13 February 2027.
          </p>
          <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
            Three days of orations, scientific symposia, oral and poster presentations examine how
            science, technology and innovation are reshaping the prevention, diagnosis and
            treatment of cardiovascular disease. The full conference narrative, objectives and
            programme detail will be reproduced from the official brochure.
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
            Keynote Speaker — to be announced
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Institution and country per the official brochure
          </p>
        </Reveal>

        <div className="grid gap-10 md:col-span-5">
          {["International Speaker — to be announced", "National Speaker — to be announced"].map(
            (n, i) => (
              <Reveal key={n} delay={i * 90}>
                <img
                  src={lab}
                  alt="Researchers at work in the pharmaceutical research laboratory"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="mt-4 font-[family-name:var(--font-display)] text-lg">{n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{PLACEHOLDER}</p>
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
            Registration opens 25 August 2026 for delegates, faculty, students, industry
            participants and online attendees. Category-wise fees, early bird rates and payment
            details are published on the registration page.
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
