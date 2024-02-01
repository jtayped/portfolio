"use client";
import React, { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { pages } from "@/constants/pages";
import { Link } from "@/navigation";
import Image from "next/image";
import Cube from "@/../public/cube.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);
  function toggleSide() {
    setOpen(!open);
  }
  if (!open) {
    return (
      <button className="flex sm:hidden text-2xl" onClick={() => toggleSide()}>
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
          <button
            className="flex sm:hidden text-2xl"
            aria-label="Menu"
            onClick={() => toggleSide()}
          >
            <BsXLg />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image
            src={Cube}
            height={250}
            className="bg-yellow rounded-lg"
            alt="Cube casting a shadow"
          ></Image>
          <nav className="flex flex-col gap-2 text-center text-lg uppercase w-full">
            {pages.map((page, i) => (
              <Link
                href={page.path}
                onClick={() => toggleSide()}
                key={i}
                className={`${
                  page.accent
                    ? "bg-yellow py-0.5 text-black px-3 rounded"
                    : "border border-yellow py-0.5 px-3 rounded"
                }`}
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }
};

export default Menu;
