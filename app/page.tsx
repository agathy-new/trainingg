
"use client";
import Header from "@/Components/header/Header";
// import Header from "@/components/header/Header";
import Hero from "@/Components/hero/Hero";
import AboutIntro from "@/Components/aboutIntro/AboutIntro";
import ServicesSection from "@/Components/ServiceRow/ServicesSection";
import StrataSection from "@/Components/Strata/StrataSection";

import PortfolioLeft from "@/Components/Portfolio/PortfolioLeft";

import PortfolioRight from "@/Components/Portfolio/PortfolioRight";
import CommunitiesSlider from  "@/Components/Communities/CommunitiesSlider";
import Testimonials from "@/Components/Testimonals/Testimonials";
import ContactSection from "@/Components/ContactSection/ContactSection";

import FaqSection from "@/Components/faqSection/FaqSection";
import Footer from "@/Components/Footer/Footer";


export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-[1400px] px-4">
      <Header />
      <Hero />
      <AboutIntro />
   
      </div>
      <ServicesSection/>
      <div className="mx-auto max-w-[1400px] px-6"> <StrataSection/></div>
    
<section
  className="relative w-full bg-white bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/portfolio/shadowbg.svg')", backgroundSize: "1280px 1512px" }}
>
  <div className="absolute inset-0 bg-[#e0f7fa]/30 z-0"></div>

  <div className="relative z-10 w-full px-12 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-[1200px] mx-auto">
      <div className="max-w-[400px]">
        <PortfolioLeft />
      </div>
      <PortfolioRight />
    </div>

    <div className="mt-20 bg-[#172B6B99]/10 w-full ">
      <CommunitiesSlider />
    </div>
  </div>
</section>



<Testimonials />
<ContactSection />
<FaqSection />
<Footer/>

</main>
  
  );
}
