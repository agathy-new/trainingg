// src/components/FaqSection.tsx
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { faqSectionData } from "@/data/faqSection";

export default function FaqSection() {
  return (
    <section className="relative py-24  overflow-hidden"
    style={{ backgroundImage: "url('/faq/FAQ.svg')" , backgroundSize: "1280px 1760px" }}>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – IMAGES */}
          <div className="relative flex gap-16">
  <div className="w-1/3 rounded-[48px]  flex-shrink-0 mt-20">
    <Image
      src={faqSectionData.images.left}
      alt=""
      width={240}
      height={500}
      className="object-cover  rounded-[48px]"
    />
  </div>

  <div className="w-2/3 mt-10 rounded-[48px]  ">
    <Image
      src={faqSectionData.images.right}
      alt=""
      width={240}
      height={500}
      className="object-cover  rounded-[48px]"
    />
  </div>
</div>


          {/* RIGHT – FAQ */}
          <div>
            <p className="text-accent uppercase text-sm font-medium mb-3">
              {faqSectionData.label}
            </p>

            <h2 className="text-4xl font-bold text-primary mb-10">
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
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="group flex w-full items-center justify-between px-6 py-5 text-left text-primary font-medium text-base"
                    >
                      {faq.question}
                      <ChevronDown
                        size={20}
                        className="text-primary transition-transform duration-300 group-data-[state=open]:rotate-180"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="px-6 pb-6 text-text leading-relaxed">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            <div className="mt-10">
              <a
                href={faqSectionData.cta.href}
                className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-primary font-medium hover:bg-primary hover:text-white transition"
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
