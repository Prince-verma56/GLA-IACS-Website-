import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { conference, sightseeing } from "@/lib/conference";
import campus from "@/assets/campus-hero.jpg";

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [
      { title: "Venue — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content: `Venue details and sightseeing information for the ${conference.name}.`,
      },
      { property: "og:title", content: "Venue for IACS 2027" },
      { property: "og:description", content: "GLA University, Mathura" },
    ],
  }),
  component: Venue,
});

function Venue() {
  return (
    <PageLayout
      eyebrow="Venue"
      title="Location & Accommodation"
      intro={`The conference will be hosted at ${conference.venue}.`}
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading index="01" title="Conference Venue" />
          <p className="mt-6 leading-relaxed text-muted-foreground font-medium">
            {conference.address}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Mathura is a well-connected city in Uttar Pradesh, located just an hour from Agra and in close proximity to Delhi. The venue provides a serene yet accessible environment for our attendees.
          </p>

          <SectionHeading index="02" title="Sightseeing around Mathura" />
          <p className="mt-4 leading-relaxed text-muted-foreground mb-4">
            While attending the conference, delegates may wish to explore the rich cultural and historical sites in and around Mathura and Agra.
          </p>
          <ul className="divide-y divide-rule border-y border-rule">
            {sightseeing.map((item, i) => (
              <li key={item.place} className="flex gap-6 py-5">
                <span className="eyebrow shrink-0 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">
                  <strong>{item.place}</strong> <span className="text-muted-foreground">— {item.city}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <aside className="md:col-span-5">
          <img
            src={campus}
            alt="GLA University campus"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover rounded-md shadow-sm"
          />
        </aside>
      </div>
    </PageLayout>
  );
}
