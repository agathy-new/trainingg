import { useState, useEffect } from 'react';
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // حدد كم عنصر تعرض حسب العرض
  let itemsToShow = 1; // افتراضياً واحد
  if (windowWidth >= 1200) { // lg (عادة أكبر من 1024px)
    itemsToShow = testimonials.length;
     // كل العناصر الثلاثة
  } else if (windowWidth >= 787) { // md
    itemsToShow = 2;
  } else  { // sm وأصغر
    itemsToShow = 1;
  }
return (
    <section className="py-20 md:px-8 sm:px-16 lg:px-14 xl:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-accent uppercase text-[16px] mb-4">TESTIMONIALS</h2>
        <p className="text-[32px] font-semibold uppercase leading-[1.3] font-light text-primary mb-24 -mt-2">
          WHAT THEY SAY
        </p>

        <div className="grid gap-2 xl:gap-6 lg:gap-4 sm:gap-8 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto justify-center">
          {testimonials.slice(0, itemsToShow).map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl 
                         shadow-[0_0_25px_rgba(0,0,0,0.12)]
                         p-[28px] text-left duration-300 
                         w-[340px] h-[330px]
                         lg:w-[352px]
                         flex flex-col justify-between mx-auto"
            >
              {/* أيقونة الاقتباس */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Image
                  src="/Testimonials/quote.png"
                  alt="quote icon"
                  width={70}
                  height={70}
                />
              </div>

              {/* النص */}
              <div className="overflow-y-auto no-scrollbar max-h-[230px] max-w-[300px] px-1 flex-1">
                <p className="text-primary/70 text-center text-[13px] font-semibold leading-[1.6] mt-2">
                  {testimonial.message}
                </p>
              </div>

              {/* الاسم */}
              <div className="text-center mt-3">
                <span className="text-primary/70 text-[13px] text-center font-semibold leading-[1.9]">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
