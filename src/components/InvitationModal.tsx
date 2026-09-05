/**
 * InvitationModal — IACS 2027
 *
 * Shows once per session (sessionStorage flag).
 * Close via: X button · Escape key · backdrop click.
 *
 * ─── IMAGE CONFIGURATION ──────────────────────────────────────
 * Replace INVITATION_IMAGE path when the final artwork changes.
 * Set to null to render the text-only placeholder frame.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { conference } from "@/lib/conference";

const INVITATION_IMAGE: string | null = "/docs/IACS Invitation Form.png";

export function InvitationModal() {
  const [visible, setVisible] = useState(true);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  /* GSAP entrance */
  useGSAP(
    () => {
      if (!visible || !backdropRef.current || !cardRef.current) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();

        // Backdrop fade
        tl.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          0,
        );

        // Card rise + scale
        tl.fromTo(
          cardRef.current,
          { y: 40, scale: 0.94, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" },
          0.2,
        );

        // Image clip-path reveal
        if (imgWrapRef.current) {
          tl.fromTo(
            imgWrapRef.current,
            { clipPath: "inset(12% 0% 12% 0%)", opacity: 0.6 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            0.4,
          );
        }

        // Footer slide up
        if (footerRef.current) {
          tl.fromTo(
            footerRef.current,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
            0.75,
          );
        }

        // Close button pop
        if (closeRef.current) {
          tl.fromTo(
            closeRef.current,
            { opacity: 0, scale: 0.7, rotate: -45 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.4, ease: "back.out(1.5)" },
            0.8,
          );
        }
      });

      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [backdropRef.current, cardRef.current, closeRef.current, footerRef.current],
          { opacity: 1 },
        );
      });
    },
    { dependencies: [visible] },
  );

  /* Keyboard + scroll lock */
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 950);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [visible]);

  function handleClose() {
    if (!backdropRef.current || !cardRef.current) {
      setVisible(false);
      return;
    }
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(cardRef.current, {
        y: 24,
        opacity: 0,
        scale: 0.96,
        duration: 0.32,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.38,
        ease: "power2.in",
        delay: 0.08,
        onComplete: () => {
          setVisible(false);
        },
      });
    });
    gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
      setVisible(false);
    });
  }

  if (!visible) return null;

  return (
    /* ── Backdrop ── */
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6 sm:py-10"
      style={{ background: "rgba(3, 28, 12, 0.82)", backdropFilter: "blur(4px)" }}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* ── Card ── */}
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-label="IACS 2027 Conference Invitation"
        className="relative flex w-full flex-col overflow-hidden"
        style={{
          maxWidth: "680px",
          maxHeight: "calc(100dvh - 3rem)",
          background: "#0a1f0e",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 32px 96px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        {/* ── Top label bar ── */}
        <div
          className="flex shrink-0 items-center justify-between px-5 py-3"
          style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2.5">
            {/* Small ECG pulse icon */}
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
              <path
                d="M0 6h3l2-5 3 10 2-5 2 3h8"
                stroke="#6aaf6a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "#6aaf6a", fontWeight: 600, letterSpacing: "0.18em" }}
            >
              IACS 2027 — Official Invitation
            </span>
          </div>
          {/* Close button */}
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            aria-label="Close invitation"
            className="group flex h-8 w-8 items-center justify-center transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(106,175,106,0.25)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(106,175,106,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ── Invitation image (scrollable) ── */}
        <div
          ref={imgWrapRef}
          className="overflow-y-auto"
          style={{ flex: "1 1 auto", minHeight: 0 }}
        >
          {INVITATION_IMAGE ? (
            <img
              src={INVITATION_IMAGE}
              alt="IACS 2027 Conference Invitation Letter"
              className="block w-full"
              draggable={false}
              style={{ display: "block" }}
            />
          ) : (
            /* Placeholder */
            <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 bg-[#0f2415]">
              <p className="text-xs uppercase tracking-widest text-[#6aaf6a]">
                Invitation Image
              </p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white">IACS 2027</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                11–13 February 2027 · Mathura, India
              </p>
            </div>
          )}
        </div>

        {/* ── Footer CTA ── */}
        <div
          ref={footerRef}
          className="shrink-0 px-5 py-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em]" style={{ color: "#6aaf6a" }}>
                11–13 February 2027
              </p>
              <p className="mt-0.5 text-sm font-medium text-white">
                GLA University, Mathura, Uttar Pradesh
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                  borderRadius: "3px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                Close
              </button>
              <a
                href={conference.registrationFormUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200"
                style={{
                  background: "#2d6a2d",
                  color: "#fff",
                  borderRadius: "3px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  border: "1px solid rgba(106,175,106,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#3d8a3d";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#2d6a2d";
                }}
              >
                Register Now
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
