import { Link } from "@tanstack/react-router";
import { conference, navigation, secondaryLinks, PLACEHOLDER } from "@/lib/conference";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="shell grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-xl font-semibold text-white">
            GLA University, Mathura
          </p>
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

        <div className="md:col-span-3">
          <p className="eyebrow text-white/50">Quick links</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[...navigation.slice(1), ...secondaryLinks].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-white/50">Conference secretariat</p>
          <p className="mt-5 text-sm">
            <a
              href={`mailto:${conference.email}`}
              className="border-b border-white/30 pb-0.5 transition-colors hover:text-white"
            >
              {conference.email}
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {conference.phone}
          </p>
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
