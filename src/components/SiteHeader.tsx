import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/conference";

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = !overHero || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-background/96 backdrop-blur-[2px] border-b border-border shadow-[0_1px_18px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-8">
        <Link to="/" className="gsap-nav-logo flex items-baseline gap-3">
          <span
            className={`font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold tracking-tight ${
              solid ? "text-primary-deep" : "text-white"
            }`}
          >
            GLA University
          </span>
          <span
            className={`hidden border-l pl-3 text-[0.6875rem] uppercase tracking-[0.18em] sm:block ${
              solid ? "border-rule text-muted-foreground" : "border-white/40 text-white/80"
            }`}
          >
            IACS 2027
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`gsap-nav-link text-[0.8125rem] tracking-wide transition-colors ${
                  solid
                    ? active
                      ? "text-primary"
                      : "text-foreground/75 hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/registration"
            className={`gsap-nav-btn px-5 py-2 text-[0.8125rem] font-medium transition-colors ${
              solid
                ? "bg-primary text-primary-foreground hover:bg-primary-deep"
                : "border border-white/70 text-white hover:bg-white hover:text-primary-deep"
            }`}
          >
            Register
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-[5px]">
            <span className={`h-px w-full ${solid ? "bg-foreground" : "bg-white"}`} />
            <span className={`h-px w-full ${solid ? "bg-foreground" : "bg-white"}`} />
            <span className={`h-px w-4 ${solid ? "bg-foreground" : "bg-white"}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border/70 py-3.5 text-sm text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/registration" className="btn-solid mt-5 mb-6">
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
