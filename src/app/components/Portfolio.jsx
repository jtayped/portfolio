import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MockupViewer } from ".";

const Portfolio = () => {
  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center">
      <a className="absolute -top-[100px] sm:-top-[250px]" id="portfolio"></a>
      <div className="w-[900px]">
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 sm:gap-0">
          <MockupViewer />
          <div className="flex justify-center">
            <div className="max-w-[750px] flex flex-col">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">Portfolio</h2>
                <Link href="https://github.com/jtayped">
                  <BsGithub size={28} />
                </Link>
              </div>
              <p className="mt-2">
                Dive into my portfolio showcasing a spectrum of impactful
                projects, demonstrating expertise in web development and beyond.
                For an in-depth look at the code, visit{" "}
                <Link href="https://github.com/jtayped" className="underline">
                  my GitHub
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
