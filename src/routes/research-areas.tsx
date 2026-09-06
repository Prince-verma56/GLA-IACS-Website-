import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote } from "@/components/PageLayout";
import { pageHeroes } from "@/lib/pageHeroes";

export const Route = createFileRoute("/research-areas")({
  head: () => ({
    meta: [
      { title: "Research Areas — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Scientific subject areas invited for presentation at the IACS India Section International Conference 2027, GLA University, Mathura.",
      },
      { property: "og:title", content: "Research Areas — IACS 2027" },
      {
        property: "og:description",
        content: "Conference research subjects and scientific tracks.",
      },
    ],
  }),
  component: ResearchAreas,
});

const areas = [
  "Novel Drug Discovery and Development in Cardiovascular Disease",
  "Clinical Pharmacy and Rational Therapeutics",
  "Pharmacogenomics and Precision Medicine",
  "Cardiovascular Pharmacology and Toxicology",
  "Nanomedicine and Advanced Drug Delivery",
  "Natural Products and Traditional Medicine in Cardiac Care",
  "Artificial Intelligence and Digital Health in Cardiology",
  "Preventive Cardiology and Public Health",
];

function ResearchAreas() {
  return (
    <PageLayout heroConfig={pageHeroes.researchAreas}>
      <ol className="border-t border-rule">
        {areas.map((a, i) => (
          <li
            key={a}
            className="grid gap-2 border-b border-rule py-7 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <span className="eyebrow text-primary md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-[family-name:var(--font-display)] text-xl leading-snug tracking-tight md:col-span-11 md:text-2xl">
              {a}
            </span>
          </li>
        ))}
      </ol>
      <PlaceholderNote what="The definitive list of research subjects" />
    </PageLayout>
  );
}
