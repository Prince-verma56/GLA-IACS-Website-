import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote, SectionHeading } from "@/components/PageLayout";
import { conference, internationalSpeakers } from "@/lib/conference";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "International and national speakers for the IACS India Section International Conference 2027 at GLA University, Mathura.",
      },
      { property: "og:title", content: "Speakers — IACS 2027" },
      {
        property: "og:description",
        content: "International and national scientific speakers, 11–13 February 2027.",
      },
    ],
  }),
  component: Speakers,
});
function Speakers() {
  return (
    <PageLayout
      eyebrow="Speakers"
      title="Faculty from the international cardiovascular community"
      intro="The speaker roster is confirmed from the official brochure. Names, institutions and countries appear here exactly as listed."
    >
      <div className="mb-20 last:mb-0">
        <SectionHeading index="01" title="International Speakers" />
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {internationalSpeakers.map((speaker, i) => (
            <li
              key={speaker.name}
              className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="eyebrow text-muted-foreground md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl tracking-tight md:col-span-5">
                {speaker.name}
              </span>
              <span className="text-sm text-muted-foreground md:col-span-6">
                {speaker.role && <span className="block">{speaker.role}</span>}
                {speaker.org}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-20 last:mb-0">
        <SectionHeading index="02" title="National & Scientific Speakers" />
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {Array.from({ length: 4 }).map((_, i) => (
            <li
              key={i}
              className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="eyebrow text-muted-foreground md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl tracking-tight md:col-span-5 text-muted-foreground">
                Speaker details to be announced
              </span>
              <span className="text-sm text-muted-foreground md:col-span-6">
                As per official programme
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
