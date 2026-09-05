import { Link } from "@tanstack/react-router";
import { conference } from "@/lib/conference";

const footerNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Committee", to: "/committee" },
  { label: "Speakers", to: "/speakers" },
  { label: "Programme", to: "/programme" },
  { label: "Abstracts", to: "/abstracts" },
  { label: "Registration", to: "/registration" },
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "Venue", to: "/venue" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="shell grid gap-12 py-20 md:grid-cols-12 lg:gap-8">
        <div className="md:col-span-12 lg:col-span-4">
          <p className="font-display text-xl font-semibold text-white">GLA University, Mathura</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Institute of Pharmaceutical Research
            <br />
            In association with {conference.society}
          </p>
          <p className="mt-8 text-sm leading-relaxed">
            {conference.dates}
            <br />
            {conference.venue}
          </p>
        </div>

        <div className="md:col-span-7 lg:col-span-5">
          <p className="eyebrow text-white/50">Navigation</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerNav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 lg:col-span-3">
          <p className="eyebrow text-white/50">Conference secretariat</p>
          <p className="mt-5 text-sm">
            <a
              href={`mailto:${conference.email}`}
              className="border-b border-white/30 pb-0.5 transition-colors hover:text-white"
            >
              {conference.email}
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{conference.phone}</p>
          <div className="mt-8">
            <a
              href={conference.registrationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white/30 px-5 py-2.5 text-xs uppercase tracking-widest text-white/80 transition-all hover:border-white/60 hover:text-white"
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2027 GLA University, Mathura. All rights reserved.</p>
          <p>{conference.name} — IACS India Section</p>
        </div>
      </div>
    </footer>
  );
}
