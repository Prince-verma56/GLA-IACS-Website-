import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { keyDates, conference, registrationFees, bankDetails } from "@/lib/conference";

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
      intro="Registration opens 25 August 2026 and closes 20 January 2027. Early bird rates apply until 31 December 2026."
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
                <tbody>
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
                </tbody>
              </table>
            </div>
            <p className="rule-top mt-8 pt-5 text-sm leading-relaxed text-muted-foreground">
              The registration fee is non-refundable and non-transferable. Only registered delegates
              will be allowed to attend the conference.
            </p>
          </div>

          <SectionHeading index="02" title="Bank details" />
          <dl className="mt-8 divide-y divide-rule border-y border-rule text-sm">
            {bankDetails.map((b) => (
              <div key={b.label} className="grid gap-1 py-5 md:grid-cols-3">
                <dt className="text-muted-foreground">{b.label}</dt>
                <dd className="md:col-span-2">{b.value}</dd>
              </div>
            ))}
          </dl>

          <div id="form">
            <SectionHeading index="03" title="Online registration form" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Complete the official registration form below. After payment, enter the amount paid
              and the transaction ID in the form. For any difficulty, write to{" "}
              <a
                href={`mailto:${conference.email}`}
                className="underline underline-offset-4 hover:text-primary"
              >
                {conference.email}
              </a>
              .
            </p>
            <div className="mt-8 border border-rule">
              <iframe
                src={`${conference.registrationFormUrl}?embedded=true`}
                title="IACS 2027 registration form"
                width="100%"
                height="1100"
                loading="lazy"
                className="block w-full"
              >
                Loading form…
              </iframe>
            </div>
            <a
              href={conference.registrationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-solid mt-8"
            >
              Open the form in a new tab
            </a>
          </div>
        </div>

        <aside className="md:col-span-4">
          <p className="eyebrow text-primary">Key deadlines</p>
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {keyDates.map((d) => (
              <li key={d.date} className="py-5">
                <p className="font-[family-name:var(--font-display)] text-lg tracking-tight">
                  {d.date}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{d.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Early bird rates close 31 December 2026.
          </p>
          <Link to="/abstracts" className="link-arrow mt-8">
            Abstract guidelines <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </PageLayout>
  );
}
