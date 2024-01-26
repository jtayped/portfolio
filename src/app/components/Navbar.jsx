"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pages } from "@/constants/pages";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function toggleSide() {
    setOpen(!open);
  }
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between py-10 px-8 md:px-20 text-black z-10 bg-yellow/80 backdrop-blur-sm">
      <Link href="/">
        <p className="text-2xl sm:text-4xl font-extrabold">TAYLOR</p>
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-lg uppercase">
        {pages.map((page, i) => (
          <Link
            href={page.path}
            key={i}
            className={`${
              page.accent
                ? "bg-black text-yellow px-3 py-1 rounded-sm shadow"
                : "tracking-wider"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
      <button className="flex sm:hidden text-2xl" onClick={() => toggleSide}>
        <BsList />
      </button>
    </header>
  );
};

export default Navbar;
