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
    <section className="aboutsection relative py-32">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="row flex flex-wrap px-4 mx-auto">

          {/* القسم الأيسر */}
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
          >
            <div className="abouttitle mb-8">
              <h2 className="text-[32px] xl:text-[30px] uppercase leading-[1.3] font-bold text-primary mb-4">
                {strataStats.title}
              </h2>

              <p className="text-primary/80 text-[13px] font-semibold leading-[1.9] max-w-[600px]">
                {strataStats.description}
              </p>
            </div>
          </div>

          {/* القسم الأيمن */}
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 px-4"
            ref={ref}
          >
            <div className="aboutbody">
              <div className="servicesnumbers grid grid-cols-3 gap-y-12 gap-6 mt-6">

                {strataStats.stats.map((stat: StatItem, index: number) => (
                  <div
                    key={index}
                    className="number text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <p
                      className="text-accent"
                      style={{ fontSize: "2.8rem", fontWeight: "600" }}
                    >
                      {inView ? (
                        <CountUp
                          end={stat.value}
                          duration={2}
                          suffix={stat.suffix}
                        />
                      ) : (
                        0
                      )}
                    </p>

                    <p className="mt-2 font-bold text-primary/80 max-w-[140px] mx-auto break-words">
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
