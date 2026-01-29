
"use client";
import Header from "@/Components/header/Header";
// import Header from "@/components/header/Header";
import Hero from "@/Components/hero/Hero";
import AboutIntro from "@/Components/aboutIntro/AboutIntro";
import ServicesSection from "@/Components/ServiceRow/ServicesSection";
import StrataSection from "@/Components/Strata/StrataSection";

import Testimonials from "@/Components/Testimonals/Testimonials";
import ContactSection from "@/Components/ContactSection/ContactSection";
import FaqSection from "@/Components/faqSection/FaqSection";
import Footer from "@/Components/Footer/Footer";
import Container from "@/Components/ui/Container";
import PortfolioSection from "@/Components/Portfolio/PortfolioSection";


export default function Home() {
  return (
   <main className="w-full bg-white ">
    
  <Header />
  <Hero />
  <AboutIntro />
  
   <ServicesSection/>
  <StrataSection/>
<PortfolioSection/>
<Testimonials />
<ContactSection />
<FaqSection />

<Footer/>
  {/* <section
  className="relative w-full  bg-no-repeat bg-cover bg-end"
  style={{
    backgroundImage: "url('/portfolio/shadowbg.svg')"
  }}
>
<div className="absolute inset-0 bg-[#e0f7fa]/30 z-0"></div>
 <div className="relative z-10 w-full pl-14 py-24">
<div className="flex flex-col lg:flex-row justify-start items-stretch mt-4 lg:-mt-6">
<div className="w-full lg:w-[34%] pl-8 pr-4">
    <PortfolioLeft />
  </div>
<div className="w-full lg:w-[49%]   ml-32 
">
    <PortfolioRight />
  </div>
</div>
    </div>
<div
  className="bg-[#566889]/70 w-screen  h-[410px] mt-1
"
>
  <CommunitiesSlider />
</div>



  
</section> */}
  {/* <Footer/> */}

      {/* <ServicesSection/>
      <div className="mx-auto  px-4"> <StrataSection/></div>
    

<Testimonials />

 */}
</main>
  
  );
}
