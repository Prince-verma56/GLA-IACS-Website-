/**
 * IACS 2027 — Conference Graphic System
 * Reusable SVG + layout primitives inspired by cardiovascular / scientific motifs.
 * Keep all graphics subtle — opacity and stroke weights deliberately restrained.
 */

"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ────────────────────────────────────────────────────────────────
   HeartbeatLine
   An ECG-style waveform that draws itself on scroll.
   Use as a section separator or decorative element.
──────────────────────────────────────────────────────────────── */
export function HeartbeatLine({
  className,
  color = "currentColor",
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const path = ref.current.querySelector("path");
    if (!path) return;
    const len = path.getTotalLength();

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        scrollTrigger: { trigger: ref.current!, start: "top 90%", once: true },
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "power2.inOut",
      });
    });
    gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(path, { strokeDasharray: "none", strokeDashoffset: 0, opacity });
    });
  }, { scope: ref });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("w-full", className)}
      style={{ opacity }}
    >
      <path
        d="M0 20 H380 l10 -16 l12 32 l10 -24 l8 16 l6 -8 H680 l10 -16 l12 32 l10 -24 l8 16 l6 -8 H1200"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   PulseDivider
   Simple horizontal rule with a subtle pulse accent.
   Use between major page sections.
──────────────────────────────────────────────────────────────── */
export function PulseDivider({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const line = ref.current.querySelector(".pulse-line");
    if (!line) return;

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(line, {
        scrollTrigger: { trigger: ref.current!, start: "top 92%", once: true },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.0,
        ease: "power3.out",
      });
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={cn("relative overflow-hidden py-0", className)} aria-hidden>
      <div className="pulse-line h-px w-full bg-primary/25" />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   ConcentricPulse
   Decorative concentric circles — used as background texture
   on dark editorial sections.
──────────────────────────────────────────────────────────────── */
export function ConcentricPulse({
  className,
  rings = 4,
  color = "currentColor",
}: {
  className?: string;
  rings?: number;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const circles = ref.current.querySelectorAll("circle");

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(circles, {
        scrollTrigger: { trigger: ref.current!, start: "top 85%", once: true },
        scale: 0.6,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.4,
        stagger: 0.15,
        ease: "power2.out",
      });
    });
  }, { scope: ref });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      style={{ color }}
    >
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={60 + i * 55}
          stroke="currentColor"
          strokeWidth="0.75"
          opacity={0.12 - i * 0.02}
        />
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   ScientificGrid
   Fine dot grid — subtle background for dark editorial panels.
──────────────────────────────────────────────────────────────── */
export function ScientificGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="sci-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sci-grid)" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
   DarkPanel
   Deep-green editorial content block.
   Accepts children and an optional graphic overlay.
──────────────────────────────────────────────────────────────── */
export function DarkPanel({
  children,
  className,
  graphic = true,
}: {
  children: ReactNode;
  className?: string;
  graphic?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-primary-deep text-white", className)}>
      {graphic && (
        <>
          <ConcentricPulse className="absolute -right-24 -top-24 h-[380px] w-[380px] text-white opacity-40" />
          <ScientificGrid className="absolute inset-0 h-full w-full text-white opacity-20" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
