export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface StrataStats {
  title: string;
  description: string;
  stats: StatItem[];
}

const strataStats: StrataStats = {
  title: "Why Choose Strata Global for Owners Association Management?",
  description:
    "By partnering with Strata Global, you align yourself with a company renowned for its proven track record in managing a wide range of communities, specializing in luxury and branded residences. As the appointed Owners' Association Management Company for globally recognized brands, across various sectors such as Hospitality, Fashion and Automotive, showcases our ability to bring unparalleled knowledge and experience to community management.",
  stats: [
    { label: "Years of Experience", value: 27, suffix: "+" },
    { label: "Project Retention", value: 100, suffix: "%" },
    { label: "Managing Units", value: 8000, suffix: "+" },
    { label: "Square Feet", value: 15, suffix: "M+" },
    { label: "AED in Service  Charges", value: 161, suffix: "M+" },
    { label: "Energy Saved", value: 15, suffix: "MkW" },
  ],
};

export default strataStats;
