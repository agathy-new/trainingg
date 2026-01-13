export type NavItem = {
  id: number;
  label: string;
  href: string;
};

export type HeaderData = {
  logo: {
    src: string;
    alt: string;
  };
  actions: {
    search: {
      placeholder: string;
    };
    login: {
      label: string;
      href: string;
    };
  };
  navigation: NavItem[];
};
