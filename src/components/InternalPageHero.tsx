import { ReactNode } from "react";
import {
  HorizontalReveal,
  MaskReveal,
  TextReveal,
} from "@/components/motion/ScrollReveal";
import { PageHeroConfig } from "@/lib/pageHeroes";

export function InternalPageHero({ hero, children }: { hero: PageHeroConfig, children?: ReactNode }) {
  // Use a fallback background if the image is missing
  const bgImage = hero.image || "/images/Bg images/About/About Sec1.png";

  return (
    <section className="relative w-full overflow-hidden bg-primary-deep pt-[100px] pb-16 md:pt-[120px] md:pb-24 flex items-center min-h-[40vh] md:min-h-[50vh]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={hero.imageAlt || ""}
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Overlay to ensure text readability - Deep institutional green mixed with black for contrast */}
        <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
      </div>
      
      {/* Content Container */}
      <div className="shell relative z-10 w-full">
        <div className="max-w-3xl space-y-5 md:space-y-6">
          <HorizontalReveal>
            <p className="eyebrow text-white/80 font-semibold tracking-widest uppercase text-xs md:text-sm">
              {hero.eyebrow}
            </p>
          </HorizontalReveal>
          
          <MaskReveal delay={0.1}>
            <h1 className="display-lg text-white font-bold leading-tight">
              {hero.title}
            </h1>
          </MaskReveal>
          
          <TextReveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              {hero.description}
            </p>
          </TextReveal>
          
          {children && (
            <div className="mt-8 text-white/90">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
