import { cn } from "@/lib/utils";

type MotifVariant = "line" | "contour" | "molecular" | "all";

export function ScientificEditorialMotif({
  variant = "all",
  className,
}: {
  variant?: MotifVariant;
  className?: string;
}) {
  const showLine = variant === "line" || variant === "all";
  const showContour = variant === "contour" || variant === "all";
  const showMolecular = variant === "molecular" || variant === "all";

  return (
    <svg
      className={cn("pointer-events-none select-none", className)}
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {showContour && (
        <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <path d="M-80 90C120 10 234 150 430 74c161-62 266-41 399 21 144 67 268 56 409-32 91-57 182-58 280-19" opacity="0.48" />
          <path d="M-92 123c218-86 324 67 526-20 136-59 247-42 389 19 144 62 295 47 422-38 100-67 187-54 294-21" opacity="0.28" />
          <path d="M-58 338c182-93 313-19 448-78 170-74 277 39 438 2 160-36 249-139 410-56 105 54 195 24 283-15" opacity="0.38" />
        </g>
      )}

      {showLine && (
        <path
          d="M0 263h380l18-18 19 36 22-83 25 129 22-64 17 18h307l18-16 17 31 20-67 24 116 22-63 17 20h411"
          stroke="currentColor"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          opacity="0.52"
        />
      )}

      {showMolecular && (
        <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.38">
          <path d="m1137 76 48 28v57l-48 28-48-28v-57l48-28Zm96 57 48 28v57l-48 28-48-28v-57l48-28Z" />
          <path d="m1185 132 48 57" />
          <circle cx="1137" cy="132" r="4" fill="currentColor" stroke="none" />
          <circle cx="1233" cy="189" r="4" fill="currentColor" stroke="none" />
          <circle cx="1025" cy="323" r="4" fill="currentColor" stroke="none" />
          <circle cx="1075" cy="291" r="2.5" fill="currentColor" stroke="none" />
          <path d="m1025 323 50-32 48 28" />
        </g>
      )}
    </svg>
  );
}
