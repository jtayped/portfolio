import React from "react";
import { Link } from "@/navigation";
import { BsGithub } from "react-icons/bs";
import { MockupViewer } from ".";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("Index.portfolio");

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center">
      <a className="absolute -top-[100px] sm:-top-[250px]" id="portfolio"></a>
      <div className="w-[900px]">
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 sm:gap-0">
          <MockupViewer />
          <div className="flex justify-center">
            <div className="max-w-[750px] flex flex-col">
              <h2 className="text-3xl font-bold">{t("title")}</h2>
              <p className="mt-2">{t("description")}</p>
              <Link
                href="https://github.com/jtayped"
                className="flex gap-3 items-center px-3 py-2 rounded border border-black text-black w-fit mt-3 hover:bg-black/5 transition-colors"
              >
                <BsGithub size={18} />
                <p className="text-sm">{t("button")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
