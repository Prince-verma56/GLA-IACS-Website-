import { cn } from "@/lib/utils";

type TransitionVariant =
  | "brush"
  | "contour"
  | "paper"
  | "green-entry"
  | "green-exit"
  | "footer-entry";

const palettes = {
  brush: { from: "--background", to: "--surface", accent: "--muted" },
  contour: { from: "--surface", to: "--background", accent: "--muted" },
  paper: { from: "--background", to: "--surface", accent: "--muted" },
  "green-entry": { from: "--surface", to: "--primary-deep", accent: "--primary" },
  "green-exit": { from: "--primary-deep", to: "--background", accent: "--primary" },
  "footer-entry": { from: "--background", to: "--primary-deep", accent: "--primary" },
} satisfies Record<TransitionVariant, { from: string; to: string; accent: string }>;

/** A small family of non-repeating editorial edges between major page chapters. */
export function SectionTransition({
  variant = "brush",
  className,
}: {
  variant?: TransitionVariant;
  className?: string;
}) {
  const palette = palettes[variant];
  const from = `var(${palette.from})`;
  const to = `var(${palette.to})`;
  const accent = `var(${palette.accent})`;

  if (variant === "paper") {
    return (
      <div
        aria-hidden="true"
        className={cn("relative -mb-px h-10 overflow-hidden md:h-16", className)}
        style={{ backgroundColor: from }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill={to} d="M0 50 1440 5v95H0Z" />
          <path fill={accent} opacity="0.16" d="M0 57 1440 12v6L0 64Z" />
        </svg>
      </div>
    );
  }

  if (variant === "green-entry" || variant === "footer-entry") {
    return (
      <div
        aria-hidden="true"
        className={cn("relative -mb-px h-14 overflow-hidden md:h-22", className)}
        style={{ backgroundColor: from }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill={accent} opacity="0.12" d="M0 76C220 53 368 100 609 70c230-29 408-88 831-39v89H0Z" />
          <path fill={to} d="M0 89c250-38 424 32 668-1 242-33 457-102 772-52v84H0Z" />
          <path d="M-30 73c200-28 363 35 598 1 213-30 455-111 899-52" stroke="currentColor" strokeWidth="1" opacity="0.18" />
        </svg>
      </div>
    );
  }

  if (variant === "green-exit") {
    return (
      <div
        aria-hidden="true"
        className={cn("relative -mb-px h-14 overflow-hidden md:h-22", className)}
        style={{ backgroundColor: from }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill={to} d="M0 70c220-27 392 48 655 1 205-37 476-87 785-45v94H0Z" />
          <path d="M-30 59c226-29 412 53 683 5 234-41 495-86 817-45" stroke={accent} strokeWidth="1" opacity="0.25" />
          <path d="M-25 72c209-23 404 48 660 8 256-41 476-93 817-48" stroke={accent} strokeWidth="1" opacity="0.12" />
        </svg>
      </div>
    );
  }

  if (variant === "contour") {
    return (
      <div
        aria-hidden="true"
        className={cn("relative -mb-px h-12 overflow-hidden md:h-18", className)}
        style={{ backgroundColor: from }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill={to} d="M0 50c255-47 389 35 624 5 286-37 440-76 816-25v70H0Z" />
          <g fill="none" stroke={accent} strokeWidth="1" opacity="0.22">
            <path d="M-20 45c224-42 390 38 640 2 262-39 442-79 841-24" />
            <path d="M-20 58c232-37 402 43 652 8 267-36 434-72 829-22" />
            <path d="M-20 70c245-31 394 49 649 13 265-37 443-69 832-18" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("relative -mb-px h-12 overflow-hidden md:h-18", className)}
      style={{ backgroundColor: from }}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill={accent} opacity="0.22" d="M-15 45c210 29 336-22 567 3 270 29 492-39 903 3v55H-15Z" />
        <path fill={to} d="M-15 61c223 20 376-42 615-4 229 35 472-29 855 3v40H-15Z" />
        <path fill="none" stroke={accent} strokeWidth="1" opacity="0.22" d="M-15 57c214 27 365-36 607-1 236 33 481-30 869 5" />
      </svg>
    </div>
  );
}
