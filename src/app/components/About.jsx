import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/about/me.png";
import { BsFillPersonFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="max-w-[400px]">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, illum! Assumenda temporibus labore alias optio quod
              quis deserunt expedita quos quo tenetur, facere quasi similique
              harum aspernatur beatae sit et?
            </p>
            <Link
              href="/about"
              className="flex gap-3 items-center px-2 py-1.5 mt-3 w-fit rounded border border-black text-black hover:bg-black hover:text-white transition-colors duration-[25ms]"
            >
              <BsFillPersonFill size={18} />
              <p className="text-sm">Read more</p>
            </Link>
          </div>
          <Image
            src={Me}
            width={500}
            alt="Joel Taylor"
            className="sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
