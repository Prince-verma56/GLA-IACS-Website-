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

const PAYMENT_QR_IMAGE = "/QR Codes/QR for Payment.png";
const REGISTRATION_QR_IMAGE = "/QR Codes/QR for Registration.png";

function Registration() {
  return (
    <PageLayout
      eyebrow="Registration"
      title="Register for IACS 2027"
      intro="Registration opens 25 August 2026 and closes 05 January 2027. The abstract submission deadline is 25 December 2026. Early bird registration rates apply until 31 December 2026."
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <div id="fees">
            <SectionHeading index="01" title="Registration fee" />
            <div className="mt-8 overflow-x-auto overflow-y-hidden">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="border-b border-rule">
                    <th rowSpan={2} className="eyebrow pb-4 pr-6 align-bottom text-muted-foreground">
                      Category
                    </th>
                    <th
                      colSpan={3}
                      className="eyebrow border-b border-rule pb-2 text-center text-primary"
                    >
                      Indian Delegates
                    </th>
                    <th
                      colSpan={2}
                      className="eyebrow border-b border-rule pb-2 text-center text-primary"
                    >
                      Foreign Delegates
                    </th>
                  </tr>
                  <tr className="border-b border-rule">
                    <th className="eyebrow pb-4 pt-4 pr-4 text-center text-muted-foreground">
                      Early Bird
                    </th>
                    <th className="eyebrow pb-4 pt-4 pr-4 text-center text-muted-foreground">
                      Post (31.12.2026)
                    </th>
                    <th className="eyebrow pb-4 pt-4 pr-6 text-center text-muted-foreground">
                      On Spot**
                    </th>
                    <th className="eyebrow pb-4 pt-4 pr-4 text-center text-muted-foreground">
                      Early Bird
                    </th>
                    <th className="eyebrow pb-4 pt-4 text-center text-muted-foreground">
                      Post (31.12.2026)
                    </th>
                  </tr>
                </thead>
                <StaggerReveal as="tbody" delay={0.2} yOffset={0}>
                  {registrationFees.map((f) => (
                    <tr key={f.category} className="border-b border-rule hover:bg-muted/30 transition-colors">
                      <td className="py-5 pr-6 font-[family-name:var(--font-display)] text-lg tracking-tight">
                        {f.category}
                        {f.category === "Online Participants" && "*"}
                      </td>
                      <td className="py-5 pr-4 text-center text-sm">{f.inEarly}</td>
                      <td className="py-5 pr-4 text-center text-sm text-muted-foreground">
                        {f.inLate}
                      </td>
                      <td className="py-5 pr-6 text-center text-sm text-muted-foreground">
                        {f.inSpot}
                      </td>
                      <td className="py-5 pr-4 text-center text-sm">{f.fgEarly}</td>
                      <td className="py-5 text-center text-sm text-muted-foreground">
                        {f.fgLate}
                      </td>
                    </tr>
                  ))}
                </StaggerReveal>
              </table>
            </div>
            
            <TextReveal delay={0.3}>
              <div className="rule-top mt-8 pt-5 text-sm leading-relaxed text-muted-foreground space-y-2">
                <p>Registration fee is non-refundable and nontransferable. Only registered delegates will be allowed to attend the Conference.</p>
                <p>* Only certificate will be provided.</p>
                <p>** Kit as per the availability.</p>
              </div>
            </TextReveal>
          </div>

          <div id="bank-details" className="mt-16">
            <SectionHeading index="02" title="Bank details" />
            <StaggerReveal as="dl" className="mt-8 divide-y divide-rule border-y border-rule text-sm">
              {bankDetails.map((b) => (
                <div key={b.label} className="grid gap-1 py-5 md:grid-cols-3">
                  <dt className="text-muted-foreground">{b.label}</dt>
                  <dd className="md:col-span-2 font-medium tracking-wide">
                    {b.value}
                  </dd>
                </div>
              ))}
            </StaggerReveal>
          </div>
          
          <div id="qr-codes" className="mt-16">
            <SectionHeading index="03" title="Complete your registration" />
            <TextReveal>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Please use the QR codes below to complete your payment and fill out the official registration form.
              </p>
            </TextReveal>
            
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <StaggerReveal delay={0.2} className="flex flex-col items-center rounded-sm border border-rule bg-surface p-8">
                <p className="eyebrow mb-6 text-primary">Scan for Payment</p>
                <div className="aspect-square w-full max-w-[200px] bg-white p-2 shadow-sm">
                  <img 
                    src={PAYMENT_QR_IMAGE} 
                    alt="Payment QR Code" 
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden h-full w-full flex-col items-center justify-center border border-dashed border-muted-foreground/30 bg-muted/10 text-center text-xs text-muted-foreground">
                    <p>Payment QR</p>
                    <p className="mt-1 text-[10px] opacity-60">Placeholder</p>
                  </div>
                </div>
              </StaggerReveal>
              
              <StaggerReveal delay={0.3} className="flex flex-col items-center rounded-sm border border-rule bg-surface p-8">
                <p className="eyebrow mb-6 text-primary">Scan for Registration</p>
                <div className="aspect-square w-full max-w-[200px] bg-white p-2 shadow-sm">
                  <img 
                    src={REGISTRATION_QR_IMAGE} 
                    alt="Registration QR Code" 
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden h-full w-full flex-col items-center justify-center border border-dashed border-muted-foreground/30 bg-muted/10 text-center text-xs text-muted-foreground">
                    <p>Registration QR</p>
                    <p className="mt-1 text-[10px] opacity-60">Placeholder</p>
                  </div>
                </div>
              </StaggerReveal>
            </div>
            
            <TextReveal delay={0.4}>
              <div className="mt-10 flex items-center justify-center">
                <a
                  href={conference.registrationFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid inline-flex"
                >
                  Or open registration form link
                </a>
              </div>
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

