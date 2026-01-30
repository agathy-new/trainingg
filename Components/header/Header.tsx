"use client";

import Container from "@/Components/ui/Container";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Image from "next/image";
import { useState } from "react";
import { headerData } from "@/data/headerData";
import SearchBox from "./SearchBox";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // State للدروب داون في الموبايل
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="w-full pb-6 max-md:border-b max-md:border-gray-200 max-md:shadow-md">
      <Container>
        <div className="flex flex-col pt-4 min-h-[100px]">
          <div className="flex items-center justify-between">
            <Image
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={190}
              height={90}
              className="object-contain h-full"
              priority
            />

            {/* زر الهامبرغر */}
            <div className="md:hidden">
           <button
  onClick={() => setOpen(!open)}
  className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] md:hidden"
>
  <span className="w-7 h-[2px] bg-primary rounded-md"></span>
  <span className="w-7 h-[2px] bg-primary rounded-md"></span>
  <span className="w-7 h-[2px] bg-primary rounded-md"></span>
</button>

            </div>

            {/* TopBar + NavBar للشاشات الكبيرة */}
            <div className="md:block hidden">
              <TopBar />
              <NavBar />
            </div>
          </div>

          {/* ===========================
              Mobile Menu
          ============================ */}
          {open && (
            <div className="flex flex-col gap-4 mt-6 md:hidden">

              {/* Search */}
              <SearchBox />

              {/* Navigation */}
              <ul className="flex flex-col gap-2 text-[17px] font-medium">
                {headerData.navigation.map((item) => {
                  const active = pathname === item.href;

                  // ===== DROPDOWN ITEM =====
                  if (item.dropdown) {
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.id ? null : item.id
                            )
                          }
                          className="w-full flex items-center gap-2 px-4 py-3 bg-[#e6f4ff] rounded-md"
                        >
                          <span
                            className={clsx(
                              "font-bold transition-colors",

                              // إذا الدروب داون مفتوح → accent
                              openDropdown === item.id
                                ? "text-accent"

                                // إذا Active → accent + underline
                                : active
                                ? "text-accent underline decoration-2 underline-offset-4"

                                // غير هيك → اللون العادي
                                : "text-primary hover:text-accent"
                            )}
                          >
                            {item.label}
                          </span>

                          <ChevronDown
                            size={18}
                            className={clsx(
                              "transition-transform duration-300",
                              openDropdown === item.id && "rotate-180"
                            )}
                          />
                        </button>

                        {/* Dropdown Content */}
                        {openDropdown === item.id && (
                          <ul className="pl-6 mt-2 flex flex-col text-sm bg-[#e6f4ff] rounded-b-md overflow-hidden">
                            {item.dropdown.map((sub) => {
                              const subActive = pathname === sub.href;

                              return (
                                <li key={sub.label}>
                                  <a
                                    href={sub.href}
                                    className={clsx(
                                      "block px-4 py-2 transition bg-[#e6f4ff]",
                                      subActive
                                        ? "text-accent underline decoration-2 underline-offset-4"
                                        : "text-primary hover:text-accent"
                                    )}
                                    onClick={() => setOpen(false)}
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  // ===== NORMAL ITEM =====
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={clsx(
                          "block px-4 py-3 font-bold transition-colors bg-[#e6f4ff] rounded-md",
                          active
                            ? "text-accent underline decoration-2 underline-offset-4"
                            : "text-primary hover:text-accent"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
