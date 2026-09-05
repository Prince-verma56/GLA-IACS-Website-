import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
  ImageReveal,
} from "@/components/motion/ScrollReveal";
import { ConcentricPulse, ScientificGrid, PulseDivider, HeartbeatLine } from "@/components/graphics/ConferenceGraphics";
import {
  internationalSpeakers,
  leadership,
  scientificAdvisors,
  eminentPanel,
  organizingCommittees,
  advisoryInternational,
  advisoryNational,
  advisoryUniversity,
} from "@/lib/conference";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Conference Committee & Members — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "The people contributing to the organisation, scientific direction and successful delivery of IACS 2027 — International Conference at GLA University, Mathura.",
      },
      { property: "og:title", content: "Conference Committee & Members — IACS 2027" },
      {
        property: "og:description",
        content:
          "International speakers, patrons, organizing committee, scientific advisors and all committee members for IACS 2027.",
      },
    ],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── PAGE HERO ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary-deep pt-[74px]">
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-[0.07]" />
          <ConcentricPulse className="absolute -right-20 -top-20 h-[340px] w-[340px] text-white opacity-30" />
          <div className="shell relative z-10 grid gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <HorizontalReveal>
                <p className="eyebrow text-white/55">Committee</p>
              </HorizontalReveal>
            </div>
            <div className="md:col-span-8">
              <MaskReveal delay={0.1}>
                <h1 className="display-lg text-white">Conference Committee &amp; Members</h1>
              </MaskReveal>
              <TextReveal delay={0.25}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
                  The people contributing to the organisation, scientific direction and successful
                  delivery of IACS 2027.
                </p>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* ── INTERNATIONAL SPEAKERS ────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="border-b border-rule pb-3 mb-14">
            <HorizontalReveal>
              <p className="eyebrow text-primary">International Speakers</p>
            </HorizontalReveal>
            <MaskReveal delay={0.1}>
              <h2 className="display-md mt-4">
                Distinguished International Faculty
              </h2>
            </MaskReveal>
          </div>

          <StaggerReveal
            className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.07}
          >
            {internationalSpeakers.map((speaker, idx) => (
              <SpeakerCard
                key={speaker.name}
                index={idx + 1}
                name={speaker.name}
                role={speaker.role}
                org={speaker.org}
                image={speaker.image}
              />
            ))}
          </StaggerReveal>
        </section>

        {/* ── LEADERSHIP & PATRONS ──────────────────────────── */}
        <section className="border-t border-rule bg-surface">
          <div className="shell py-20 md:py-28">
            <div className="border-b border-rule pb-3 mb-14">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Leadership &amp; Patrons</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md mt-4">Patrons &amp; Office Bearers</h2>
              </MaskReveal>
            </div>

            {leadership.map((group) => (
              <LeadershipGroup key={group.group} group={group.group} people={group.people} />
            ))}
          </div>
        </section>

        {/* ── SCIENTIFIC ADVISORS ───────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="border-b border-rule pb-3 mb-14">
            <HorizontalReveal>
              <p className="eyebrow text-primary">Scientific Direction</p>
            </HorizontalReveal>
            <MaskReveal delay={0.1}>
              <h2 className="display-md mt-4">Distinguished Scientific Advisors</h2>
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
                role={p.role}
                org={p.org}
              />
            ))}
          </StaggerReveal>

          <div className="mt-16 border-t border-rule pt-14">
            <HorizontalReveal>
              <p className="eyebrow text-muted-foreground mb-10">Eminent Scientific Advisory Panel</p>
            </HorizontalReveal>
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
                  role={p.role}
                  org={p.org}
                />
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── ORGANIZING COMMITTEES ─────────────────────────── */}
        <section className="border-t border-rule bg-surface">
          <div className="shell py-20 md:py-28">
            <div className="border-b border-rule pb-3 mb-14">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Organising</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md mt-4">Organizing Committees</h2>
              </MaskReveal>
            </div>

            <div className="space-y-14">
              {organizingCommittees.map((committee) => (
                <CommitteeGroup key={committee.title} title={committee.title} members={committee.members} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ADVISORY COMMITTEES ───────────────────────────── */}
        <section className="shell py-20 md:py-28">
          <div className="border-b border-rule pb-3 mb-14">
            <HorizontalReveal>
              <p className="eyebrow text-primary">Advisory</p>
            </HorizontalReveal>
            <MaskReveal delay={0.1}>
              <h2 className="display-md mt-4">Advisory Committees</h2>
            </MaskReveal>
          </div>

          {/* International Advisory */}
          <div className="mb-16">
            <TextReveal>
              <p className="eyebrow text-muted-foreground mb-8">International Advisory Committee</p>
            </TextReveal>
            <StaggerReveal
              as="ol"
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.04}
            >
              {advisoryInternational.map((name, idx) => (
                <SimpleRow key={name} index={idx + 1} name={name} />
              ))}
            </StaggerReveal>
          </div>

          {/* National Advisory */}
          <div className="border-t border-rule pt-14 mb-16">
            <TextReveal>
              <p className="eyebrow text-muted-foreground mb-8">National Advisory Committee</p>
            </TextReveal>
            <StaggerReveal
              as="ol"
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.04}
            >
              {advisoryNational.map((name, idx) => (
                <SimpleRow key={name} index={idx + 1} name={name} />
              ))}
            </StaggerReveal>
          </div>

          {/* University Advisory */}
          <div className="border-t border-rule pt-14">
            <TextReveal>
              <p className="eyebrow text-muted-foreground mb-8">Organizing Committee — University Members</p>
            </TextReveal>
            <StaggerReveal
              as="ol"
              className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.04}
            >
              {advisoryUniversity.map((name, idx) => (
                <SimpleRow key={name} index={idx + 1} name={name} />
              ))}
            </StaggerReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── SUB-COMPONENTS ──────────────────────────────────────────── */

