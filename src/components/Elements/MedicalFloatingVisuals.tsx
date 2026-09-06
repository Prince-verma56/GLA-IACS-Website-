import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface MedicalVisualConfig {
  src: string;
  side: "left" | "right";
  className?: string; // Positioning and size classes. e.g., "top-10 -left-10 w-64"
  opacity?: number; // Final opacity. e.g., 0.15
  delay?: number; // Entrance delay in seconds
}

interface Props {
  visuals: MedicalVisualConfig[];
  className?: string; // Optional classes for the container
}

export function MedicalFloatingVisuals({ visuals, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    // Standard animation
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const elements = gsap.utils.toArray<HTMLElement>('.gsap-medical-visual', containerRef.current);

      elements.forEach((el, index) => {
        const visual = visuals[index];
        if (!visual) return;
        const isLeft = visual.side === "left";
        
        // Initial state offsets
        const xOffset = isLeft ? gsap.utils.random(-140, -80) : gsap.utils.random(80, 140);
        const yOffset = gsap.utils.random(20, 50);
        const scaleInitial = gsap.utils.random(0.92, 0.97);
        const rotationInitial = gsap.utils.random(-3, 3);
        const delay = visual.delay || 0;
        const finalOpacity = visual.opacity ?? 1;

        // Set initial state so it doesn't flash before ScrollTrigger catches it
        gsap.set(el, { opacity: 0 });

        gsap.fromTo(el, 
          {
            opacity: 0,
            x: xOffset,
            y: yOffset,
            scale: scaleInitial,
            rotation: rotationInitial
          },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
            opacity: finalOpacity,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.6,
            delay: delay,
            ease: "elastic.out(1, 0.65)"
          }
        );
      });
    });

    // Reduced motion fallback
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const elements = gsap.utils.toArray<HTMLElement>('.gsap-medical-visual', containerRef.current);
      elements.forEach((el, index) => {
        const visual = visuals[index];
        if (!visual) return;
        gsap.set(el, { 
          opacity: visual.opacity ?? 1,
          x: 0, y: 0, scale: 1, rotation: 0
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={cn("absolute inset-0 pointer-events-none -z-10", className)}
      aria-hidden="true"
    >
      {visuals.map((visual, i) => (
        <div 
          key={i} 
          className={cn("gsap-medical-visual absolute", visual.className)}
        >
          <img 
            src={visual.src} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
