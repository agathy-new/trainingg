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
<section className="py-24 w-full bg-[#e0f7fa]/50 ">
  {/* الحاوية الداخلية */}
 <div className="w-full max-w-7xl mx-auto pl-10 pr-4">

    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* Image */}
    <div data-aos="fade-right" className="md:ml-auto">

        <Image
          src={servicesData.image}
          alt="Services Image"
          width={512}
          height={808}
          className="w-[512px] h-[808px] rounded-[30px] shadow-lg"
        />
      </div>

      {/* Text */}
     <div data-aos="fade-left" className="md:ml-12">

  <div className="mb-10 text-center md:text-left relative">

    <h2 className="text-[#C0A062] uppercase tracking-[0.3em] text-[14px] mb-3">
      {servicesData.title}
    </h2>

    <h3 className="text-[32px] xl:text-[30px] uppercase font-semibold leading-[1.3] font-light text-primary max-w-[220px]">
      {servicesData.subtitle}
    </h3>
  </div>

  <div className="space-y-12 max-w-sm">
    {servicesData.items.map((service, index) => (
      <div key={index} className="flex flex-col items-center md:items-start">

        {/* أيقونة الخدمة داخل دائرة */}
        <div className="flex flex-col items-center md:items-start gap-3 mb-4">

          <div className="w-[45px] h-[45px] rounded-full bg-accent bg-opacity-50
                flex items-center justify-center 
                overflow-hidden shrink-0 flex-none">
  <Image 
    src={service.icon} 
    alt="Service Icon" 
    width={26} 
    height={26} 
    className="object-contain"
  />
</div>


          <h3 className="text-[22px] font-semibold leading-[1.3] font-light text-primary">
            {service.title}
          </h3>
        </div>

        <p className="text-primary/90 text-[15px] leading-[1.8] mb-4">
          {service.description}
        </p>

        <button 
          className="mt-2 mx-auto flex items-center justify-center gap-2 px-4 py-2 
                     border border-primary text-primary text-sm font-medium rounded-full 
                     transition duration-300 ease-in-out hover:bg-primary hover:text-white">
          View More
        </button>
      </div>
    ))}
  </div>
</div>


    </div>
  </div>
</section>



  );
}
