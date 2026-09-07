import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { navigation, conference } from "@/lib/conference";

const PRIMARY_NAV = navigation.slice(0, 8);
const MORE_NAV = navigation.slice(8);

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const moreRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  /* Hover management — delay close so cursor can move into dropdown */
  const openMore = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMoreOpen(true);
  }, []);

  const closeMore = useCallback(() => {
    closeTimer.current = setTimeout(() => setMoreOpen(false), 150);
  }, []);

  const solid = !overHero || scrolled || open;

  const linkClass = (active: boolean) =>
    `gsap-nav-link whitespace-nowrap text-[0.8125rem] tracking-wide transition-colors ${
      solid
        ? active
          ? "text-primary"
          : "text-foreground/75 hover:text-primary"
        : "text-white/85 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-background/96 backdrop-blur-[2px] border-b border-border shadow-[0_1px_18px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex py-3 md:py-5 items-center justify-between gap-6">
        <Link to="/" className="gsap-nav-logo flex shrink-0 items-center gap-3 lg:gap-5">
          <img 
            src="/images/logos/IACS logo.png" 
            alt="IACS Logo" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
          <div className={`h-10 md:h-12 w-px shrink-0 ${solid ? 'bg-border' : 'bg-white/40'}`}></div>
          <img 
            src="/images/logos/GLA logo.png" 
            alt="GLA University Logo" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:gap-8 xl:flex shrink-0">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass(pathname === item.to)}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown — hover on desktop */}
          <div ref={moreRef} className="relative" onMouseEnter={openMore} onMouseLeave={closeMore}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-[0.8125rem] tracking-wide transition-colors ${
                solid ? "text-foreground/75 hover:text-primary" : "text-white/85 hover:text-white"
              }`}
            >
              More
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              role="menu"
              className={`absolute right-0 top-full mt-2.5 min-w-43 overflow-hidden rounded-sm border border-border bg-background shadow-xl shadow-black/10 transition-all duration-200 origin-top ${
                moreOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1.5 pointer-events-none"
              }`}
              style={{ zIndex: 60 }}
              onMouseEnter={openMore}
              onMouseLeave={closeMore}
            >
              {MORE_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  role="menuitem"
                  className={`flex items-center gap-2 px-4 py-3 text-[0.8125rem] transition-colors border-b border-rule last:border-b-0 ${
                    pathname === item.to
                      ? "text-primary bg-accent/30"
                      : "text-foreground/70 hover:text-primary hover:bg-accent/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>


          <a
            href={conference.registrationFormUrl}
            target="_blank"
            rel="noreferrer"
            className={`gsap-nav-btn ml-1 px-5 py-2 text-[0.8125rem] font-medium transition-colors ${
              solid
                ? "bg-primary text-primary-foreground hover:bg-primary-deep"
                : "border border-white/70 text-white hover:bg-white hover:text-primary-deep"
            }`}
          >
            Register
          </a>
        </nav>

        {/* lg (1024–1279): compact — show first 5 + Register */}
        <nav className="hidden items-center gap-4 lg:flex xl:hidden">
          {PRIMARY_NAV.slice(0, 5).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass(pathname === item.to)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={conference.registrationFormUrl}
            target="_blank"
            rel="noreferrer"
            className={`gsap-nav-btn px-4 py-2 text-[0.8125rem] font-medium transition-colors ${
              solid
                ? "bg-primary text-primary-foreground hover:bg-primary-deep"
                : "border border-white/70 text-white hover:bg-white hover:text-primary-deep"
            }`}
          >
            Register
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.25">
            <span className={`h-px w-full transition-all duration-300 ${solid ? "bg-foreground" : "bg-white"} ${open ? "translate-y-1.75 rotate-45" : ""}`} />
            <span className={`h-px w-full transition-all duration-300 ${solid ? "bg-foreground" : "bg-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 transition-all duration-300 ${solid ? "bg-foreground" : "bg-white"} ${open ? "w-full -translate-y-2.25 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`border-b border-border/70 py-3.5 text-sm transition-colors ${
                  pathname === item.to ? "text-primary font-medium" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={conference.registrationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-solid mt-5 mb-6 text-center"
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
