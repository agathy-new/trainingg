
"use client";
import Header from "@/Components/header/Header";
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
</main>
  
  );
}
