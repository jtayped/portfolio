"use client";
import React, { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { pages } from "@/constants/pages";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { LanguageSelector } from ".";

const Menu = () => {
  const [open, setOpen] = useState(false);
  function toggleSide() {
    setOpen(!open);
  }
  if (!open) {
    return (
      <button
        aria-label="Open Menu"
        className="flex sm:hidden text-2xl"
        onClick={() => toggleSide()}
      >
        <BsList />
      </button>
    );
  } else {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center text-yellow">
        <div className="absolute top-0 left-0 w-full flex items-center justify-between py-8 px-8 z-10">
          <Link href="/" onClick={() => toggleSide()}>
            <p className="text-2xl sm:text-4xl font-extrabold">TAYLOR</p>
          </Link>
          <motion.button
            className="flex sm:hidden text-2xl"
            aria-label="Close Menu"
            onClick={() => toggleSide()}
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
          >
            <BsXLg />
          </motion.button>
        </div>
        <div className="flex flex-col items-center justify-between gap-6">
          <nav className="flex flex-col gap-2 text-center text-3xl font-semibold underline">
            {pages.map((page, i) => (
              <Link href={page.path} onClick={() => toggleSide()} key={i}>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.025 }}
                >
                  {page.name}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }
};

export default Menu;
