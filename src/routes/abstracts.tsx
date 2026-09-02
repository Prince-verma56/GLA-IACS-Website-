import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote, SectionHeading } from "@/components/PageLayout";
import { conference } from "@/lib/conference";

export const Route = createFileRoute("/abstracts")({
  head: () => ({
    meta: [
      { title: "Abstract Submission — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Abstract guidelines, formatting rules, poster dimensions and presentation durations for IACS 2027. Submission deadline 25 December 2026.",
      },
      { property: "og:title", content: "Abstract Submission — IACS 2027" },
      {
        property: "og:description",
        content: "Structure, word limit, formatting and deadlines for abstract submission.",
      },
    ],
  }),
  component: Abstracts,
});

function Abstracts() {
  return (
    <PageLayout
      eyebrow="Abstract Submission"
      title="Guidelines for authors"
      intro="Abstracts open 25 August 2026 and close 25 December 2026. Please follow the brochure guidelines precisely."
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading index="01" title="Structure" />
          <ol className="mt-6 divide-y divide-rule border-y border-rule">
            {["Aim", "Method", "Result", "Conclusion"].map((s, i) => (
              <li key={s} className="flex gap-6 py-5">
                <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                  {s}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Followed by 3–5 keywords. Maximum 250 words.
          </p>

          <SectionHeading index="02" title="Formatting" />
          <dl className="mt-6 divide-y divide-rule border-y border-rule text-sm">
            {[
              ["Word limit", "Maximum 250 words"],
              ["Typeface", "Times New Roman"],
              ["Font size", "12 pt"],
              ["Line spacing", "Double spacing"],
              ["Keywords", "3–5 keywords"],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 md:grid-cols-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="md:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>

          <SectionHeading index="03" title="Presentation" />
          <dl className="mt-6 divide-y divide-rule border-y border-rule text-sm">
            {[
              ["Poster dimensions", "As specified in the brochure"],
              ["Oral presentation", "Duration as specified in the brochure"],
              ["Online presentation", "Duration as specified in the brochure"],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 md:grid-cols-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="md:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
          <PlaceholderNote what="Exact poster dimensions and presentation durations" />
        </div>

        <aside className="md:col-span-5">
          <div className="border-t border-primary/40 pt-6">
            <p className="eyebrow text-primary">Deadline</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl tracking-tight">
              25 December 2026
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Abstract submission closes</p>
            <a href={`mailto:${conference.email}`} className="btn-solid mt-8">
              Submit your abstract
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Submissions to {conference.email} until the official portal link is published.
            </p>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}
