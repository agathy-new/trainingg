"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footerData";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const iconsMap = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="bg-[#193a5a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Logo */}
            <div className="flex items-center pr-6 ">
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
                width={200}
              height={140}   
              className="object-contain h-full"
              priority
            />
          </div>

          {/* Links */}
          {footerData.columns.map((column, index) => (
            <ul key={index} className="space-y-3 text-sm">
              {column.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-accent  decoration-2 underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-sm mb-4 uppercase tracking-wide opacity-80">
              Subscribe to our newsletter
            </h4>

            <form className="flex items-center bg-[#274a6d] rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-300"
              />
           <button
  type="submit"
  className="ml-3   rounded-full flex items-center justify-center hover:opacity-90 transition"
>
  <Image
    src={footerData.submitIcon.src}
    alt={footerData.submitIcon.alt}
    width={footerData.submitIcon.width}
    height={footerData.submitIcon.height}
  />
</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs opacity-70">
            {footerData.copyright}
          </p>

          <div className="flex gap-5">
            {footerData.social.map((item) => {
              const Icon = iconsMap[item.icon as keyof typeof iconsMap];
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#f0b38a] transition"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