function SpeakerCard({
  index,
  name,
  role,
  org,
  image,
}: {
  index: number;
  name: string;
  role?: string | undefined;
  org?: string | undefined;
  image?: string | undefined;
}) {
  return (
    <li className="list-none">
      {/* Portrait image */}
      <ImageReveal>
        <div className="overflow-hidden bg-surface" style={{ aspectRatio: "4/5" }}>
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            /* Image slot — replace src with actual asset path later */
            <div className="w-full h-full flex items-end justify-start p-4 bg-[oklch(0.94_0.012_150)]">
              <span className="eyebrow text-muted-foreground/60">Photo</span>
            </div>
          )}
        </div>
      </ImageReveal>

      {/* Identity */}
      <TextReveal delay={0.1}>
        <div className="mt-5">
          <span
            className="eyebrow text-primary/60 block mb-2"
            aria-hidden
          >
            {String(index).padStart(2, "0")}
          </span>
          <p className="font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold leading-snug tracking-tight">
            {name}
          </p>
          {role && (
            <p className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">{role}</p>
          )}
          {org && (
            <p className="mt-0.5 text-[0.8125rem] leading-snug text-muted-foreground">{org}</p>
          )}
        </div>
      </TextReveal>
    </li>
  );
}

function LeadershipGroup({
  group,
  people,
}: {
  group: string;
  people: { name: string; role?: string; org?: string; phone?: string; image?: string }[];
}) {
  return (
    <div className="border-t border-rule py-8">
      <div className="grid gap-6 md:grid-cols-12">
        <TextReveal className="md:col-span-3">
          <p className="eyebrow text-primary/70">{group}</p>
        </TextReveal>
        <StaggerReveal className="md:col-span-9 space-y-6" stagger={0.07}>
          {people.map((person) => (
            <div key={person.name} className="flex items-start gap-5">
              {/* Small portrait if available */}
              {person.image && (
                <div
                  className="flex-shrink-0 overflow-hidden bg-surface"
                  style={{ width: 56, height: 70 }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <div>
                <p className="font-[family-name:var(--font-display)] text-[1rem] font-semibold leading-snug tracking-tight">
                  {person.name}
                </p>
                {person.role && (
                  <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{person.role}</p>
                )}
                {person.org && (
                  <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{person.org}</p>
                )}
                {person.phone && (
                  <p className="mt-1 text-xs text-muted-foreground/70">{person.phone}</p>
                )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}

function CommitteeGroup({ title, members }: { title: string; members: string[] }) {
  return (
    <div className="border-t border-rule pt-8">
      <div className="grid gap-6 md:grid-cols-12">
        <TextReveal className="md:col-span-3">
          <p className="eyebrow text-primary/70">{title}</p>
        </TextReveal>
        <StaggerReveal
          as="ul"
          className="md:col-span-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {members.map((m, idx) => (
            <li key={m} className="flex gap-3 border-b border-rule py-3 text-sm leading-snug">
              <span className="eyebrow text-primary/50 shrink-0 pt-0.5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{m}</span>
            </li>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}

function DirectoryRow({
  index,
  name,
  role,
  org,
}: {
  index: number;
  name: string;
  role?: string | undefined;
  org?: string | undefined;
}) {
  return (
    <li className="flex gap-5 border-b border-rule py-5 list-none">
      <span className="eyebrow text-primary/50 shrink-0 pt-0.5">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <p className="text-[0.9375rem] font-medium leading-snug">{name}</p>
        {role && <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{role}</p>}
        {org && <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{org}</p>}
      </div>
    </li>
  );
}

function SimpleRow({ index, name }: { index: number; name: string }) {
  return (
    <li className="flex gap-5 border-b border-rule py-4 list-none">
      <span className="eyebrow text-primary/50 shrink-0 pt-0.5">
        {String(index).padStart(2, "0")}
      </span>
      <p className="text-sm leading-snug">{name}</p>
    </li>
  );
}
