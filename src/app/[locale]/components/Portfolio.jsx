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
              <h2 className="text-3xl font-bold">Portfolio</h2>
              <p className="mt-2">
                Dive into my portfolio showcasing a spectrum of impactful
                projects, demonstrating expertise in web development and beyond.
                For an in-depth look at the code, visit my GitHub.
              </p>
              <Link
                href="https://github.com/jtayped"
                className="flex gap-3 items-center px-2 py-1 rounded border border-black text-black w-fit mt-3 hover:bg-black/5 transition-colors"
              >
                <BsGithub size={18} />
                <p className="text-sm">GitHub</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
