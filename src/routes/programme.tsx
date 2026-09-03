import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import {
  conference,
  orations,
  symposia,
  youngInvestigatorAwards,
  researchAreas,
} from "@/lib/conference";
import { StaggerReveal, TextReveal } from "@/components/motion/ScrollReveal";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Day-wise scientific programme for 11, 12 and 13 February 2027 at the IACS India Section International Conference, GLA University, Mathura.",
      },
      { property: "og:title", content: "Programme — IACS 2027" },
      { property: "og:description", content: "Scientific schedule for 11–13 February 2027." },
    ],
  }),
  component: Programme,
});

const days = [
  { id: "11", label: "11 February", sub: "Wednesday" },
  { id: "12", label: "12 February", sub: "Thursday" },
  { id: "13", label: "13 February", sub: "Friday" },
];

function Programme() {
  const [day, setDay] = useState("11");

  return (
    <PageLayout
      eyebrow="Programme"
      title="Three days of orations, symposia and presentations"
      intro="The detailed session schedule is published from the official brochure and updated as sessions are confirmed."
    >
      <StaggerReveal className="flex flex-wrap gap-0 border-y border-rule" yOffset={10}>
        {days.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setDay(d.id)}
            className={`flex-1 border-r border-rule px-6 py-6 text-left transition-colors last:border-r-0 ${
              day === d.id ? "bg-surface" : "hover:bg-surface/60"
            }`}
          >
            <span
              className={`block font-[family-name:var(--font-display)] text-xl tracking-tight ${
                day === d.id ? "text-primary" : ""
              }`}
            >
              {d.label}
            </span>
            <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {d.sub} 2027
            </span>
          </button>
        ))}
      </StaggerReveal>

      <table className="mt-12 w-full text-left">
        <thead>
          <tr className="border-b border-rule">
            {["Time", "Session", "Speaker", "Venue"].map((h) => (
              <th key={h} className="eyebrow pb-4 pr-6 text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <StaggerReveal as="tbody" yOffset={10} delay={0.2}>
          <tr className="border-b border-rule align-top">
            <td className="py-6 pr-6 whitespace-nowrap text-sm text-muted-foreground">—</td>
            <td className="py-6 pr-6 font-[family-name:var(--font-display)] text-lg tracking-tight">
              Session details to be announced
            </td>
            <td className="py-6 pr-6 text-sm text-muted-foreground">As per official programme</td>
            <td className="py-6 text-sm text-muted-foreground">GLA University, Mathura</td>
          </tr>
        </StaggerReveal>
      </table>

      <div className="mt-8 mb-20 text-sm text-muted-foreground">
        The detailed session schedule will be published here once confirmed by the scientific
        committee.
      </div>

      <div className="mb-20">
        <SectionHeading index="01" title="Scientific Components" />
        <StaggerReveal className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl">
              Orations and Symposia of IACS
            </h3>
            <ul className="mt-4 list-inside list-disc text-muted-foreground leading-relaxed">
              {[...orations, ...symposia].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl">
              Awards to Young Investigators
            </h3>
            <ul className="mt-4 list-inside list-disc text-muted-foreground leading-relaxed">
              {youngInvestigatorAwards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </StaggerReveal>
      </div>

      <div className="mb-20">
        <SectionHeading index="02" title="Scientific Topics" />
        <StaggerReveal as="ul" className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3 text-sm text-muted-foreground leading-relaxed">
          {researchAreas.map((area) => (
            <li key={area} className="flex gap-2">
              <span className="text-primary">•</span> {area}
            </li>
          ))}
        </StaggerReveal>
      </div>

      <div className="mb-20">
        <SectionHeading index="03" title="Abstract Submission Guidelines" />
        <StaggerReveal className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4 border-t border-rule pt-6">
          <div>
            <p className="eyebrow text-muted-foreground">Deadline</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-lg">25 December 2026</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Format</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Aim, Method, Result, Conclusion, 3-5 key words.
              <br />
              Max 250 words. Times New Roman, 12 pt, double line spacing.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Oral / Online</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Maximum 8 minutes presentation followed by 2 minutes of discussion.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Poster Size</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-lg">3 × 5 feet</p>
          </div>
        </StaggerReveal>
      </div>
    </PageLayout>
  );
}
