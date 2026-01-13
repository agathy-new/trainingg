// src/types/faq.ts
export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionData = {
  label: string;
  heading: string;
  images: {
    left: string;
    right: string;
  };
  faqs: FaqItem[];
  cta: {
    text: string;
    href: string;
  };
};
