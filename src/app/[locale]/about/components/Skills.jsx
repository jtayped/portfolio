import React from "react";
import { skills1 } from "@/constants/skills";
import { BsGithub } from "react-icons/bs";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import SkillIcon from "./SkillIcon";

const SkillGroup = ({ nameKey, children }) => {
  const t = useTranslations("About.skills");

  return (
    <div className="w-full h-full bg-white/80 shadow rounded-lg p-4 sm:p-5">
      <h3 className="md:text-lg font-bold mb-2">{t(nameKey)}</h3>
      {children}
    </div>
  );
};

const Skills = () => {
  const t = useTranslations("About.skills");

  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-8 sm:gap-4 sm:grid sm:grid-cols-2">
        <div className="max-w-[400px]">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p>{t("description")}</p>
          <Link
            href="https://github.com/jtayped"
            className="flex gap-3 items-center px-3 py-2 rounded bg-black w-fit text-white mt-2 hover:bg-black/90 transition-colors"
          >
            <BsGithub size={18} />
            <p className="text-sm">{t("button")}</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-rows-2 gap-5">
            <SkillGroup nameKey={skills1[1].nameKey}>
              <ul className="flex flex-row flex-wrap md:justify-center gap-4">
                {skills1[1].icons.map((skill) => (
                  <li key={skill.name}>
                    <SkillIcon skill={skill} />
                  </li>
                ))}
              </ul>
            </SkillGroup>
            <SkillGroup nameKey={skills1[2].nameKey}>
              <ul className="flex flex-row flex-wrap md:justify-center gap-4">
                {skills1[2].icons.map((skill) => (
                  <li key={skill.name}>
                    <SkillIcon skill={skill} />
                  </li>
                ))}
              </ul>
            </SkillGroup>
          </div>
          <SkillGroup nameKey={skills1[0].nameKey}>
            <ul className="grid gap-1.5">
              {skills1[0].icons.map((skill) => (
                <li key={skill.name} className="flex items-center gap-4">
                  {skill.icon}
                  <p className="text-sm sm:text-md">{skill.name}</p>
                </li>
              ))}
            </ul>
          </SkillGroup>
        </div>
      </div>
    </div>
  );
};

export default Skills;
