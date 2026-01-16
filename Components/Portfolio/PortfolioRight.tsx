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
      // سحب لليمين → السلايد السابق
      const controller = setSwiperController as any;
      controller()?.slidePrev?.();
      setIsDragging(false);
    } else if (diff < -50) {
      // سحب لليسار → السلايد التالي
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
      className="w-full relative pr-20"
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
        spaceBetween={11}
        slidesPerView={1.05}
        centeredSlides={false}
        loop={true}
        className="w-full"
      >
        {portfolioRightData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden w-[450px] h-[750px] mx-auto">
           <img
  src={item.image}
  alt={item.title}
  width={800}   // زيادة العرض
  height={560}
  className="w-[700px] h-[560px] object-cover rounded-[40px] mx-auto"
/>


              {/* المنطقة القابلة للسحب */}
              <div
                className="pt-8 px-0 select-none"
                onDoubleClick={handleDoubleClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <p className="text-primary/80 font-bold text-3xl mt-6">
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
