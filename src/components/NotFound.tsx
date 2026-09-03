import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NotFound() {
  const container = useRef<HTMLDivElement>(null);
  const ecgPath = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate text elements
      tl.from(".animate-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Animate the ECG line drawing
      if (ecgPath.current) {
        const length = ecgPath.current.getTotalLength();
        gsap.set(ecgPath.current, { strokeDasharray: length, strokeDashoffset: length });

        tl.to(
          ecgPath.current,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=0.6",
        );
      }

      // Animate the curved image coming in from the right
      tl.from(
        ".animate-image",
        {
          x: "10%",
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.2",
      );
    },
    { scope: container },
  );

  return (
    <div className="min-h-screen bg-background flex flex-col" ref={container}>
      <SiteHeader />

      <main className="flex-1 flex items-center relative overflow-hidden pt-[74px]">
        {/* Main 2-column layout container */}
        <div className="shell w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center py-16 lg:py-24 relative z-10">
          {/* Left Column */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
            <h1 className="animate-text font-[family-name:var(--font-display)] text-[6rem] lg:text-[8rem] font-medium leading-none text-primary-deep tracking-tight">
              404
            </h1>

            {/* ECG Line Graphic */}
            <div className="animate-text w-full max-w-[280px] my-6 h-12 overflow-hidden flex items-center">
              <svg
                viewBox="0 0 400 40"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  ref={ecgPath}
                  d="M0 20 H 150 L 160 5 L 175 35 L 185 20 H 400"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/70"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Glowing dot at the end */}
                <circle
                  cx="400"
                  cy="20"
                  r="4"
                  fill="currentColor"
                  className="text-primary/70 shadow-sm"
                />
              </svg>
            </div>

            <h2 className="animate-text text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Page not found
            </h2>
            <p className="animate-text mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground max-w-sm">
              The page you're looking for doesn't exist or may have been moved.
            </p>

            <div className="animate-text mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded bg-primary-deep px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-primary-deep/90"
              >
                Go to homepage
              </Link>
              <Link
                to="/programme"
                className="inline-flex items-center justify-center rounded border border-input bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium text-foreground transition-colors hover:bg-accent"
              >
                Explore conference
              </Link>
            </div>

            {/* Badge box */}
            <div className="animate-text mt-16 inline-flex items-center gap-4 rounded-xl bg-surface/60 p-4 border border-border/50 max-w-[340px]">
              <div className="flex-shrink-0 text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16" />
                  <path d="M12 2v20" />
                  <path d="M8 22V10h8v12" />
                  <path d="M12 10V6" />
                  <path d="M12 6h3" />
                  <path d="M12 6h-3" />
                  <path d="M16 14h2v8" />
                  <path d="M6 14h2v8" />
                </svg>
              </div>
              <div>
                <p className="text-[0.75rem] font-semibold tracking-wide text-primary-deep">
                  IACS 2027 · India Section
                </p>
                <p className="mt-0.5 text-[0.7rem] leading-relaxed text-muted-foreground">
                  Transforming Cardiovascular Care
                  <br />
                  Through Science, Technology and Innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image curved mask overlay */}
        <div className="animate-image absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%] pointer-events-none hidden md:block">
          <div
            className="w-full h-full"
            style={{
              clipPath: "circle(70% at 100% 50%)",
            }}
          >
            <img
              src="/GLA Drone Shot.png"
              alt="GLA University"
              className="w-full h-full object-cover"
            />
            {/* Soft overlay gradient to blend with the background slightly */}
            <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
