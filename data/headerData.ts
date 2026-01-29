import { HeaderData } from "@/types/header";

export const headerData: HeaderData = {
  logo: {
    src: "/logo.svg",
    alt: "Strata Global",
  },

  actions: {
    search: {
      placeholder: "Search...",
    },
    login: {
      label: "Portal Login",
      href: "/portal",
    },
  },

  navigation: [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 3,
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile Applications", href: "/services/mobile-apps" },
        { label: "UI / UX Design", href: "/services/ui-ux" },
        { label: "Digital Marketing", href: "/services/marketing" },
      ],
    },
    {
      id: 4,
      label: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      label: "About Us",
      href: "/about",
    },
    {
      id: 6,
      label: "Contact Us",
      href: "/contact",
    },
  ],
};
