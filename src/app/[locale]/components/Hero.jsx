import React from "react";
import Image from "next/image";
import {Link} from "@/navigation";
import Cube from "@/../public/cube.svg";
import { BsMouse, BsChevronDown } from "react-icons/bs";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Index");
  return (
    <div className="relative h-screen flex justify-start sm:justify-center items-center text-black">
      <div className="max-w-[1500px] flex items-center px-8 justify-center">
        <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left sm:max-w-[600px]">
          <h1 className="text-4xl md:text-6xl font-bold">{t("title")}</h1>
          <p className="text-sm md:text-lg">{t("description")}</p>
          <div className="flex gap-2 mt-4 text-sm md:text-md">
            <Link
              href="/#contact"
              className="bg-black border border-black hover:bg-black/95 shadow hover:shadow-lg transition-all text-white px-3 py-1 rounded-sm"
            >
              {t("accentBtn")}
            </Link>
            <Link
              href="/#portfolio"
              className="border border-black px-3 py-1 rounded-sm shadow hover:bg-black/5 transition-colors"
            >
              {t("secondaryBtn")}
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
        <div className="animate-bounce mt-1">
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
