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
    <section className="w-full mt-8 md:mt-0">
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
                <div className="
                  hidden md:flex
                  absolute inset-0 z-10
                ">
                  {/* Left blue panel */}
                  <div className="
                    lg:w-[35%] md:w-[46%] bg-[#0A2A4A]/80
                    flex flex-col justify-end
                    px-10 pb-10 text-white
                  ">
                    {/* Title */}
                    <p className="text-accent text-4xl leading-tight tracking-[0.15em] mb-2">
                      <span className="font-thin">{slide.title}</span><br />
                      <span className="font-semibold">{slide.t}</span>
                    </p>

                    {/* Subtitle */}
                    <p className="text-white text-[15px] tracking-wide max-w-[320px] mb-6">
                      {slide.subtitle}
                    </p>

                    {/* Circles */}
                    <div className="flex gap-6 mt-5">
                      {heroSlides.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                          <div
                            key={item.id}
                            className={`relative flex items-center justify-center rounded-full transition-all duration-300
                              ${isActive ? "w-24 h-24" : "w-20 h-20 opacity-70"}
                            `}
                          >
                            {isActive && (
                              <div className="absolute inset-0 rounded-full border-2 border-[#F4A28C]" />
                            )}

                            <div className="relative rounded-full overflow-hidden w-full h-full">
                              <Image src={item.thumb} alt="" fill className="object-cover" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>

                <div className="
                  md:hidden
                  absolute bottom-0 left-0 w-full h-[50%]
                  bg-[#0A2A4A]/80 z-10
                  flex flex-col items-center justify-center text-center
                  px-6 pb-10 text-white
                  rounded-t-[28px]
                ">
                  {/* Title */}
                  <p className="text-accent text-4xl leading-tight tracking-[0.15em] mb-2">
                    <span className="font-thin">{slide.title}</span><br />
                    <span className="font-semibold">{slide.t}</span>
                  </p>

                  {/* Subtitle */}
                  <p className="text-white text-[15px] tracking-wide max-w-[320px] mb-6">
                    {slide.subtitle}
                  </p>

                  {/* Dash Indicators */}
                  <div className="flex gap-3">
                    {heroSlides.map((_, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <div
                          key={index}
                          className={`h-[10px] rounded-full transition-all duration-500  ${
                            isActive ? "w-[60px] bg-white" : "w-[10px] bg-white"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
