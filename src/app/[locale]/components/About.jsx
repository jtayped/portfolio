import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Me from "@/../public/about/me.png";
import { BsFillPersonFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Index.about");

  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="max-w-[450px]">
            <h2 className="text-3xl font-bold">{t("title")}</h2>
            <p>{t("description")}</p>
            <Link
              href="/about"
              className="flex gap-3 items-center px-3 py-2 mt-3 w-fit rounded bg-black text-white hover:bg-black/90 shadow"
            >
              <BsFillPersonFill size={18} />
              <p className="text-sm">{t("button")}</p>
            </Link>
          </div>
          <Image
            src={Me}
            width={300}
            alt="Joel Taylor"
            className="sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
