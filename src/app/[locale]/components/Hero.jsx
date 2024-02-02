import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Cube from "@/../public/cube.svg";
import { BsMouse, BsChevronDown, BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Index.hero");
  return (
    <div className="relative h-screen flex justify-start sm:justify-center items-center text-black">
      <div className="max-w-[1500px] flex items-center px-8 justify-center">
        <div className="w-full flex flex-col sm:max-w-[600px]">
          <Link
            href="https://old.joeltaylor.business/"
            className="group bg-white/40 hover:bg-white/60 text-xs sm:text-sm px-2 pr-3 py-1 w-fit flex items-center gap-2 rounded border border-black/5 transition-colors"
          >
            {t("oldPortfolio")}
            <BsArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mt-3">{t("title")}</h1>
          <p className="text-sm md:text-lg">{t("description")}</p>
          <div className="flex gap-2 mt-4 text-sm sm:text-md">
            <Link
              href="/#contact"
              className="bg-black py-2 px-3 text-white flex items-center gap-3 rounded shadow-lg hover:bg-black/90 transition-colors"
            >
              {t("accentBtn")}
              <FaArrowRight />
            </Link>
            <Link
              href="/#portfolio"
              className="border border-black py-2 px-3 text-black rounded hover:bg-black/5"
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
