import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const keys = [
  "firstComputer",
  "fllTenerife",
  "covid",
  "startPython",
  "fllTenerifeOnline",
  "fllTorremolinos",
  "startWebDev",
  "startFiverr",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const birthYear = 2006;
const birthMonth = 8;
const birthDay = 3;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1

// Calculate age considering birth month and day
const age =
  currentMonth > birthMonth ||
  (currentMonth === birthMonth && currentDate.getDate() >= birthDay)
    ? currentYear - birthYear
    : currentYear - birthYear - 1;

const Timeline = () => {
  const t = useTranslations("About.myStory");

  const translatedMonth = t(`months.${months[currentDate.getMonth()]}`);
  const currentMonthYear = `${translatedMonth} ${new Date().getFullYear()}`;
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">My Story</h2>
        </div>
        <ol class="relative border-s border-black max-w-[600px]">
          {keys.map((key, i) => (
            <li key={i} class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5"></div>
              <div>
                <div>
                  <div className="flex items-center mb-1 text-sm leading-none text-black/80 gap-2">
                    <time>{t(`events.${key}.year`)}</time>
                    <p className="font-bold">({t(`events.${key}.age`)} y.o.)</p>
                  </div>

                  <h3 class="text-lg font-semibold">
                    {t(`events.${key}.name`)}
                  </h3>
                  <p class="mb-4 text-base">{t(`events.${key}.description`)}</p>
                </div>
                {t(`events.${key}.image`) ? (
                  <Image
                    src={t(`events.${key}.image`)}
                    height={200}
                    width={400}
                    className="h-[160px] w-[350px] object-cover rounded"
                    alt={t(`events.${key}.name`)}
                  ></Image>
                ) : null}
              </div>
            </li>
          ))}
          <li class="mb-4 ms-4">
            <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5"></div>
            <div>
              <div>
                <div className="flex items-center mb-1 text-sm leading-none text-black/80 gap-2">
                  <time>{currentMonthYear}</time>
                  <p className="font-bold">({age} y.o.)</p>
                </div>

                <h3 class="text-lg font-semibold">{t("today.title")}</h3>
                <p class="text-base mb-1">{t("today.description.p1")}</p>
                <p className="text-base mb-4">{t("today.description.p2")}</p>
                <Link
                  href="/#contact"
                  className="p-2 px-4 rounded bg-black text-white hover:bg-black/90 text-sm"
                >
                  {t("today.button")}
                </Link>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
