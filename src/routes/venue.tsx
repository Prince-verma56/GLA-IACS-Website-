import { useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { conference, sightseeing } from "@/lib/conference";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
  ParallaxImage,
} from "@/components/motion/ScrollReveal";
import { InternalPageHero } from "@/components/InternalPageHero";
import { pageHeroes } from "@/lib/pageHeroes";
import { cn } from "@/lib/utils";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [
      { title: "Venue & Destination — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content: `Conference venue, campus information and sightseeing destinations for the ${conference.name} at GLA University, Mathura.`,
      },
      { property: "og:title", content: "Venue & Destination — IACS 2027" },
      {
        property: "og:description",
        content:
          "GLA University, Mathura — conference venue, sightseeing and destination guide for IACS 2027.",
      },
    ],
  }),
  component: Venue,
});

function Venue() {
  const [selectedDestination, setSelectedDestination] = useState(sightseeing[0]);
  const destGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!destGridRef.current) return;
    
    const cards = gsap.utils.toArray('.destination-card', destGridRef.current);
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 40 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: destGridRef.current,
          start: "top 80%",
          once: true,
        }
      }
    );
  }, { scope: destGridRef });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <InternalPageHero 
          hero={{
            ...pageHeroes.venue,
            eyebrow: "Explore Mathura",
            title: "Sightseeing & Destinations",
          }} 
        />

        {/* ── CONFERENCE VENUE ──────────────────────────────── */}
        <section className="shell pt-24 pb-20 md:pt-32 md:pb-28 bg-white relative z-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7 space-y-10">
              <div>
                <HorizontalReveal>
                  <p className="eyebrow text-primary mb-3">Conference Venue</p>
                </HorizontalReveal>
                <MaskReveal delay={0.1}>
                  <h2 className="display-md">Institute of Pharmaceutical Research</h2>
                </MaskReveal>
                <TextReveal delay={0.2}>
                  <p className="mt-6 leading-relaxed text-foreground/65">
                    The Institute of Pharmaceutical Research (IPR) at GLA University is a leading
                    pharmaceutical sciences institution in North India, bringing together
                    multidisciplinary research in drug discovery, cardiovascular pharmacology and
                    translational medicine.
                  </p>
                </TextReveal>
              </div>

              <TextReveal delay={0.25}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Address", value: conference.address },
                    { label: "Conference Dates", value: conference.dates },
                    { label: "Email", value: conference.email },
                    { label: "Phone", value: conference.phone },
                  ].map((item) => (
                    <div key={item.label} className="border border-rule p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              </TextReveal>
            </div>

            <aside className="md:col-span-5">
              <ParallaxImage
                src="/Institute of Pharmaceutical Research.png"
                alt="Institute of Pharmaceutical Research, GLA University"
                className="rounded-sm shadow-sm h-[440px]"
              />
            </aside>
          </div>
        </section>

        {/* ── VENUE -> DESTINATIONS TRANSITION ──────────────── */}
        <div className="w-full h-12 md:h-20 bg-[#f0f2f5] relative z-10 overflow-hidden">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-white" aria-hidden="true">
            <path fill="currentColor" d="M0,0 C400,20 800,120 1440,30 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        {/* ── DESTINATIONS GRID ─────────────────────────────── */}
        <section className="bg-[#f0f2f5] relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
          <MedicalEditorialMotif />
          <div className="shell relative z-10">
            <div className="max-w-2xl mb-16">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">Destinations</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-md">Places worth experiencing</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-6 text-foreground/60 leading-relaxed text-sm">
                  Mathura is a holy city on the banks of the Yamuna River, with many places of
                  historic and religious significance in and around the region.
                </p>
              </TextReveal>
            </div>

            <div 
              ref={destGridRef} 
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {sightseeing.map((item, i) => (
                <div key={item.place} className="destination-card group flex flex-col opacity-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow text-primary/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-white border border-black/5 shadow-sm mb-5">
                    {/* Placeholder for missing images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary/30 border border-primary/10">
                      <span className="text-xs font-medium uppercase tracking-widest text-center px-4">
                        Image Placeholder<br/><span className="lowercase text-[10px]">({item.place})</span>
                      </span>
                    </div>
                    
                    <img 
                      src={item.image} 
                      alt={`${item.place} in ${item.city}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-tight text-foreground mb-1">
                    {item.place}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    {item.city}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-rule/50">
                    <a 
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.place} on Google Maps`}
                      className="text-sm text-primary font-medium flex items-center transition-transform group-hover:translate-x-1"
                    >
                      Explore location <span aria-hidden className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS -> MAP TRANSITION ────────────────── */}
        <div className="w-full h-12 md:h-24 bg-white relative z-10 overflow-hidden">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-[#f0f2f5]" aria-hidden="true">
            <path fill="currentColor" d="M0,120 C350,10 700,120 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        {/* ── INTERACTIVE MAP SECTION ───────────────────────── */}
        <section id="map-section" className="py-16 md:py-24 bg-white">
          <div className="shell">
            <div className="mb-12 border-b border-rule pb-6">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-3">Explore the Locations</p>
              </HorizontalReveal>
              <MaskReveal delay={0.1}>
                <h2 className="display-sm">Interactive Destination Map</h2>
              </MaskReveal>
              <TextReveal delay={0.2}>
                <p className="mt-4 text-foreground/60 max-w-2xl">
                  Explore destinations around Mathura, Vrindavan, Agra, and the surrounding region. 
                  Select a location from the list to view it on the map.
                </p>
              </TextReveal>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Destination Selector */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <TextReveal delay={0.3}>
                  <div className="bg-surface border border-rule rounded-xl overflow-hidden flex flex-col h-[500px]">
                    <div className="p-4 bg-muted/30 border-b border-rule shrink-0">
                      <h3 className="font-medium text-sm">Select Destination</h3>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden flex-1 scrollbar-thin">
                      <div className="divide-y divide-rule">
                        {sightseeing.map((item, i) => {
                          const isActive = selectedDestination?.place === item.place;
                          return (
                            <button
                              key={item.place}
                              onClick={() => setSelectedDestination(item)}
                              className={cn(
                                "w-full text-left px-5 py-4 transition-colors flex items-start gap-4",
                                isActive 
                                  ? "bg-primary/5 relative" 
                                  : "hover:bg-muted/50"
                              )}
                            >
                              {isActive && (
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                              )}
                              <span className={cn("eyebrow shrink-0 pt-0.5 tabular-nums", isActive ? "text-primary" : "text-muted-foreground")}>
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <strong className={cn("block font-medium", isActive ? "text-primary" : "text-foreground")}>
                                  {item.place}
                                </strong>
                                <span className="block mt-0.5 text-xs text-foreground/60">
                                  {item.city}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TextReveal>
              </div>

              {/* Map Iframe */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <TextReveal delay={0.4}>
                  <div className="bg-muted w-full h-[500px] rounded-xl overflow-hidden border border-rule relative shadow-sm ring-1 ring-black/5">
                    {selectedDestination && (
                      <iframe
                        src={`https://www.google.com/maps?q=${selectedDestination.mapQuery}&output=embed`}
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${selectedDestination.place}`}
                      />
                    )}
                  </div>
                </TextReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP -> CTA TRANSITION ─────────────────────────── */}
        <div className="w-full h-12 md:h-20 bg-primary-deep relative z-10 overflow-hidden">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full text-white" aria-hidden="true">
            <path fill="currentColor" d="M0,0 L1440,120 L1440,0 Z"></path>
          </svg>
        </div>

        {/* ── SPONSORSHIP CTA STRIP ─────────────────────────── */}
        <section className="bg-primary-deep pb-12 md:pb-16">
          <div className="shell flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <MaskReveal>
                <p className="text-white font-semibold text-lg">
                  Interested in Sponsoring IACS 2027?
                </p>
              </MaskReveal>
              <TextReveal delay={0.1}>
                <p className="mt-1 text-sm text-white/55">
                  Four sponsorship tiers available — Main Event, Platinum, Gold and Silver.
                </p>
              </TextReveal>
            </div>
            <Link
              to="/sponsorship"
              className="shrink-0 inline-block border border-white/30 px-7 py-3 text-sm uppercase tracking-widest text-white/80 transition-all hover:border-white/60 hover:text-white"
            >
              View Sponsorship →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function MedicalEditorialMotif() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path 
          d="M-100,200 C300,150 400,450 600,400 C700,380 750,300 800,300 L820,250 L840,400 L860,200 L880,350 L900,300 C1100,300 1200,600 1500,500" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path 
          d="M-100,600 C200,650 300,350 500,400 C600,420 650,500 700,500 L720,550 L740,400 L760,600 L780,450 L800,500 C1000,500 1100,200 1500,300" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
