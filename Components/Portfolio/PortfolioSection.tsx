// "use client";

// import { useRef } from "react";
// import portfolioLeftData from "@/data/portfolioLeft";
// import portfolioRightData from "@/data/portfolioRight";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";

// export default function PortfolioSection() {
//   const swiperRef = useRef<any>(null);

//   const { title, subtitle, description, arrows, buttonText, buttonLink } =
//     portfolioLeftData;

//   return (
//     <div className="grid md:grid-cols-2 gap-16 items-start">
      
//       {/* LEFT */}
//       <div
//         data-sal="slide-right"
//         data-sal-duration="1200"
//         className="flex flex-col justify-start space-y-8 lg:mt-12"
//       >
//         <h2 className="text-accent uppercase text-[16px]">{title}</h2>

//         <h3 className="text-[32px] xl:text-[30px] font-semibold uppercase leading-[1.3] text-primary break-words">
//           {subtitle}
//         </h3>

//         <p className="text-[16px] text-primary leading-[1.3]">{description}</p>

//         {/* ARROWS */}
//         <div className="flex gap-6 mt-6">
//           <img
//             src={arrows.prev}
//             alt="Previous"
//             className="w-12 h-6 cursor-pointer transform rotate-180"
//             onClick={() => swiperRef.current?.slidePrev()}
//           />

//           <img
//             src={arrows.next}
//             alt="Next"
//             className="w-12 h-6 cursor-pointer"
//             onClick={() => swiperRef.current?.slideNext()}
//           />
//         </div>

//         <div className="text-center mt-20">
//           <a
//             href={buttonLink}
//             className="inline-flex items-center gap-2 px-6 py-3 border border-primary 
//                       text-primary text-lg font-medium rounded-full 
//                       transition duration-300 ease-in-out 
//                       hover:bg-primary hover:text-white"
//           >
//             {buttonText}
//           </a>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div
//         className="w-full relative pr-20"
//         data-sal="slide-left"
//         data-sal-duration="1200"
//       >
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={10}
//           slidesPerView={1.05}
//           loop={true}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           className="w-full"
//         >
//           {portfolioRightData.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="overflow-hidden w-[450px] h-[750px] mx-auto">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full object-cover rounded-[80px]"
//                 />

//                 <div className="pt-8 px-0">
//                   <p className="text-primary/80 font-bold text-3xl mt-6">
//                     {item.title}
//                   </p>
//                   <p className="text-accent text-lg mt-2">{item.category}</p>
//                   <p className="text-primary/80 mt-4 text-base leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
