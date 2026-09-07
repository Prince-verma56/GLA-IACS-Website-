import { cn } from "@/lib/utils";

export function EditorialMediaBlock({
  src,
  alt,
  className,
  imageClassName,
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  caption?: string;
}) {
  return (
    <figure className={cn("group relative overflow-hidden bg-muted", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]",
          imageClassName,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/25 via-transparent to-transparent" />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 border-t border-white/25 bg-primary-deep/80 px-4 py-2 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
