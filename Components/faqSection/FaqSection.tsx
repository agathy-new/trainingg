// src/components/FaqSection.tsx
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { faqSectionData } from "@/data/faqSection";

export default function FaqSection() {
  return (
    <section className="relative  bg-no-repeat bg-cover bg-end py-16
 overflow-hidden"
    style={{ backgroundImage: "url('/faq/FAQ.svg')"  }}>
          

      <div className="container mx-auto px-6">
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-start sm:items-center mt-8">


{/* LEFT – IMAGES */}
<div className="flex flex-col xs:flex-row xs:justify-center xs:items-center gap-8 sm:gap-16  ">

  <div className="w-[198px] h-[340px] xs:w-[198px] xs:h-[340px] sm:w-[192px] sm:h-[320px] md:w-[216px] md:h-[536px]
 overflow-hidden  ">
    <Image
      src={faqSectionData.images.left}
      alt=""
      width={200}
      height={560}
      className="object-cover w-full h-full rounded-[38px]"
    />
  </div>

  <div className="w-[198px] h-[340px] xs:w-[209px] xs:h-[340px] sm:w-[216px] sm:h-[320px] md:w-[216px] md:h-[536px]
 overflow-hidden -mt-28 lg:-mt-60">
    <Image
      src={faqSectionData.images.right}
      alt=""
      width={200}
      height={560}
      className="object-cover w-full h-full rounded-[38px]"
    />
  </div>

</div>
 {/* RIGHT – FAQ */}
       
<div className=" xs:py-[40px] sm:w-[696px] lg:w-[491px] py-16 md:py-32  ">

            <p className="text-accent uppercase text-[16px] font-medium mb-3">
              {faqSectionData.label}
            </p>

            <h2 className="text-[34px] font-bold text-primary mb-6">
              {faqSectionData.heading}
            </h2>

            <Accordion.Root
              type="single"
              collapsible
              className="space-y-4"
            >
              {faqSectionData.faqs.map((faq, i) => (
             <Accordion.Item
  key={i}
  value={`item-${i}`}
  className="
    bg-white 
    rounded-xl 
    border border-gray-200  
    overflow-hidden 
    sm:w-[682px]
    md:w-[800px]
   lg:w-[480px]            
  "
>

                  <Accordion.Header>
               <Accordion.Trigger
  className="group flex w-full items-center justify-between 
             px-6 py-4 
             min-h-[68px]   
             text-left text-primary text-[18px] font-bold tracking-tight"
>
  {faq.question}
  <ChevronDown
    size={20}
    
    className="text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 "
  />
</Accordion.Trigger>

                  </Accordion.Header>

                  <Accordion.Content className="px-4 pb-4 text-[13px] font-semibold leading-[1.6] text-primary/70">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="mt-6 flex justify-center justify-center ">
  <a
    href={faqSectionData.cta.href}
    className="inline-flex gap-2 rounded-full border border-primary px-7 py-3 text-primary text-[12px] hover:bg-primary hover:text-white transition"
  >
    {faqSectionData.cta.text}
    →
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
