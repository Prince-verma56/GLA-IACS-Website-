import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PersonCard, PersonCardDark } from "@/components/PersonCard";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import {
  ConcentricPulse,
  ScientificGrid,
  PulseDivider,
  HeartbeatLine,
} from "@/components/graphics/ConferenceGraphics";
import {
  leadership,
  scientificAdvisors,
  eminentPanel,
  organizingCommittees,
  advisoryInternational,
  advisoryNational,
  advisoryUniversity,
} from "@/lib/conference";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { MedicalFloatingVisuals } from "@/components/Elements/MedicalFloatingVisuals";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Conference Committee — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Leadership, patrons, organizing committee, scientific advisors and advisory members for the IACS 2027 International Conference at GLA University, Mathura.",
      },
      { property: "og:title", content: "Conference Committee — IACS 2027" },
    ],
  }),
  component: CommitteePage,
});

/* ── DATA ─────────────────────────────────────────────────────── */
const PATRON_BACKGROUND_VISUAL = "/images/Bg images/Cardial Green bg.png";

const chiefPatron = leadership.find((g) => g.group === "Chief Patron");
const coChiefPatrons = leadership.find((g) => g.group === "Co-Chief Patrons");
const patrons = leadership.find((g) => g.group === "Patrons");
const iacsPatrons = leadership.find((g) => g.group === "IACS Patrons");
const chairman = leadership.find((g) => g.group === "Chairman");
const officeBearers = leadership.find((g) => g.group === "IACS – India Section Office Bearers");
const orgSecretary = leadership.find((g) => g.group === "Organizing Secretary");
const coOrgSecretaries = leadership.find((g) => g.group === "Co-Organizing Secretaries");
const jointSecretaries = leadership.find((g) => g.group === "Joint Secretaries");

