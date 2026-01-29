 "use client";

// import { useRef } from "react";
import PortfolioLeft from "@/Components/Portfolio/PortfolioLeft";
import PortfolioRight from "@/Components/Portfolio/PortfolioRight";
import CommunitiesSlider from  "@/Components/Communities/CommunitiesSlider";

export default function PortfolioSection() {  return (
      <section
      className="relative w-full  bg-no-repeat bg-cover bg-end  "
      style={{
        backgroundImage: "url('/portfolio/shadowbg.svg')"
      }}
    >
    <div className="absolute inset-0 bg-[#e0f7fa]/30 z-0"></div>
     <div className="relative z-10 w-full  ">
    <div className="flex flex-col lg:flex-row justify-start items-stretch py:8 lg:gap-x-14  xs:px-[16px] ">
    <div className="w-full lg:w-[34%]  ">
        <PortfolioLeft />
      </div>
    <div className="w-full lg:w-[60%]   
    ">
        <PortfolioRight />
      </div>
    </div>
        </div>
    <div
      className="bg-[#566889]/70 w-full  h-[410px] mt-1 
    "
    >
      <CommunitiesSlider />
    </div>
    
    
    
      
    </section>
);}