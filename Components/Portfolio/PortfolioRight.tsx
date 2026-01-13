import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import portfolioRightData from "@/data/portfolioRight";

export default function PortfolioRight() {
  return (
 <div
  className="w-full  relative pr-20"
  data-sal="slide-left"
  data-sal-duration="1200"
>
  <Swiper
    spaceBetween={10}
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
            width={640}
            height={400}
            className="w-full  object-cover rounded-[80px]" 
          />
          <div className="pt-8 px-0">
            <p className="text-primary/80 font-bold text-3xl mt-6">{item.title}</p>
            <p className="text-accent text-lg mt-2">{item.category}</p>
            <p className="text-primary/80 mt-4 text-base leading-relaxed">{item.description}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


  );
}
