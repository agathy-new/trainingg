"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import strataStats, { StatItem } from "@/data/strataStats";

export default function StrataSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
  <section className=" relative py-32">
  <div className=" mx-auto px-6 xs:px-[16px] lg:px-8">
   <div className="row flex flex-wrap">

  {/* القسم الأيسر */}
  <div data-aos="fade-right" className="w-full sm:w-1/2 px-4 mb-8 sm:mb-0">
    <div className="abouttitle mb-8">
      <h2 className="text-[34px] uppercase leading-[1.3] font-bold text-primary mb-4">
        {strataStats.title}
      </h2>

      <p className="text-primary text-[15px] tracking-normal leading-[1.5]">
        {strataStats.description}
      </p>
    </div>
  </div>

  {/* القسم الأيمن */}
  <div data-aos="fade-left" className="w-full sm:w-1/2 px-4" ref={ref}>
    <div className="aboutbody">
      <div className="servicesnumbers grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-6 mt-6">
        {strataStats.stats.map((stat: StatItem, index: number) => (
          <div
            key={index}
            className="number text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <p
              className="text-accent"
              style={{ fontSize: "46px", fontWeight: "600" }}
            >
              {inView ? (
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              ) : (
                0
              )}
            </p>

            <p className="mt-2 font-bold text-primary/80 text-[18px] break-words">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

</div>

  </div>
</section>

  );
}
