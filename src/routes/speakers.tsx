import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote, SectionHeading } from "@/components/PageLayout";

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

const groups = [
  { index: "01", title: "International Speakers", count: 6 },
  { index: "02", title: "National & Scientific Speakers", count: 8 },
];

function Speakers() {
  return (
    <PageLayout
      eyebrow="Speakers"
      title="Faculty from the international cardiovascular community"
      intro="The speaker roster is confirmed from the official brochure. Names, institutions and countries appear here exactly as listed."
    >
      {groups.map((g) => (
        <div key={g.title} className="mb-20 last:mb-0">
          <SectionHeading index={g.index} title={g.title} />
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {Array.from({ length: g.count }).map((_, i) => (
              <li
                key={i}
                className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="eyebrow text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl tracking-tight md:col-span-6">
                  Speaker to be announced
                </span>
                <span className="text-sm text-muted-foreground md:col-span-4">
                  Institution as per brochure
                </span>
                <span className="text-sm text-muted-foreground md:col-span-1 md:text-right">
                  —
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PlaceholderNote what="Speaker names, portraits, institutions and countries" />
    </PageLayout>
  );
}
