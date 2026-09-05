/**
 * PersonCard — IACS 2027 Committee Profile System
 *
 * Variants:
 *   "chief"        — Chief Patron: 200px tall, bold name, centered editorial treatment
 *   "co-chief"     — Co-Chief Patrons: 160px tall, strong name
 *   "patron"       — Patrons: 130px tall, readable name
 *   "office-bearer"— Office Bearers: 110px tall, compact
 *   "compact"      — Compact rows: 80px tall, text-dominant
 *
 * The placeholder SVG is a neutral silhouette — not initials.
 * Replace `image` prop with the correct path to swap in real photos.
 */

import { cn } from "@/lib/utils";

/* ── DIMENSIONS PER VARIANT ─────────────────────────── */
const VARIANT_CONFIG = {
  chief: {
    imgW: "w-64 sm:w-80 lg:w-[320px]",
    imgH: "h-72 sm:h-96 lg:h-[384px]",
    nameSize: "text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem]",
    roleSize: "text-[1.125rem] lg:text-[1.25rem]",
    orgSize: "text-[1rem] lg:text-[1.0625rem]",
    gap: "mt-8",
  },
  "co-chief": {
    imgW: "w-56 sm:w-72 lg:w-[280px]",
    imgH: "h-64 sm:h-80 lg:h-[340px]",
    nameSize: "text-[1.5rem] sm:text-[1.875rem] lg:text-[2rem]",
    roleSize: "text-[1.0625rem] lg:text-[1.125rem]",
    orgSize: "text-[0.9375rem] lg:text-[1rem]",
    gap: "mt-6",
  },
  patron: {
    imgW: "w-48 sm:w-64 lg:w-[240px]",
    imgH: "h-56 sm:h-72 lg:h-[300px]",
    nameSize: "text-[1.375rem] sm:text-[1.625rem] lg:text-[1.75rem]",
    roleSize: "text-[1rem] lg:text-[1.0625rem]",
    orgSize: "text-[0.875rem] lg:text-[0.9375rem]",
    gap: "mt-6",
  },
  featured: {
    imgW: "w-40 sm:w-56 lg:w-[200px]",
    imgH: "h-48 sm:h-64 lg:h-[240px]",
    nameSize: "text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem]",
    roleSize: "text-[1rem] lg:text-[1.125rem]",
    orgSize: "text-[0.875rem] lg:text-[1rem]",
    gap: "mt-5",
  },
  standard: {
    imgW: "w-24 sm:w-32",
    imgH: "h-28 sm:h-40",
    nameSize: "text-[1rem] sm:text-[1.125rem]",
    roleSize: "text-xs sm:text-[0.875rem]",
    orgSize: "text-xs sm:text-[0.8125rem]",
    gap: "mt-4",
  },
  "office-bearer": {
    imgW: "w-24 sm:w-32",
    imgH: "h-28 sm:h-40",
    nameSize: "text-[1rem] sm:text-[1.125rem]",
    roleSize: "text-xs sm:text-[0.875rem]",
    orgSize: "text-xs sm:text-[0.8125rem]",
    gap: "mt-4",
  },
  compact: {
    imgW: "w-16",
    imgH: "h-20",
    nameSize: "text-[0.875rem]",
    roleSize: "text-[0.75rem]",
    orgSize: "text-[0.75rem]",
    gap: "mt-2.5",
  },
} as const;

export type PersonCardVariant = keyof typeof VARIANT_CONFIG;

interface PersonCardProps {
  name: string;
  role?: string | undefined;
  org?: string | undefined;
  phone?: string | undefined;
  image?: string | null | undefined;
  variant?: PersonCardVariant | undefined;
  className?: string | undefined;
  align?: "center" | "left" | undefined;
}

/* ── PLACEHOLDER SVG — professional silhouette ───────── */
function PersonPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className={cn("w-full h-full text-primary", className)}
    >
      <rect width="100" height="100" fill="currentColor" opacity="0.05" />
      {[...Array(4)].map((_, r) =>
        [...Array(4)].map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={20 + c * 20}
            cy={20 + r * 20}
            r="0.8"
            fill="currentColor"
            opacity="0.1"
          />
        ))
      )}
      <circle cx="50" cy="34" r="16" fill="currentColor" opacity="0.3" />
      <path
        d="M10 95 Q10 72 50 68 Q90 72 90 95"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M15 90 h12 l3 -5 l4 9 l3 -7 l2 4 h12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────── */
export function PersonCard({
  name,
  role,
  org,
  phone,
  image,
  variant = "standard",
  className,
  align = "center",
}: PersonCardProps) {
  const cfg = VARIANT_CONFIG[variant];
  const isCenter = align === "center";

  return (
    <div className={cn("flex flex-col", isCenter ? "items-center text-center" : "items-start text-left", className)}>
      {/* Portrait */}
      <div
        className={cn(
          "overflow-hidden bg-[oklch(0.94_0.018_150)] flex-shrink-0 transition-transform duration-500 group-hover:scale-[1.02]",
          "rounded-t-[2rem] sm:rounded-t-[2.5rem] rounded-b-xl border border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
          cfg.imgW,
          cfg.imgH,
        )}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <PersonPlaceholder />
        )}
      </div>

      {/* Identity */}
      <div className={cfg.gap}>
        <p className={cn("font-[family-name:var(--font-display)] font-semibold leading-tight tracking-tight text-foreground", cfg.nameSize)}>
          {name}
        </p>
        {role && (
          <p className={cn("mt-1 leading-snug text-foreground/55", cfg.roleSize)}>
            {role}
          </p>
        )}
        {org && (
          <p className={cn("mt-0.5 leading-snug text-foreground/38", cfg.orgSize)}>
            {org}
          </p>
        )}
        {phone && (
          <p className={cn("mt-1 font-mono text-foreground/30", cfg.orgSize)}>
            {phone}
          </p>
        )}
      </div>
    </div>
  );
}

/* Dark-background variant (used on green sections) */
export function PersonCardDark({
  name,
  role,
  org,
  phone,
  image,
  variant = "standard",
  className,
  align = "left",
}: PersonCardProps) {
  const cfg = VARIANT_CONFIG[variant];
  const isCenter = align === "center";

  return (
    <div className={cn("group", isCenter ? "flex flex-col items-center text-center" : "flex gap-4 items-start text-left", className)}>
      <div
        className={cn(
          "overflow-hidden bg-white/5 flex-shrink-0 transition-transform duration-500 group-hover:scale-[1.02]",
          "rounded-t-[1.5rem] rounded-b-lg border border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.2)]",
          cfg.imgW,
          cfg.imgH,
        )}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <PersonPlaceholder className="text-white" />
        )}
      </div>
      <div className={cn("min-w-0 flex-1", isCenter ? cfg.gap : "mt-1")}>
        <p className={cn("font-[family-name:var(--font-display)] font-semibold leading-tight tracking-tight text-white", cfg.nameSize)}>
          {name}
        </p>
        {role && <p className={cn("mt-1 leading-snug text-white/55", cfg.roleSize)}>{role}</p>}
        {org && <p className={cn("mt-0.5 leading-snug text-white/35", cfg.orgSize)}>{org}</p>}
        {phone && <p className={cn("mt-1 font-mono text-white/28", cfg.orgSize)}>{phone}</p>}
      </div>
    </div>
  );
}
