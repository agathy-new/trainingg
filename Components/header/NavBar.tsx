"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "#" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      "Web Development",
      "Mobile Applications",
      "UI / UX Design",
      "Digital Marketing",
    ],
  },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end  ">
        <ul className="flex gap-10 items-center">
          {navItems.map((item) => {
            const active = pathname === item.href;

      
            if (item.dropdown) {
              return (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-1 font-bold tracking-wide  transition-colors ",
                      active
                        ? "text-accent underline decoration-2 underline-offset-4"
                        : "text-primary hover:text-accent"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </a>

                  {/* Dropdown */}
                  <div
                    className="
                      absolute left-0 top-full mt-4
                      min-w-[220px]
                      bg-white
                      rounded-xl
                      shadow-lg
                      border border-gray-100
                      opacity-0
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-200
                      z-50
                    "
                  >
                    <ul className="py-4">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem}>
                          <a
                            href="#"
                            className="
                              block px-6 py-2
                              text-primary
                              hover:bg-[#F8F5F3]
                              hover:text-accent
                              transition
                            "
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            // ===== Normal links =====
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={
                    active
                      ? {
                          textDecoration: "underline",
                          textDecorationThickness: "2px",
                          textUnderlineOffset: "4px",
                        }
                      : { textDecoration: "none" }
                  }
                  className={clsx(
                    "font-semibold tracking-wide transition-colors",
                    active
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
