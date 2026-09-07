import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { InternalPageHero } from "@/components/InternalPageHero";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  StaggerReveal,
} from "@/components/motion/ScrollReveal";
import { pageHeroes } from "@/lib/pageHeroes";
import { keyDates, conference, registrationFees, bankDetails } from "@/lib/conference";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SectionTransition } from "@/components/editorial/SectionTransition";

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

const registrationVisuals = {
  conferenceReg: "/images/registration/conference-registration.jpg",
  paymentDetails: "/images/registration/payment-details.jpg",
};

const PAYMENT_QR_IMAGE = "/QR Codes/QR for Payment.jpeg";
const REGISTRATION_QR_IMAGE = "/QR Codes/QR for Registration.png";

function ScientificEditorialMotif({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none opacity-[0.07] overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <circle cx="800" cy="300" r="4" fill="currentColor" />
        <circle cx="860" cy="200" r="3" fill="currentColor" />
        <circle cx="900" cy="300" r="5" fill="currentColor" />
      </svg>
    </div>
  );
}

function EditorialImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-muted rounded-sm shadow-sm border border-black/5", className)}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 z-10" loading="lazy" />
    </div>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silently fail */ }
  };
  return (
    <button onClick={handleCopy} aria-label={`Copy ${value}`} title={copied ? "Copied!" : "Copy to clipboard"} className="ml-2 inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-widest text-primary/50 hover:text-primary border border-primary/15 hover:border-primary/40 px-2 py-0.5 rounded-sm transition-all">
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function Registration() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>

        <InternalPageHero hero={pageHeroes.registration} />

        {/* Journey Overview */}
        <section className="bg-white pt-14 pb-6 md:pt-18 md:pb-8 relative z-10">
          <div className="shell">
            <StaggerReveal className="flex flex-wrap items-center gap-0 justify-start md:justify-center" stagger={0.07}>
              {[
                { num: "01", label: "Choose Fee" },
                { num: "02", label: "Know Deadlines" },
                { num: "03", label: "Complete Payment" },
                { num: "04", label: "Fill Form" },
                { num: "05", label: "Confirm Place" },
              ].map((step, i, arr) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex items-center gap-3 py-3 px-4">
                    <span className="text-primary font-mono text-[0.6875rem] font-semibold tracking-widest opacity-60">{step.num}</span>
                    <span className="text-foreground/80 text-[0.8125rem] font-medium tracking-wide">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="mx-1 shrink-0 opacity-20 font-mono text-xs text-muted-foreground">—</span>
                  )}
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Fee + Deadlines */}
        <section id="fees" className="bg-white pt-10 pb-20 md:pt-14 md:pb-28 relative z-10 scroll-mt-[74px]">
          <div className="shell">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-start">

              <div className="lg:col-span-8">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">01</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md mb-10">Registration Fee</h2>
                </MaskReveal>

                <TextReveal delay={0.15}>
                  <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                    <table className="w-full min-w-[680px] text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-rule">
                          <th rowSpan={2} className="pb-4 pr-6 align-bottom font-mono text-[0.625rem] uppercase tracking-widest text-muted-foreground whitespace-nowrap">Delegate Category</th>
                          <th colSpan={3} className="pb-2 text-center font-mono text-[0.625rem] uppercase tracking-widest text-primary border-b border-primary/20">Indian Delegates</th>
                          <th colSpan={2} className="pb-2 pl-4 text-center font-mono text-[0.625rem] uppercase tracking-widest text-primary/70 border-b border-primary/10">Foreign Delegates</th>
                        </tr>
                        <tr className="border-b border-rule">
                          {["Early Bird", "Post (31 Dec)", "On-Site**", "Early Bird", "Post (31 Dec)"].map((col) => (
                            <th key={col} className="py-3 pr-4 text-center font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground whitespace-nowrap">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <StaggerReveal as="tbody" delay={0.25} yOffset={0} stagger={0.06}>
                        {registrationFees.map((f) => (
                          <tr key={f.category} className="border-b border-rule hover:bg-primary/[0.025] transition-colors">
                            <td className="py-5 pr-6 font-[family-name:var(--font-display)] text-base tracking-tight leading-snug">
                              {f.category}{f.category === "Online Participants" && "*"}
                            </td>
                            <td className="py-5 pr-4 text-center text-[0.9375rem] font-semibold text-foreground tabular-nums">{f.inEarly}</td>
                            <td className="py-5 pr-4 text-center text-sm text-muted-foreground tabular-nums">{f.inLate}</td>
                            <td className="py-5 pr-4 text-center text-sm text-muted-foreground/70 tabular-nums">{f.inSpot}</td>
                            <td className="py-5 pr-4 pl-4 text-center text-[0.9375rem] font-semibold text-foreground tabular-nums border-l border-rule">{f.fgEarly}</td>
                            <td className="py-5 text-center text-sm text-muted-foreground tabular-nums">{f.fgLate}</td>
                          </tr>
                        ))}
                      </StaggerReveal>
                    </table>
                  </div>
                </TextReveal>

                <TextReveal delay={0.35}>
                  <div className="mt-6 pt-5 border-t border-rule text-xs leading-relaxed text-muted-foreground space-y-1.5">
                    <p>Registration fee is non-refundable and non-transferable. Only registered delegates will be allowed to attend the Conference.</p>
                    <p>* Only certificate will be provided.</p>
                    <p>** Kit as per availability.</p>
                    <p className="mt-3 text-primary/80 font-medium">Early bird rates close: 31 December 2026</p>
                  </div>
                </TextReveal>
              </div>

              <div className="lg:col-span-4 scroll-mt-[74px]">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-6">Key Deadlines</p>
                </HorizontalReveal>

                <TextReveal delay={0.2}>
                  <EditorialImage
                    src={registrationVisuals.conferenceReg}
                    alt="International academic conference registration desk"
                    className="aspect-[4/3] w-full mb-8"
                  />
                </TextReveal>

                <StaggerReveal as="div" className="relative pl-7 space-y-0" stagger={0.1} delay={0.3}>
                  {keyDates.map((d, i) => (
                    <div key={d.date} className="relative pb-8 last:pb-0">
                      {i < keyDates.length - 1 && (
                        <div className="absolute left-[-16px] top-[20px] w-px bg-primary/20" style={{ height: "calc(100% - 8px)" }} aria-hidden />
                      )}
                      <div className="absolute left-[-20px] top-[6px] w-2 h-2 rounded-full bg-primary border-2 border-background shadow-sm" aria-hidden />
                      <p className="font-[family-name:var(--font-display)] text-xl tracking-tight leading-none mb-1">{d.date}</p>
                      <p className="text-sm text-muted-foreground leading-snug">{d.label}</p>
                    </div>
                  ))}
                </StaggerReveal>

                <TextReveal delay={0.5}>
                  <Link to="/abstracts" className="link-arrow mt-10 inline-block text-sm">Abstract guidelines →</Link>
                </TextReveal>
              </div>

            </div>
          </div>
        </section>

        <SectionTransition variant="brush" />

        {/* Bank Details */}
        <section id="bank-details" className="bg-[#fcfbf9] py-20 md:py-28 relative z-10 scroll-mt-[74px] overflow-hidden">
          <ScientificEditorialMotif />
          <div className="shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-start">

              <div className="lg:col-span-7">
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">02</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md mb-8">Payment Details</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-lg">
                    Transfer your registration fee directly to the official conference bank account. Please retain the transaction confirmation for your records.
                  </p>
                </TextReveal>

                <StaggerReveal as="dl" className="divide-y divide-rule border-y border-rule" stagger={0.07} delay={0.3}>
                  {bankDetails.map((b) => (
                    <div key={b.label} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8">
                      <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground shrink-0 sm:w-48">{b.label}</dt>
                      <dd className="font-[family-name:var(--font-display)] text-[1.0625rem] tracking-tight flex items-center gap-1 flex-wrap">
                        {b.value}
                        {(b.label === "Account No." || b.label === "IFSC Code") && <CopyButton value={b.value} />}
                      </dd>
                    </div>
                  ))}
                </StaggerReveal>

                <TextReveal delay={0.5}>
                  <div className="mt-8 p-5 bg-primary/[0.04] border border-primary/10 rounded-sm">
                    <p className="eyebrow text-primary mb-2">Important</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      After completing the bank transfer, retain a screenshot or receipt of the transaction. You will need this when completing the registration form.
                    </p>
                  </div>
                </TextReveal>
              </div>

              <div className="lg:col-span-5">
                <TextReveal delay={0.3}>
                  <EditorialImage
                    src={registrationVisuals.paymentDetails}
                    alt="Academic conference payment and documentation"
                    className="aspect-[4/3] w-full"
                  />
                </TextReveal>
                <TextReveal delay={0.4}>
                  <div className="mt-6 pt-6 border-t border-rule">
                    <p className="eyebrow text-muted-foreground mb-3">Contact for queries</p>
                    <a href={`mailto:${conference.email}`} className="font-[family-name:var(--font-display)] text-lg tracking-tight hover:text-primary transition-colors block">{conference.email}</a>
                    <p className="mt-1 text-sm text-muted-foreground">{conference.phone}</p>
                  </div>
                </TextReveal>
              </div>

            </div>
          </div>
        </section>

        <SectionTransition variant="contour" />

        {/* QR Code Registration Journey */}
        <section id="qr-codes" className="bg-white py-20 md:py-28 relative z-10 scroll-mt-[74px]">
          <div className="shell">
            <div className="text-center mb-16">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-4">03</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Complete Your Registration</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto text-sm">
                  Use the QR codes below to complete your payment and fill out the official registration form.
                </p>
              </TextReveal>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">

                <StaggerReveal delay={0.3} className="flex flex-col items-center px-8 py-12 border border-rule bg-[#faf8f5] relative">
                  <div className="absolute top-6 left-6">
                    <p className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground">Step</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-primary/15 leading-none font-semibold">01</p>
                  </div>
                  <div className="mt-10 mb-6 text-center">
                    <p className="eyebrow text-primary mb-1">Scan for Payment</p>
                    <p className="text-xs text-muted-foreground">Use your banking / UPI app</p>
                  </div>
                  <div className="w-full max-w-[200px] bg-white p-3 border border-black/8 shadow-sm">
                    <img src={PAYMENT_QR_IMAGE} alt="QR code for conference fee payment" className="w-full h-auto object-contain block" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="mt-6 text-xs text-muted-foreground text-center leading-relaxed max-w-[180px]">
                    Complete payment first, then proceed to registration.
                  </p>
                </StaggerReveal>

                <StaggerReveal delay={0.45} className="flex flex-col items-center px-8 py-12 border border-primary/15 bg-primary/[0.025] relative">
                  <div className="absolute top-6 left-6">
                    <p className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground">Step</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-primary/20 leading-none font-semibold">02</p>
                  </div>
                  <div className="mt-10 mb-6 text-center">
                    <p className="eyebrow text-primary mb-1">Scan for Registration</p>
                    <p className="text-xs text-muted-foreground">Official registration form</p>
                  </div>
                  <div className="w-full max-w-[200px] bg-white p-3 border border-black/8 shadow-sm">
                    <img src={REGISTRATION_QR_IMAGE} alt="QR code for conference registration form" className="w-full h-auto object-contain block" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <p className="mt-6 text-xs text-muted-foreground text-center leading-relaxed max-w-[180px]">
                    Fill in your details and upload payment proof.
                  </p>
                </StaggerReveal>

              </div>

              <TextReveal delay={0.55}>
                <div className="mt-12 pt-10 border-t border-rule grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {[
                    { n: "01", t: "Review Fee Category", sub: "Select the right category above" },
                    { n: "02", t: "Complete Payment", sub: "Bank transfer or UPI via QR" },
                    { n: "03", t: "Submit Registration", sub: "Fill form and upload receipt" },
                  ].map((item) => (
                    <div key={item.n} className="flex flex-col items-center gap-2">
                      <span className="font-mono text-2xl font-semibold text-primary/20 leading-none">{item.n}</span>
                      <span className="font-[family-name:var(--font-display)] text-[0.9375rem] tracking-tight text-foreground">{item.t}</span>
                      <span className="text-xs text-muted-foreground">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </TextReveal>
            </div>

            <TextReveal delay={0.6}>
              <div className="mt-14 flex flex-col items-center gap-4">
                <a
                  href={conference.registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex items-center gap-2 px-10 hover:-translate-y-0.5 transition-transform"
                >
                  Open Registration Form →
                </a>
                <p className="text-xs text-muted-foreground">Opens the official Google Form in a new tab</p>
              </div>
            </TextReveal>

          </div>
        </section>

        <SectionTransition variant="footer-entry" />

      </main>
      <SiteFooter />
    </div>
  );
}
