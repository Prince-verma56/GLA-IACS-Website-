"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Ensure plugins are registered in this module before any component mounts
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Utility to apply common ScrollTrigger settings
const getScrollConfig = (trigger: HTMLElement, start = "top 85%") => ({
  trigger,
  start,
  once: true,
});

/**
 * MaskReveal: For section headings, large titles, and major text blocks.
 * Wraps content in an overflow-hidden mask and reveals upward.
 */
export function MaskReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const target = containerRef.current.children[0];
      if (!target) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(target, {
          scrollTrigger: getScrollConfig(containerRef.current!),
          yPercent: 110,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          delay,
        });
      });

      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.from(target, {
          scrollTrigger: getScrollConfig(containerRef.current!),
          opacity: 0,
          duration: 0.8,
          delay,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <Tag ref={containerRef} className={cn("overflow-hidden relative block w-full", className)}>
      <div className="w-full h-full block">{children}</div>
    </Tag>
  );
}

/**
 * TextReveal: For paragraphs, descriptions, and body content.
 * Restrained upward settle.
 */
export function TextReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          y: 12,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay,
        });
      });
      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          opacity: 0,
          duration: 0.6,
          delay,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/**
 * HorizontalReveal: For eyebrows, metadata strips, index numbers.
 * Editorial sideways cue.
 */
export function HorizontalReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          x: -12,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay,
        });
      });
      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          opacity: 0,
          duration: 0.5,
          delay,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/**
 * ImageReveal: For large photographs.
 * Clip-path inset combined with subtle scale.
 */
export function ImageReveal({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const target = ref.current.children[0];
      if (!target) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          clipPath: "inset(8% 0% 8% 0%)",
          duration: 1.2,
          ease: "power3.inOut",
        });
        gsap.from(target, {
          scrollTrigger: getScrollConfig(ref.current!),
          scale: 1.06,
          opacity: 0.8,
          duration: 1.2,
          ease: "power3.inOut",
        });
      });
      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.from(ref.current, {
          scrollTrigger: getScrollConfig(ref.current!),
          opacity: 0,
          duration: 1.2,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn("overflow-hidden relative block w-full", className)}>
      {children}
    </Tag>
  );
}

/**
 * ParallaxImage: For large visual sections where depth is desired.
 * Binds yPercent scrub to scroll position.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const target = ref.current.querySelector("img");
      if (!target) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          target,
          { yPercent: -8 },
          {
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            yPercent: 8,
            ease: "none",
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("overflow-hidden relative block w-full", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover origin-center scale-[1.16]", imgClassName)}
        loading="lazy"
      />
    </div>
  );
}

/**
 * StaggerReveal: For Speaker Cards, Features, Programme Rows, and Lists.
 * Uses a tight stagger on children.
 */
export function StaggerReveal({
  children,
  as: Tag = "div",
  className,
  stagger = 0.1,
  delay = 0,
  yOffset = 25,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
  yOffset?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current!.children, {
          scrollTrigger: getScrollConfig(ref.current!),
          y: yOffset,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger,
          delay,
        });
      });

      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.from(ref.current!.children, {
          scrollTrigger: getScrollConfig(ref.current!),
          opacity: 0,
          duration: 0.6,
          stagger,
          delay,
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
