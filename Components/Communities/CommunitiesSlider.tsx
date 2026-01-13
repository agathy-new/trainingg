"use client";
import InfiniteLogoSlider from "react-infinite-logo-slider";

import communitiesData from "@/data/communitiesData";

export default function CommunitiesSlider() {
  const { title, buttonText, buttonLink, logos } = communitiesData;

  return (
    <section className="relative w-full bg-[#1E3A8A80]">
    
    

      <div className="relative z-10 w-full px-12 py-20">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          {title}
        </h2>

        <InfiniteLogoSlider
          speed={5000}
          pauseOnHover={true}
          className="w-full max-w-6xl mx-auto"
          logoWidth="200px"
          logoHeight="auto"
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-6">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </InfiniteLogoSlider>

      </div>
    </section>
  );
}
