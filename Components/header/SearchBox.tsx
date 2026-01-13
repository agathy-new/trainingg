"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const blurTimeout = useRef<number | null>(null);

  const handleFocus = () => {
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
    setOpen(true);
  };

  const handleBlur = () => {
    blurTimeout.current = window.setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <motion.form
      className="flex items-center border border-accent rounded-full overflow-hidden"
      animate={{
        width: open ? 280 : 150,
        height: 45,
        paddingLeft: 12,
        paddingRight: 12,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className="flex items-center justify-center shrink-0 mr-2">
        <Image src="/searchnormal.svg" alt="Search" width={18} height={18} />
      </div>

      <input
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="flex-1 bg-transparent outline-none text-sm text-primary placeholder:text-primary/60"
        style={{
          opacity: open ? 1 : 0.7,
        }}
      />
    </motion.form>
  );
}
