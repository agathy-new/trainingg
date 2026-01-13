import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
  <section className=" py-20 px-10 sm:px-16 lg:px-28">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-accent uppercase text-[16px] mb-4">TESTIMONIALS</h2>
        <p className="text-[32px] xl:text-[30px] font-semibold uppercase leading-[1.3] font-light text-primary mb-12">
          WHAT THEY SAY
        </p>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-2xl border border-gray-200 
                         p-3 pt-12 text-left transition-shadow duration-300 
                         max-w-[352px] h-[330px]  "
            >
              {/* أيقونة الاقتباس على الحافة العليا بالنص */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <Image
                  src="/Testimonials/quote.png"
                  alt="quote icon"
                  width={70}
                  height={70}
                 
                />
              </div>

              {/* النص مع scroll ورفع النص لفوق */}
              <div className="overflow-y-auto no-scrollbar max-h-[230px]  max-w-[300px] px-2 -mt-2">
                <p className="text-primary/70 text-center text-[13px] font-semibold leading-[1.8]">
                  {testimonial.message}
                </p>
              </div>

              {/* الاسم */}
              <div className="text-center max-h-[20px] mt-6">
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
