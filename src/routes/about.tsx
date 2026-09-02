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
            The {conference.name} of the {conference.society} will bring together eminent scientists, cardiologists, clinicians, academicians, researchers, healthcare professionals, technologists and industry leaders from across the globe.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The conference will focus on pioneering research, emerging technologies and innovative strategies for the prevention, diagnosis, treatment and management of cardiovascular diseases.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The programme will include keynote lectures, invited lectures, plenary sessions, panel discussions, scientific symposia, and oral and poster presentations.
          </p>

          <SectionHeading index="02" title="Objectives" />
          <ol className="mt-6 divide-y divide-rule border-y border-rule">
            {[
              "Bring together leading scientists, clinicians, academicians, researchers, healthcare professionals and industry experts in cardiovascular sciences.",
              "Provide a platform for exchanging knowledge, presenting innovative research and discussing recent developments in cardiovascular sciences and related areas.",
              "Encourage scientific interaction, interdisciplinary collaboration and academic networking.",
              "Explore emerging technologies and innovative approaches that can contribute to improved cardiovascular research and healthcare.",
            ].map((o, i) => (
              <li key={o} className="flex gap-6 py-5">
                <span className="eyebrow shrink-0 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{o}</span>
              </li>
            ))}
          </ol>

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
            The Institute of Pharmaceutical Research was established in 2006 and became an integral part of GLA University in 2010. It offers D.Pharm., B.Pharm., M.Pharm. and Ph.D. programmes and is committed to preparing skilled, ethical and industry-ready pharmacy professionals.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The Institute is supported by qualified faculty, modern classrooms, well-equipped laboratories and advanced research facilities, with a focus on quality education, interdisciplinary research, scientific innovation and industry collaboration.
          </p>

          <h3 className="mt-10 font-[family-name:var(--font-display)] text-xl">GLA University</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Established in 1998 by Shri Narayan Das Agrawal, GLA University, Mathura is a leading institution of higher education in Northern India.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            It was granted university status under UP Act No. 21 of 2010, recognized under Section 12(B) of the UGC Act in 2019 and accredited with an A+ Grade by NAAC in 2023.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The University is spread across 110 acres and serves more than 12,000 students through undergraduate, postgraduate, diploma, doctoral and professional programmes.
          </p>
        </aside>
      </div>
    </PageLayout>
  );
}
