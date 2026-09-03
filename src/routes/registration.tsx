import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { keyDates, conference, registrationFees, bankDetails } from "@/lib/conference";
import { StaggerReveal, TextReveal, HorizontalReveal } from "@/components/motion/ScrollReveal";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content:
          "Registration fees for Indian and foreign delegates, bank details and the online registration form for the IACS India Section International Conference 2027 at GLA University, Mathura.",
      },
      { property: "og:title", content: "Registration — IACS 2027" },
      {
        property: "og:description",
        content:
          "Students ₹3,000 · Faculty ₹3,500 · Industry ₹4,000 · Online ₹1,500. Registration opens 25 August 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Registration,
});

function Registration() {
  return (
    <PageLayout
      eyebrow="Registration"
      title="Register for IACS 2027"
      intro="Registration opens 25 August 2026 and closes 20 January 2027. The abstract submission deadline is 25 December 2026. Early bird registration rates apply until 31 December 2026."
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <div id="fees">
            <SectionHeading index="01" title="Registration fee" />
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th className="eyebrow pb-4 pr-6 text-muted-foreground">Category</th>
                    <th className="eyebrow pb-4 pr-6 text-muted-foreground">Indian · Early bird</th>
                    <th className="eyebrow pb-4 pr-6 text-muted-foreground">
                      Indian · Post 31.12.2026
                    </th>
                    <th className="eyebrow pb-4 pr-6 text-muted-foreground">
                      Foreign · Early bird
                    </th>
                    <th className="eyebrow pb-4 text-muted-foreground">
                      Foreign · Post 31.12.2026
                    </th>
                  </tr>
                </thead>
                <StaggerReveal as="tbody" delay={0.2} yOffset={10}>
                  {registrationFees.map((f) => (
                    <tr key={f.category} className="border-b border-rule">
                      <td className="py-5 pr-6 font-[family-name:var(--font-display)] text-lg tracking-tight">
                        {f.category}
                      </td>
                      <td className="py-5 pr-6 text-sm">{f.inEarly}</td>
                      <td className="py-5 pr-6 text-sm text-muted-foreground">{f.inLate}</td>
                      <td className="py-5 pr-6 text-sm">{f.fgEarly}</td>
                      <td className="py-5 text-sm text-muted-foreground">{f.fgLate}</td>
                    </tr>
                  ))}
                </StaggerReveal>
              </table>
            </div>
            <TextReveal delay={0.3}>
              <p className="rule-top mt-8 pt-5 text-sm leading-relaxed text-muted-foreground">
                Registration fee is non-refundable and nontransferable. Only registered delegates will
                be allowed to attend the Conference.
              </p>
            </TextReveal>
          </div>

          <SectionHeading index="02" title="Bank details" />
          <StaggerReveal as="dl" className="mt-8 divide-y divide-rule border-y border-rule text-sm">
            {bankDetails.map((b) => (
              <div key={b.label} className="grid gap-1 py-5 md:grid-cols-3">
                <dt className="text-muted-foreground">{b.label}</dt>
                <dd className="md:col-span-2">{b.value}</dd>
              </div>
            ))}
          </StaggerReveal>

          <div id="form">
            <SectionHeading index="03" title="Online registration form" />
            <TextReveal>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Complete the official registration form below. Enter your participant details,
                registration category, mode of participation and payment information as required.
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                For abstract submission, follow the official abstract guidelines and submit before 25
                December 2026.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <div className="mt-8 border border-rule">
                <iframe
                  src={`${conference.registrationFormUrl}?embedded=true`}
                  title="IACS 2027 registration form"
                  width="100%"
                  height="650"
                  loading="lazy"
                  className="block w-full"
                >
                  Loading form…
                </iframe>
              </div>
            </TextReveal>
            <TextReveal delay={0.3}>
              <a
                href={conference.registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-solid mt-8 inline-flex"
              >
                Open the form in a new tab
              </a>
            </TextReveal>
          </div>
        </div>

        <aside className="md:col-span-4">
          <HorizontalReveal>
            <p className="eyebrow text-primary">Key deadlines</p>
          </HorizontalReveal>
          <StaggerReveal as="ul" className="mt-6 divide-y divide-rule border-y border-rule">
            {keyDates.map((d) => (
              <li key={d.date} className="py-5">
                <p className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                  {d.date}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{d.label}</p>
              </li>
            ))}
          </StaggerReveal>
          <TextReveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Early bird rates close: 31 December 2026
            </p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <Link to="/abstracts" className="link-arrow mt-8 inline-block">
              Abstract guidelines <span aria-hidden>→</span>
            </Link>
          </TextReveal>
        </aside>
      </div>
    </PageLayout>
  );
}
