import React from "react";
import Image from "next/image";
import Cube from "@/../public/cube.svg";
import { BsMouse, BsChevronDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-start sm:justify-center items-center text-black">
      <div className="max-w-[1500px] flex items-center sm:items-center px-8">
        <div className="max-w-[300px] sm:max-w-[600px]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam atque veniam officia sint porro quaerat fuga et quam fugit!
          </p>
          <div className="flex gap-2 mt-4 text-sm md:text-md">
            <button className="bg-black border border-black text-yellow px-3 py-1 rounded-sm shadow-lg">
              Buy Now!
            </button>
            <button className="border border-black px-3 py-1 rounded-sm shadow">
              Something
            </button>
          </div>
        </div>
        <Image
          src={Cube}
          width={600}
          className="hidden sm:flex sm:w-[350px] lg:w-[450px] xl:w-[600px]"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[100px] flex flex-col items-center text-center gap-0.5 text-yellow bg-black py-3 px-2 rounded-full">
        <BsMouse size={25} />
        <BsChevronDown />
      </div>
    </div>
  );
};

export default Hero;
