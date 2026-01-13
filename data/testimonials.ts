export interface Testimonial {
  name: string;
  message: string;
  highlights?: string[]; // كلمات أو جمل مميزة
}

export const testimonials: Testimonial[] = [
  {
    name: "Musharraf Khan",
    message:
      "The management team here is outstanding. They are always responsive, maintain the property impeccably, and ensure a safe and pleasant living environment. I'm impressed with the management team. They are proactive, professional, especially with Helen and Monica who are dedicated to resident satisfaction is evident in everything they do. Highly recommend Strata Global",
  },
  {
    name: "Robert Morgan",
    message:
      "Have been living in Madison Residency for 5 years now. Building is always kept really clean. The maintenance is prompt and reliable. The security guys are very good at screening visitors/deliveries. The front desk staff always greet us with a smile, especially Julie who is always keen to help with any enquiries or problems.",
  },
  {
    name: "Mimi Marotte",
    message:
      "We were owners in 15 Northside. Strata Global team does absolute outstanding work. They are very professional and helpful. Always supportive and maintain the property in an impeccable state. We were grateful for the proactive information - they always kept us up-to-date. Great job!",
  },
];
