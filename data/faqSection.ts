// src/data/faqSection.ts
import { FaqSectionData } from "@/types/faq";

export const faqSectionData: FaqSectionData = {
  label: "Frequently Asked Questions",
  heading: "How Can We Help?",

  images: {
    left: "/faq/faq-left.jpg",
    right: "/faq/faq-right.jpg",
  },

  faqs: [
    {
      question: "How can I get in touch to learn more about your services?",
      answer:
        "You can contact us through our website contact form, email, or phone. Our team will be happy to assist you.",
    },
    {
      question: "How is your pricing structured?",
      answer:
        "Our pricing depends on the size and needs of the community. We offer customized solutions tailored to each client.",
    },
    {
      question: "How do you ensure compliance with local regulations?",
      answer:
        "We strictly follow local regulations and ensure full compliance through regular audits and expert oversight.",
    },
    {
      question: "What services does Strata Global offer?",
      answer:
        "We provide owners association management, community management, financial management, and advisory services.",
    },
    {
      question: "Why is community management important?",
      answer:
        "Effective community management ensures smooth operations, resident satisfaction, and long-term asset value.",
    },
    {
      question: "What types of communities do you manage?",
      answer:
        "We manage residential, mixed-use, and commercial communities of various sizes.",
    },
  ],

  cta: {
    text: "View All FAQ",
    href: "/faq",
  },
    backgroundImage: "/faq/FAQ.svg",
};
