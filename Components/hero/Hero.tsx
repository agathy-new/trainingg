"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { heroSlides } from "@/data/heroData";
import { useState } from "react";



import "swiper/css";
import "swiper/css/effect-fade";

import Container from "@/Components/ui/Container";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mt-8">
      <Container>
        <div className="relative h-[560px] rounded-[28px] overflow-hidden">
         <Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  autoplay={{ delay: 5000 }}
  loop
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="h-full"
>
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlay */}
                <div className="relative z-10 h-full flex">
                  <div className="w-[40%] bg-[#0A2A4A]/80 flex flex-col justify-end items-start px-20 text-start">
                    <p className="text-accent text-4xl  mb-6 justify-start text-start bottom-8 items-stretch">
                     <span className="font-thin"> {slide.title} </span><br></br>
                     <span className="font-semibold"> {slide.t} </span>
                    </p>
                     {/* <h1 className="text-accent text-4xl font-bold mb-6">
                     
                    </h1> */}

                   <p className=" text-white text-[15px] tracking-wide mt-2 max-w-[320px]"
>

                     <span>{slide.subtitle}</span> 
                    </p>

                    {/* Thumbnails */}
               <div className="flex gap-6">
  {heroSlides.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div
        key={item.id}
        className={`relative flex items-center justify-center rounded-full transition-all duration-300
          ${isActive ? "w-24 h-24" : "w-20 h-20"}
        `}
      >
        {/* Outer ring */}
        {isActive && (
          <div className="absolute inset-0 rounded-full border-2 border-[#F4A28C]" />
        )}

        {/* Image */}
        <div
          className={`relative rounded-full overflow-hidden
            ${isActive ? "w-full h-full" : "w-full h-full"}
          `}
        >
          <Image
            src={item.thumb}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  })}
</div>

                  </div>

                  <div className="flex-1" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