/* ── PAGE ─────────────────────────────────────────────────────── */
function CommitteePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <InternalPageHero hero={pageHeroes.committee}>
          <TextReveal delay={0.32}>
            <Link
              to="/speakers"
              className="mt-2 inline-flex items-center gap-2 text-sm text-primary/70 transition-colors hover:text-primary"
            >
              View International Speakers →
            </Link>
          </TextReveal>
        </InternalPageHero>

        {/* ══════════════════════════════════════════════════
            INSTITUTIONAL LEADERSHIP
            Warm cream bg — three controlled visual zones
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#f5f3ee] relative">
          {/* ── ZONE 1: CHIEF PATRON ── */}
          <div className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">
            <TextReveal
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              delay={0.1}
            >
              <div
                className="w-full h-full"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <img
                  src={PATRON_BACKGROUND_VISUAL}
                  alt=""
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-multiply"
                  loading="lazy"
                />
              </div>
            </TextReveal>

            <div className="shell relative z-10">
              {/* Premium Heading */}
              <div className="flex flex-col items-center justify-center mb-12 md:mb-16 relative w-full">
                <div className="flex-shrink-0 text-center relative z-10 px-6 py-4 md:px-8">
                  <TextReveal>
                    <p className="eyebrow text-primary mb-3">Institutional Leadership</p>
                  </TextReveal>
                  <MaskReveal delay={0.08}>
                    <h2 className="display-lg tracking-tight">Patrons</h2>
                  </MaskReveal>
                  {/* Subtle refined accent line */}
                  <TextReveal delay={0.16}>
                    <div className="mt-6 mx-auto w-12 h-[2px] bg-primary/30 rounded-full" />
                  </TextReveal>
                </div>
              </div>

              {/* Chief Patron Profile */}
              <div className="flex flex-col items-center text-center relative">
                {/* Premium halo accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

                <TextReveal delay={0.32}>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/30 mb-8">
                    01 — Chief Patron
                  </p>
                </TextReveal>
                {chiefPatron?.people.map((person) => (
                  <TextReveal key={person.name} delay={0.4}>
                    <div className="group inline-block">
                      <PersonCard
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        image={person.image}
                        variant="chief"
                        align="center"
                      />
                    </div>
                  </TextReveal>
                ))}
              </div>
            </div>
          </div>

          {/* ── ZONE 2: CO-CHIEF PATRONS ── */}
          <div className="relative overflow-hidden py-12 md:py-16">
            <TextReveal
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              delay={0.1}
            >
              <div
                className="w-full h-full"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <img
                  src={PATRON_BACKGROUND_VISUAL}
                  alt=""
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-multiply"
                  style={{ transform: "scaleX(-1)" }}
                  loading="lazy"
                />
              </div>
            </TextReveal>

            <div className="shell relative z-10">
              <div className="flex flex-col items-center text-center">
                <TextReveal>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/30 mb-7">
                    02 — Co-Chief Patrons
                  </p>
                </TextReveal>
                <StaggerReveal
                  className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-24 md:gap-x-32 lg:gap-x-[12rem] gap-y-16"
                  stagger={0.1}
                >
                  {coChiefPatrons?.people.map((person) => (
                    <div key={person.name} className="group">
                      <PersonCard
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        image={person.image}
                        variant="co-chief"
                        align="center"
                      />
                    </div>
                  ))}
                </StaggerReveal>
              </div>
            </div>
          </div>

          {/* ── ZONE 3: PATRONS ── */}
          <div className="relative overflow-hidden pt-12 md:pt-16 pb-16 md:pb-24">
            <TextReveal
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              delay={0.1}
            >
              <div
                className="w-full h-full"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <img
                  src={PATRON_BACKGROUND_VISUAL}
                  alt=""
                  className="w-full h-full object-cover opacity-[0.35] mix-blend-multiply"
                  loading="lazy"
                />
              </div>
            </TextReveal>

            <div className="shell relative z-10">
              <div className="flex flex-col items-center text-center">
                <TextReveal>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/30 mb-7">
                    03 — Patrons
                  </p>
                </TextReveal>
                <StaggerReveal
                  className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-20 md:gap-x-24 lg:gap-x-[10rem] gap-y-16"
                  stagger={0.1}
                >
                  {patrons?.people.map((person) => (
                    <div key={person.name} className="group">
                      <PersonCard
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        image={person.image ?? null}
                        variant="patron"
                        align="center"
                      />
                    </div>
                  ))}
                </StaggerReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-[#f5f3ee]">
          <svg
            className="w-full block text-primary-deep h-8 md:h-16"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            IACS PATRONS & OFFICE BEARERS
        ══════════════════════════════════════════════════ */}
        <section className="bg-primary-deep py-16 md:py-24 relative overflow-hidden">
          <HeartbeatLine className="absolute bottom-8 left-0 right-0 text-white opacity-[0.05] w-full" />
          <ConcentricPulse className="absolute -left-24 bottom-0 h-[280px] w-[280px] text-white opacity-10" />

          <div className="shell relative z-10">
            {/* Section heading */}
            <div className="border-b border-white/10 pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-white/40">IACS – India Section</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3 text-white">Patrons &amp; Office Bearers</h2>
              </MaskReveal>
            </div>

            {/* ── IACS PATRONS ── */}
            <GroupBlock label="IACS Patrons" number="04">
              <StaggerReveal
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
                stagger={0.05}
              >
                {iacsPatrons?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
              </StaggerReveal>
            </GroupBlock>

            {/* ── CHAIRMAN ── */}
            <GroupBlock label="Chairman" number="05">
              <div className="flex justify-center md:justify-start">
                {chairman?.people.map((person) => (
                  <TextReveal key={person.name}>
                    <PersonCardDark
                      name={person.name}
                      role={person.role}
                      org={person.org}
                      image={person.image ?? null}
                      variant="featured"
                    />
                  </TextReveal>
                ))}
              </div>
            </GroupBlock>

            {/* ── SECRETARIES ── */}
            <GroupBlock label="Secretaries" number="06">
              <StaggerReveal
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                stagger={0.05}
              >
                {officeBearers?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
                {orgSecretary?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    phone={person.phone}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
              </StaggerReveal>
            </GroupBlock>

            {/* ── CO-ORGANIZING & JOINT SECRETARIES ── */}
            <GroupBlock label="Co-Organizing & Joint Secretaries" number="07">
              <div className="grid gap-12 sm:grid-cols-2">
                <div>
                  <h4 className="eyebrow text-white/30 mb-5">Co-Organizing Secretaries</h4>
                  <StaggerReveal className="flex flex-col gap-5" stagger={0.05}>
                    {coOrgSecretaries?.people.map((person) => (
                      <PersonCardDark
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        phone={person.phone}
                        image={person.image ?? null}
                        variant="compact"
                      />
                    ))}
                  </StaggerReveal>
                </div>
                <div>
                  <h4 className="eyebrow text-white/30 mb-5">Joint Secretaries</h4>
                  <StaggerReveal className="flex flex-col gap-5" stagger={0.05}>
                    {jointSecretaries?.people.map((person) => (
                      <PersonCardDark
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        phone={person.phone}
                        image={person.image ?? null}
                        variant="compact"
                      />
                    ))}
                  </StaggerReveal>
                </div>
              </div>
            </GroupBlock>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-primary-deep">
          <svg
            className="w-full block text-[#f5f3ee] h-8 md:h-16"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            SCIENTIFIC ADVISORS
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#f5f3ee] py-16 md:py-24 relative overflow-hidden">
          <div className="shell relative z-10">
            <div className="border-b border-rule pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Scientific Direction</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3">Distinguished Scientific Advisors</h2>
              </MaskReveal>
            </div>

            <StaggerReveal
              as="ol"
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.05}
            >
              {scientificAdvisors.map((p, idx) => (
                <DirectoryRow
                  key={p.name}
                  index={idx + 1}
                  name={p.name}
                  {...(p.role ? { role: p.role } : {})}
                  {...(p.org ? { org: p.org } : {})}
                />
              ))}
            </StaggerReveal>

            {/* Eminent Panel */}
            <div className="mt-16 border-t border-rule pt-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-2">Advisory Panel</p>
              </HorizontalReveal>
              <MaskReveal delay={0.05}>
                <h3 className="text-[1.375rem] font-semibold tracking-tight mb-10">
                  Eminent Scientific Advisory Panel
                </h3>
              </MaskReveal>
              <StaggerReveal
                as="ol"
                className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.05}
              >
                {eminentPanel.map((p, idx) => (
                  <DirectoryRow
                    key={p.name}
                    index={idx + 1}
                    name={p.name}
                    {...(p.role ? { role: p.role } : {})}
                    {...(p.org ? { org: p.org } : {})}
                  />
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-[#f5f3ee]">
          <svg
            className="w-full block text-primary-deep h-8 md:h-16"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            ORGANISING COMMITTEES
        ══════════════════════════════════════════════════ */}
        <section className="bg-primary-deep py-16 md:py-24 relative overflow-hidden">
          <HeartbeatLine className="absolute bottom-0 left-0 right-0 text-white opacity-[0.05] w-full" />
          <div className="shell relative z-10">
            <div className="border-b border-white/10 pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-white/40">Organising</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3 text-white">Organizing Committees</h2>
              </MaskReveal>
            </div>

            <div className="space-y-12">
              {organizingCommittees.map((committee) => (
                <div key={committee.title} className="border-t border-white/10 pt-8">
                  <div className="grid gap-6 md:grid-cols-12">
                    <TextReveal className="md:col-span-4 lg:col-span-3">
                      <p className="eyebrow text-white/40">{committee.title}</p>
                    </TextReveal>
                    <StaggerReveal
                      as="ul"
                      className="md:col-span-8 lg:col-span-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
                      stagger={0.04}
                    >
                      {committee.members.map((m, idx) => (
                        <li
                          key={m}
                          className="flex gap-3 border-b border-white/8 py-3 text-sm leading-snug"
                        >
                          <span className="eyebrow text-white/20 shrink-0 pt-0.5">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-white/70">{m}</span>
                        </li>
                      ))}
                    </StaggerReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-primary-deep">
          <svg
            className="w-full block text-[#f5f3ee] h-8 md:h-16"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            ADVISORY COMMITTEES
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#f5f3ee] py-16 md:py-24 relative overflow-hidden">
          <MedicalFloatingVisuals 
            visuals={[
              { src: "/images/Elements/Heart.png", side: "left", className: "top-20 -left-[10%] w-64 md:w-96", opacity: 0.12 },
              { src: "/images/Elements/Stethoscop.png", side: "right", className: "bottom-40 -right-[5%] w-48 md:w-72", opacity: 0.18, delay: 0.15 }
            ]}
          />
          <div className="shell relative z-10">
            <div className="border-b border-rule pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Advisory</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3">Advisory Committees</h2>
              </MaskReveal>
            </div>

            <AdvisoryBlock label="International Advisory Committee" names={advisoryInternational} />
            <div className="border-t border-rule mt-12 pt-12">
              <AdvisoryBlock label="National Advisory Committee" names={advisoryNational} />
            </div>
            <div className="border-t border-rule mt-12 pt-12">
              <AdvisoryBlock
                label="University Members — Organizing Committee"
                names={advisoryUniversity}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════════════════ */

/* Labeled group block for dark section */
function GroupBlock({
  label,
  number,
  children,
}: {
  label: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/10 py-8">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="eyebrow text-white/20">{number}</span>
        <p className="eyebrow text-white/38">{label}</p>
      </div>
      {children}
    </div>
  );
}

/* Directory row for light sections */
function DirectoryRow({
  index,
  name,
  role,
  org,
}: {
  index: number;
  name: string;
  role?: string;
  org?: string;
}) {
  return (
    <li className="flex gap-4 border-b border-rule py-4 list-none">
      <span className="eyebrow text-primary/40 shrink-0 pt-0.5 tabular-nums">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <p className="text-[0.9375rem] font-medium leading-snug">{name}</p>
        {role && <p className="mt-0.5 text-sm leading-snug text-foreground/55">{role}</p>}
        {org && <p className="mt-0.5 text-sm leading-snug text-foreground/38">{org}</p>}
      </div>
    </li>
  );
}

/* Advisory list block */
function AdvisoryBlock({ label, names }: { label: string; names: string[] }) {
  return (
    <>
      <TextReveal>
        <p className="eyebrow text-foreground/40 mb-7">{label}</p>
      </TextReveal>
      <StaggerReveal as="ol" className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
        {names.map((name, idx) => (
          <li key={name} className="flex gap-4 border-b border-rule py-3.5 list-none">
            <span className="eyebrow text-primary/40 shrink-0 pt-0.5 tabular-nums">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-snug">{name}</p>
          </li>
        ))}
      </StaggerReveal>
    </>
  );
}
