import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type EditorialTone = "light" | "ivory" | "green";

const toneClasses: Record<EditorialTone, string> = {
  light: "bg-background text-foreground",
  ivory: "bg-surface text-foreground",
  green: "bg-primary-deep text-white",
};

type EditorialSectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: EditorialTone;
};

/**
 * Shared chapter wrapper for the conference's editorial page flow.
 * Pages supply their own content while retaining a consistent tonal rhythm.
 */
export function EditorialSection({
  tone = "light",
  className,
  ...props
}: EditorialSectionProps) {
  return <section className={cn("relative overflow-hidden", toneClasses[tone], className)} {...props} />;
}
