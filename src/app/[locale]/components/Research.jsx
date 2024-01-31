import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillFileTextFill } from "react-icons/bs";
import SEOImage from "@/../public/research/seo.jpg";
import { useTranslations } from "next-intl";

const Research = () => {
  const t = useTranslations("researchProject");

  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
          <div>
            <p className="bg-black text-xs text-white w-fit px-1 py-0.5 rounded">
              {t("tag")}
            </p>
            <h2 className="text-3xl font-bold">{t("title")}</h2>
            <p>{t("description")}</p>
            <Link
              href="/research"
              className="flex items-center gap-2 border border-black text-black w-fit px-2 py-1 rounded mt-2 text-sm hover:bg-black/5 transition-colors"
            >
              <BsFillFileTextFill />
              {t("button")}
            </Link>
          </div>
          <div>
            <Image
              src={SEOImage}
              width={400}
              height={200}
              className="shadow rounded"
              alt="Scrabble pieces spelling SEO"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
