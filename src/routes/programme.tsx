import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PlaceholderNote } from "@/components/PageLayout";

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
      <div className="flex flex-wrap gap-0 border-y border-rule">
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
      </div>

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
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="border-b border-rule align-top">
              <td className="py-6 pr-6 whitespace-nowrap text-sm text-muted-foreground">—</td>
              <td className="py-6 pr-6 font-[family-name:var(--font-display)] text-lg tracking-tight">
                Session to be announced
              </td>
              <td className="py-6 pr-6 text-sm text-muted-foreground">As per brochure</td>
              <td className="py-6 text-sm text-muted-foreground">GLA University, Mathura</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PlaceholderNote what={`The full session timetable for ${day} February 2027`} />
    </PageLayout>
  );
}
