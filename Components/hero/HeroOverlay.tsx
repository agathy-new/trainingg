import Image from "next/image";
import clsx from "clsx";

type Slide = {
  id: string;
  title: string;
  subtitle: string;
  thumb: string;
};

type HeroOverlayProps = {
  slides: Slide[];
  active: number;
};

export default function HeroOverlay({ slides, active }: HeroOverlayProps) {
  const current = slides[active];

  return (
    <div className="absolute inset-0 flex">
      {/* Left overlay */}
      <div className="w-1/2 bg-primary/85 text-white flex flex-col justify-center px-16">
        <h1 className="text-4xl font-light tracking-widest leading-snug whitespace-pre-line">
          {current.title}
        </h1>

        <p className="mt-4 text-sm tracking-wide">
          {current.subtitle}
        </p>

        {/* Thumbnails */}
        <div className="mt-10 flex gap-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={clsx(
                "rounded-full overflow-hidden transition-all duration-500",
                index === active
                  ? "w-24 h-24 border-2 border-accent"
                  : "w-16 h-16 opacity-60"
              )}
            >
              <Image
                src={slide.thumb}
                alt={slide.title}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right empty area (just image) */}
      <div className="w-1/2" />
    </div>
  );
}
