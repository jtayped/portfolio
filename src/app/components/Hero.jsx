import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cube from "@/../public/cube.svg";
import { BsMouse, BsChevronDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-start sm:justify-center items-center text-black">
      <div className="max-w-[1500px] flex items-center sm:items-center px-8">
        <div className="max-w-[300px] sm:max-w-[600px]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi! I am Joel Taylor
          </h1>
          <p className="text-sm md:text-lg">
            a young and passionate front-end developer crafting innovative and
            precise web solutions. Join me on a journey of continuous learning,
            and let's create something extraordinary together.
          </p>
          <div className="flex gap-2 mt-4 text-sm md:text-md">
            <Link
              href="/#contact"
              className="bg-black border border-black hover:bg-black/95 shadow hover:shadow-lg transition-all text-white px-3 py-1 rounded-sm"
            >
              Contact me!
            </Link>
            <Link
              href="/#portfolio"
              className="border border-black px-3 py-1 rounded-sm shadow hover:bg-black/5 transition-colors"
            >
              View my work
            </Link>
          </div>
        </div>
        <Image
          src={Cube}
          width={600}
          className="hidden sm:flex sm:w-[350px] lg:w-[450px] xl:w-[600px]"
          alt="Cube casting a shadow"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[100px] flex flex-col items-center text-center gap-0.5 py-3 px-2 rounded-full">
        <BsMouse size={25} />
        <p className="text-[8px] mt-1">SCROLL</p>
        <BsChevronDown />
      </div>
    </div>
  );
};

export default Hero;
