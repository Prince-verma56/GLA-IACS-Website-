import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PlaceholderNote } from "@/components/PageLayout";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committees — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Organizing, scientific, advisory and operational committees for the IACS India Section International Conference 2027 at GLA University, Mathura.",
      },
      { property: "og:title", content: "Committees — IACS 2027" },
      { property: "og:description", content: "Conference committees and their members." },
    ],
  }),
  component: Committee,
});

const committees = [
  "Organizing Committee",
  "Scientific Committee",
  "Advisory Committee",
  "Registration Committee",
  "Accommodation",
  "Transport",
  "Food & Hospitality",
  "Finance",
  "IT Support",
  "Sponsorship",
  "Branding & Website",
];

function Committee() {
  const [open, setOpen] = useState<string | null>(committees[0] ?? null);

  return (
    <PageLayout
      eyebrow="Committees"
      title="The people organising IACS 2027"
      intro="Committee compositions are reproduced exactly as printed in the conference brochure."
    >
      <div className="border-t border-rule">
        {committees.map((c) => {
          const isOpen = open === c;
          return (
            <div key={c} className="border-b border-rule">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : c)}
                aria-expanded={isOpen}
                className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
              >
                <span className="font-[family-name:var(--font-display)] text-xl tracking-tight md:text-2xl">
                  {c}
                </span>
                <span className="text-lg text-muted-foreground" aria-hidden>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="pb-8">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Members of the {c.toLowerCase()} will be listed here from the official brochure,
                    with designation and department.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <PlaceholderNote what="All committee member names and designations" />
    </PageLayout>
  );
}
