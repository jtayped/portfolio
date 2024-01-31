import React from "react";
import { skills } from "@/constants/skills";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-8 sm:gap-4 sm:grid sm:grid-cols-2">
        <div className="max-w-[340px]">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p>
            Proficient in HTML/CSS, Python, SEO, and skilled with Tailwind CSS,
            React JS, JavaScript, and Java. My journey, from building my first
            computer to mastering diverse languages, reflects a commitment to
            continuous learning and adaptability.
          </p>
          <Link
            href="https://github.com/jtayped"
            className="flex gap-3 items-center px-3 py-1.5 rounded bg-black w-fit text-white mt-2 hover:bg-black/90 transition-colors"
          >
            <BsGithub size={18} />
            <p className="text-sm">GitHub</p>
          </Link>
        </div>

        <ol className="grid grid-cols-2 gap-2">
          {skills.map((skill, i) => (
            <li key={i}>
              <div className="flex flex-col bg-black text-yellow p-3 rounded">
                <div className="flex justify-between text-sm">
                  <p>{skill.name}</p>
                  <p className="font-bold">{skill.percentage}%</p>
                </div>
                <div class="w-full bg-yellow/40 rounded-full">
                  <div
                    className="bg-yellow h-1.5 rounded-full"
                    style={{ width: skill.percentage + "%" }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Skills;
