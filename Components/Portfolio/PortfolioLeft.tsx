"use client";
import portfolioLeftData from "@/data/portfolioLeft";
import Link from "next/link";

export default function PortfolioLeft() {
  const { title, subtitle, description, arrows, buttonText, buttonLink } =
    portfolioLeftData;

  return (
    <div
      data-sal="slide-right"
      data-sal-duration="1200"
      className="flex flex-col justify-start space-y-8 lg:mt-12"
    >
      <h2 className="text-accent uppercase  text-[16px] ">{title}</h2>
      <h3 className="text-[32px] xl:text-[30px] font-semibold uppercase leading-[1.3] font-light text-primary break-words">{subtitle}</h3>
      <p className="text-[16px] text-primary leading-[1.3]">{description}</p>

      <div className="flex gap-6 mt-6">
        <img
          src={arrows.prev}
          alt="Previous"
          className="w-12 h-6 cursor-pointer transform rotate-180"
        />
        <img
          src={arrows.next}
          alt="Next"
          className="w-12 h-6 cursor-pointer"
        />
      </div>
      
        <div className="text-center mt-20">
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 px-6 py-3  border border-primary 
                      text-primary text-lg font-medium rounded-full 
                      transition duration-300 ease-in-out 
                      hover:bg-primary hover:text-white"
          >
            {buttonText}
          </a>
        </div>
    </div>
  );
}

