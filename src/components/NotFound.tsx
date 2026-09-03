import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NotFound() {
  const container = useRef<HTMLDivElement>(null);
  const ecgPath = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();

        // 404 Mask Reveal
        tl.from(".animate-404", {
          yPercent: 110,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // ECG Draw
        if (ecgPath.current) {
          const length = ecgPath.current.getTotalLength();
          gsap.set(ecgPath.current, { strokeDasharray: length, strokeDashoffset: length });

          tl.to(
            ecgPath.current,
            {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: "power2.inOut",
            },
            "-=0.4"
          );
        }

        // Text reveal
        tl.from(
          ".animate-text",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.8"
        );

        // Buttons
        tl.from(
          ".animate-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.6"
        );

        // Image Mask + Scale Reveal
        tl.from(
          ".animate-image-container",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        );
        tl.from(
          ".animate-image",
          {
            scale: 1.03,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=0.8"
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const tl = gsap.timeline();
        tl.from(".animate-404, .animate-text, .animate-btn, .animate-image-container", {
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen bg-background flex flex-col" ref={container}>
      <SiteHeader />

      <main className="flex-1 flex flex-col justify-center pt-[74px]">
        {/* Main layout container with global shell spacing */}
        <div className="shell w-full py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center lg:items-start">
            {/* Left Column: Content */}
            <div className="md:col-span-7 lg:col-span-7 flex flex-col items-start lg:pt-10">
              <div className="overflow-hidden pb-3">
                <h1 className="animate-404 font-[family-name:var(--font-display)] text-[clamp(90px,25vw,140px)] md:text-[clamp(120px,12vw,190px)] font-medium leading-none text-primary-deep tracking-tight">
                  404
                </h1>
              </div>

              {/* Minimal ECG Rule */}
              <div className="w-full max-w-[180px] md:max-w-[220px] h-5 my-2 flex items-center overflow-hidden">
                <svg
                  viewBox="0 0 200 20"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    ref={ecgPath}
                    d="M0 10 H 60 L 68 2 L 78 18 L 86 10 H 200"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary/60"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="animate-text mt-4 text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                Page not found
              </h2>

              <p className="animate-text mt-4 text-base md:text-[1.0625rem] leading-relaxed text-muted-foreground max-w-sm">
                The page you're looking for doesn't exist or may have been moved.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 w-full">
                <Link
                  to="/"
                  className="animate-btn inline-flex h-[46px] md:h-[50px] items-center justify-center rounded bg-primary-deep px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-primary-deep/90 w-full sm:w-auto"
                >
                  Go to homepage
                </Link>
                <Link
                  to="/programme"
                  className="animate-btn inline-flex h-[46px] md:h-[50px] items-center justify-center rounded border border-input bg-transparent px-6 text-[0.9375rem] font-medium text-foreground transition-colors hover:bg-accent w-full sm:w-auto"
                >
                  Explore conference
                </Link>
              </div>
            </div>

            {/* Right Column: Restrained Editorial Image */}
            <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 w-full max-w-[340px] md:max-w-none mx-auto md:mx-0 mt-8 md:mt-0">
              <div className="animate-image-container overflow-hidden rounded-xl bg-surface/50 aspect-[16/10] md:aspect-[3/4]">
                <img
                  src="/GLA Drone Shot.png"
                  alt="GLA University Architecture"
                  className="animate-image w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
