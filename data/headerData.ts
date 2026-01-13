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
      label: "Login",
      href: "/login",
    },
  },
  navigation: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Solutions", href: "/solutions" },
    { id: 3, label: "Industries", href: "/industries" },
    { id: 4, label: "About", href: "/about" },
  ],
};
