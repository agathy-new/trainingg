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
      className="flex flex-col h-full justify-between lg:mt-12"
    >
      <div className="space-y-8">
        <h2 className="text-accent uppercase text-[16px]">{title}</h2>
        <h3 className="text-[32px] xl:text-[30px] font-semibold uppercase leading-[1.3] font-light text-primary break-words">
          {subtitle}
        </h3>
        <p className="text-[16px] text-primary leading-[1.3]">{description}</p>

        <div className="flex gap-6 mt-6">
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

      <div className="text-center mt-auto pt-10">
        <a
          href={buttonLink}
        className="inline-flex items-center gap-2 px-6 py-2 border border-primary 
            text-primary text-[11px]  rounded-full 
            transition duration-300 ease-in-out 
            hover:bg-primary hover:text-white"

        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
