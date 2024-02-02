import React from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import FLLIcon from "@/@/../../public/icons/fll.png";
import Team from "@/@/../../public/fll/torremolinos-teams.png";
import { useTranslations } from "next-intl";

const FLL = () => {
  const t = useTranslations("About.fll");

  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-8 sm:gap-4 sm:grid sm:grid-cols-2">
        <Image
          src={Team}
          width={700}
          height={700}
          alt="FLL teams in Torremolinos"
          className="object-cover sm:max-w-[400px] aspect-square rounded"
        ></Image>
        <div>
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p>{t("description")}</p>
          <Link
            href="https://www.firstlegoleague.org/"
            aria-label="Learn more about the First Lego League"
            className="border border-black text-black px-2 rounded w-fit gap-2 flex items-center mt-3 group hover:bg-black/5 transition-colors"
          >
            <Image
              src={FLLIcon}
              width={35}
              height={35}
              alt="FLL Logo"
              className="invert"
            ></Image>
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FLL;
