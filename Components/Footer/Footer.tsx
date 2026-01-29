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
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14">
  {/* Top */}
   <div className="flex flex-col sm:items-center sm:text-center gap-6 sm:flex-row xs:items-start xs:justify-between">

 {/* Logo */}
      <div className="w-full flex justify-center sm:justify-start">
  <Image
    src={footerData.logo.src}
    alt={footerData.logo.alt}
    width={200}
    height={140}
    className="object-contain h-full"
    priority
  />
</div>

<div className="grid grid-cols-2 gap-6 w-full   sm:flex sm:gap-0 md:gap-12 lg:gap-18 xl:gap-20 sm:max-w-none">
  {/* Column 1 */}
  <div className="text-left">
    <ul className="space-y-2 text-[15px] text-start justify-start sm:text-left">
      {footerData.columns[0].map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="text-accent font-bold underline-offset-4 decoration-2">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 2 */}
  <div className="text-left">
    <ul className="space-y-2 text-[15px] text-start justify-start sm:text-left">
      {footerData.columns[1].map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="text-accent font-bold underline-offset-4 decoration-2">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

<div className="w-full flex flex-col items-start text-left"> <h4 className="text-[22px] mb-2 uppercase text-[#566889] tracking-tight font-semibold"> Subscribe to our newsletter </h4>

<form className="relative w-full xl:w-[416px] xs:w-[432px] sm:w-[216px] md:w-[279px] lg:w-[349px]">

  <input
    type="email"
    placeholder="Enter Email Address"
    className="bg-transparent border border-[#566889] outline-none text-sm placeholder:text-[#566889] w-full h-[38px] px-4  rounded-full"
  /><button
    type="submit"
    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-full rounded-full hover:opacity-90 transition"
  > <Image
      src={footerData.submitIcon.src}
      alt={footerData.submitIcon.alt}
      width={50}
      height={50}
      className="object-contain"
    />
  </button>
</form></div></div>
    {/* Bottom */}
  <div className="border-t border-white/20 mt-4 pt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">

 <p className="text-[16px] ">
        {footerData.copyright}
      </p>
  <div className="flex gap-8">
  {footerData.social.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="hover:opacity-80 transition" >
      <Image
        src={item.src}
        alt={item.name}
        width={28}
        height={28}
        className="object-contain h-[36px]"
      />
    </Link>
  ))}
</div> </div> </div>
</footer>
 );
}
