import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PlaceholderNote, SectionHeading } from "@/components/PageLayout";
import { conference } from "@/lib/conference";
import lab from "@/assets/lab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Conference — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Overview, objectives and theme of the IACS India Section International Conference 2027, hosted by the Institute of Pharmaceutical Research, GLA University, Mathura.",
      },
      { property: "og:title", content: "About IACS 2027" },
      {
        property: "og:description",
        content: "Conference overview, objectives and the host institute at GLA University, Mathura.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout
      eyebrow="About"
      title="An international meeting on the future of cardiovascular care"
      intro={`${conference.name} brings the ${conference.society} to GLA University, Mathura, from ${conference.dates}.`}
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionHeading index="01" title="Conference overview" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Over three days the conference assembles cardiologists, pharmacologists,
            pharmaceutical scientists, clinicians and research scholars around a shared question:
            how the tools of modern science and technology can be translated into better
            cardiovascular outcomes. Sessions include orations, plenary lectures, scientific
            symposia, oral presentations and poster sessions, alongside young investigator awards.
          </p>

          <SectionHeading index="02" title="Objectives" />
          <ol className="mt-6 divide-y divide-rule border-y border-rule">
            {[
              "Advance translational research linking pharmaceutical science and clinical cardiology.",
              "Create a forum for international and national exchange between academia, clinics and industry.",
              "Provide a platform for young investigators to present original work.",
              "Highlight innovation in diagnostics, therapeutics and digital cardiovascular health.",
            ].map((o, i) => (
              <li key={o} className="flex gap-6 py-5">
                <span className="eyebrow shrink-0 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{o}</span>
              </li>
            ))}
          </ol>
          <PlaceholderNote what="The verbatim objectives statement" />

          <SectionHeading index="03" title="Theme" />
          <p className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-snug tracking-tight">
            {conference.theme.line1} {conference.theme.line2}
          </p>
        </div>

        <aside className="md:col-span-5">
          <img
            src={lab}
            alt="Research laboratory at the Institute of Pharmaceutical Research"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover"
          />
          <h2 className="display-md mt-10">Institute of Pharmaceutical Research</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The Institute is GLA University&apos;s centre for pharmaceutical education and
            research, with programmes across pharmaceutics, pharmacology, pharmaceutical chemistry
            and pharmacy practice, and laboratories supporting drug discovery and preclinical
            evaluation.
          </p>
          <h3 className="mt-10 font-[family-name:var(--font-display)] text-xl">GLA University</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Founded in Mathura, Uttar Pradesh, GLA University is a multidisciplinary institution
            with a residential campus, conference auditoria and research facilities that host the
            conference.
          </p>
        </aside>
      </div>
    </PageLayout>
  );
}
