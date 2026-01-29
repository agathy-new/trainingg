"use client";

import Container from "@/Components/ui/Container";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Image from "next/image";
import { useState } from "react";
import { headerData } from "@/data/headerData";
import SearchBox from "./SearchBox";

export default function Header() {
  const [open, setOpen] = useState(false);

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

            {/* زر الهامبرغر يظهر تحت 992px */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 flex items-center justify-center"
              >
                <Image src="/menu.svg" alt="menu" width={28} height={28} />
              </button>
            </div>
            
          {/* TopBar + NavBar للشاشات الكبيرة */}
          <div className="md:block hidden">
            <TopBar />
            <NavBar />
          </div>

          </div>

          {/* Mobile Menu داخل الهيدر نفسه */}
          {open && (
            <div className="flex flex-col gap-4 mt-6 md:hidden">
              {/* Search */}
              <SearchBox />

              {/* Navigation */}
              <ul className="flex flex-col gap-2 text-[17px] font-medium">
                {headerData.navigation.map((item) => (
                  <li key={item.id}>
                    {item.dropdown ? (
                      <details className="group">
                        <summary
                          className="
                            cursor-pointer flex justify-between items-center
                            px-4 py-3 rounded-md
                            bg-[#e6f4ff] text-[#004b87]
                            hover:bg-[#d0eaff] hover:text-[#003b6f]
                            transition-colors duration-200
                          "
                        >
                          <span>{item.label}</span>
                          <span className="text-[#004b87] text-lg font-bold">+</span>
                        </summary>

                        <ul className="pl-6 mt-2 flex flex-col gap-2 text-sm text-[#004b87]">
                          {item.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <a href={sub.href} className="hover:underline">
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <a
                        href={item.href}
                        className="
                          block px-4 py-3 rounded-md
                          bg-[#e6f4ff] text-[#004b87]
                          hover:bg-[#d0eaff] hover:text-[#003b6f]
                          transition-colors duration-200
                        "
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
