"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
return (
  <section className="py-20 w-full overflow-x-hidden bg-[#e0f7fa]/50">

      <div className="w-full max-w-[1400px]  md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-[110px]">

 {/* الصورة */}
 
 <div className="flex flex-col items-center justify-center flex-shrink-0">
  <div
    className="
      relative
      rounded-[40px] shadow-lg overflow-hidden
      xs:w-[355px] xs:h-[570px]
      sm:w-[316px] sm:h-[876px]
      // md:w-[428px] md:h-[817px]
      // lg:w-[512px] lg:h-[808px]
      // xl:w-[596px] xl:h-[935px]
    "
  >
    <Image
      src={servicesData.image}
      alt="Services Image"
      fill
      className="object-cover"
    />
  </div>
</div>
 
 {/* النص */}
     <div
  data-aos="fade-left"
className="
  mt-8
  xs:px-4
  sm:w-[308px]
  sm:-mt-6
  md:-mt-8
  lg:mt-2
  xl:mt-20
  md:w-[350px]
  lg:w-[428px]
  xl:w-[470px]
  
">
 <div className="text-center xs:text-left  relative ">
    <h2 className="text-[#C0A062] uppercase text-[16px] mb-3">
      {servicesData.title}
   </h2>
  <h3 className="
               text-[34px] uppercase font-semibold leading-[1.3] font-light text-primary ">
                {servicesData.subtitle}
              </h3>
            </div> <div className="space-y-6 ">
              {servicesData.items.map((service, index) => (
                <div key={index} className="flex flex-col items-center xs:items-start">
                    <div className="flex flex-col gap-3 mb-3 mt-2">
                    <div className="w-[45px] h-[45px] rounded-full bg-accent 
                                    flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={service.icon}
                        alt="Service Icon"
                        width={26}
                        height={26}
                        className="object-contain"/>
                    </div>
                    <h3 className="text-[20px] font-semibold leading-[1.3] 
                                   font-light uppercase text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-primary/90 text-[16px] leading-[1.5] mb-3">
                    {service.description}
                  </p> <button
                    className="mt-1 mx-auto  flex items-center justify-center gap-2 px-4 py-3 
                               border border-primary text-primary text-xs font-medium rounded-full 
                               transition duration-300 ease-in-out hover:bg-primary hover:text-white"
                  >
                    View More
                  </button> </div> ))}
            </div></div></div>
      </div>
    </section>
  );
}
