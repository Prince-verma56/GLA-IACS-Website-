import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote } from "@/components/PageLayout";
import { pageHeroes } from "@/lib/pageHeroes";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Orations — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Orations, scientific symposia and young investigator awards at the IACS India Section International Conference 2027, GLA University, Mathura.",
      },
      { property: "og:title", content: "Awards & Orations — IACS 2027" },
      {
        property: "og:description",
        content: "Named orations, symposia and young investigator awards.",
      },
    ],
  }),
  component: Awards,
});

const sections = [
  {
    title: "Orations",
    body: "Named orations delivered by distinguished members of the cardiovascular sciences community.",
  },
  {
    title: "Scientific Symposia",
    body: "Themed symposia convened around the conference research areas across the three days.",
  },
  {
    title: "Young Investigator Awards",
    body: "Awards recognising outstanding original research by students and early-career researchers, judged from oral and poster presentations.",
  },
];

function Awards() {
  return (
    <PageLayout heroConfig={pageHeroes.awards}>
      <div className="border-t border-rule">
        {sections.map((s, i) => (
          <div key={s.title} className="grid gap-4 border-b border-rule py-12 md:grid-cols-12">
            <span className="eyebrow text-primary md:col-span-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="display-md md:col-span-5">{s.title}</h2>
            <p className="leading-relaxed text-muted-foreground md:col-span-5">{s.body}</p>
          </div>
        ))}
      </div>
      <PlaceholderNote what="Oration names, symposium titles and award criteria" />
    </PageLayout>
  );
}
