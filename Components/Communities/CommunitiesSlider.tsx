"use client";
import { useEffect, useState } from "react";
import InfiniteLogoSlider from "react-infinite-logo-slider";
import communitiesData from "@/data/communitiesData";

export default function CommunitiesSlider() {
  const { title, label, logos } = communitiesData;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const boxWidths = ["w-[124px]", "w-[293px]", "w-52", "w-64","w-[360px]"];

  return (
    <section className="relative w-full">
      <div className="relative z-10 w-full pt-14 pb-16 mt-[2px]">

        <p className="text-center text-accent text-sm mb-4">
          {label}
        </p>

        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {title}
        </h2>

        {/* السلايدر مع المستطيلات البيضاء */}
        <div className="w-full overflow-hidden">
          <InfiniteLogoSlider
            speed={5000}
            pauseOnHover={true}
            className="w-full"
            logoWidth="200px"
            logoHeight="auto"
          >
            {logos.map((logo, index) => {
              const boxWidth = boxWidths[index % boxWidths.length];

              return (
                <div
                  key={index}
                  className="flex items-center justify-center px-4"
                >
                  <div
                    className={`bg-[#F1F6FF] rounded-3xl h-[124px] ${boxWidth} flex items-center justify-center`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </InfiniteLogoSlider>
        </div>

        {/* المؤشرات */}
        <div className="flex justify-center items-center gap-1 mt-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-[5px] rounded-full transition-all duration-500 ${
                activeIndex === i
                  ? "w-[40px] bg-[#F1F6FF]"
                  : "w-[5px] bg-[#F1F6FF] opacity-25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
