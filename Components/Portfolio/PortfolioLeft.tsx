"use client";
import portfolioLeftData from "@/data/portfolioLeft";
import Link from "next/link";
import { getSwiperController } from "@/utils/swiperController";

export default function PortfolioLeft() {
  const { title, subtitle, description, arrows, buttonText, buttonLink } =
    portfolioLeftData;

  return (
    <div
      data-sal="slide-right"
      data-sal-duration="1200"
      className="flex flex-col h-full sm:px-5 lg:py-16 xs:pt-16 md:max-w-[748.8px]"
    >
      {/* القسم العلوي */}
      <div className="space-y-2">
        <h2 className="text-accent uppercase text-[16px]">{title}</h2>
        <h3 className="text-[32px]  font-semibold uppercase leading-[1.3] font-light text-primary break-words">
          {subtitle}
        </h3>
        <p className="text-[16px] text-primary leading-[1.5]">{description}</p>

        <div className="flex gap-6">
          <img
            src={arrows.prev}
            alt="Previous"
            className="w-12 h-6 cursor-pointer transform rotate-180"
            onClick={() => getSwiperController()?.slidePrev()}
          />
          <img
            src={arrows.next}
            alt="Next"
            className="w-12 h-6 cursor-pointer"
            onClick={() => getSwiperController()?.slideNext()}
          />
        </div>
      </div>

      
      <div className="flex-grow" />

      
      <div className="text-center xs:py-3 sm:pb-5 pb-4">
        <a
          href={buttonLink}
          className="inline-flex items-center gap-2  rounded-full border border-primary px-8 py-3 text-primary text-[12px] hover:bg-primary hover:text-white transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
