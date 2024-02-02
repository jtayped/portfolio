import React from "react";
import Image from "next/image";
import Me from "@/@/../../public/about/me.png";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("About.hero");

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[100px] sm:mt-[200px]">
      <div className="w-[900px] flex items-center justify-center">
        <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:grid sm:grid-cols-2 items-center">
          <div className="w-full h-full flex items-center justify-center">
            <Image src={Me} width={200} height={400} alt="Joel Taylor"></Image>
          </div>

          <div className="max-w-[400px] text-center sm:text-left">
            <h1 className="text-6xl font-bold">{t("title")}</h1>
            <p>{t("description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
