"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import PortfolioLeft from "./PortfolioLeft";
import PortfolioRight from "./PortfolioRight";

export default function PortfolioSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* الخلفية */}
      <img
        src="/portfolio/shadowbg.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-20 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[120px] items-start">

          {/* القسم اليسار */}
          <div data-aos="fade-right">
            <PortfolioLeft />
          </div>

          {/* القسم اليمين */}
          <div data-aos="fade-left">
            <PortfolioRight />
          </div>

        </div>
      </div>
    </section>
  );
}
