import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { setSwiperController } from "@/utils/swiperController";

import portfolioRightData from "@/data/portfolioRight";

export default function PortfolioRight() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleDoubleClick = (e: any) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (diff > 50) {
    
      const controller = setSwiperController as any;
      controller()?.slidePrev?.();
      setIsDragging(false);
    } else if (diff < -50) {
      
      const controller = setSwiperController as any;
      controller()?.slideNext?.();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full relative xs:pl-3 sm:px-6  lg:py-16 py-16 "
      data-sal="slide-left"
      data-sal-duration="1200"
      
    >
      <Swiper
        onSwiper={(swiper) => {
          setSwiperController({
            slideNext: () => swiper.slideNext(),
            slidePrev: () => swiper.slidePrev(),
          });
        }}
          centeredSlides={false}
        loop={true}
         breakpoints={{
    468: {
      spaceBetween: 10,
 slidesPerView:1.4,
    },
  
    768: {
      spaceBetween: 10,
      slidesPerView:2.25,
    },
      992: {
      spaceBetween: 10,
      slidesPerView:3,
    },
    1200: {
      spaceBetween: 3,
       slidesPerView:1.01,
    },
    1400: {
      spaceBetween: 3,
        slidesPerView:1.01,
    },
  }}
        className="w-full"
      >
        {portfolioRightData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden w-full ">
<img
  src={item.image}
  alt={item.title}
  className="lg:w-[590px] lg:h-[590px] xs:w-[280px] xs:h-[390px]   md:w-[280px] md:h-[590px] object-cover rounded-[40px]"
/>
  {/* المنطقة القابلة للسحب */}
              <div
                className="pt-6 select-none  xs:w-[280px] lg:w-[590px] "
                onDoubleClick={handleDoubleClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <p className="text-primary/80 font-bold text-3xl mt-4">
                  {item.title}
                </p>
                <p className="text-accent text-lg mt-2">{item.category}</p>
                <p className="text-primary/80 mt-4 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
