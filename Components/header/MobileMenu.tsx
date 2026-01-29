"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { headerData } from "@/data/headerData";
import SearchBox from "./SearchBox";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-0 right-0 w-[80%] h-full bg-white
        shadow-xl border-l border-gray-200 z-[999]
        md:hidden px-6 pt-6
      "
    >
      {/* Logo + Close */}
      <div className="flex justify-between items-center mb-6">
        <Image
          src={headerData.logo.src}
          alt={headerData.logo.alt}
          width={120}
          height={40}
        />
        <button onClick={() => setOpen(false)}>
          <Image src="/close.svg" alt="close" width={26} height={26} />
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBox />
      </div>

      {/* Navigation */}
      <ul className="flex flex-col gap-2 text-[17px] font-medium">
        {headerData.navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname === item.href + "/" ||
            pathname.startsWith(item.href + "/");

          /* ===========================
             DROPDOWN ITEM
          ============================ */
          if (item.dropdown) {
            return (
              <details className="group" key={item.id}>
                <summary
                  className={clsx(
                    "cursor-pointer flex justify-between items-center px-4 py-3 rounded-md transition-colors duration-200",
                    isActive
                      ? "bg-[#e6f4ff] text-[#C0A062] font-bold underline decoration-2 underline-offset-4"
                      : "bg-[#e6f4ff] text-[#004b87] hover:bg-[#d0eaff] hover:text-[#003b6f]"
                  )}
                >
                  <span>{item.label}</span>

                  {/* نفس أيقونة الـ NavBar + دوران عند الفتح */}
                  <ChevronDown
                    size={18}
                    className="text-[#004b87] transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <ul className="pl-6 mt-2 flex flex-col gap-2 text-sm text-[#004b87]">
                  {item.dropdown.map((sub) => {
                    const subActive =
                      pathname === sub.href ||
                      pathname === sub.href + "/" ||
                      pathname.startsWith(sub.href + "/");

                    return (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className={clsx(
                            "block px-4 py-2 rounded hover:underline",
                            subActive ? "text-[#C0A062] font-semibold" : ""
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          }

          /* ===========================
             NORMAL ITEM
          ============================ */
          return (
            <a
              href={item.href}
              key={item.id}
              className={clsx(
                "block px-4 py-3 font-bold bg-[#e6f4ff] transition-colors duration-200",
                isActive
                  ? "text-[#C0A062] underline decoration-2 underline-offset-4"
                  : "text-primary hover:text-accent"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </ul>
    </motion.div>
  );
}
