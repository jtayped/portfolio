import React from "react";
import Link from "next/link";
import { work } from "@/constants/portfolio";
import PortfolioPiece from "./PortfolioPiece";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <div className="text-center max-w-[500px] flex flex-col items-center">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">Portfolio</h2>
                <Link href="https://github.com/jtayped">
                  <BsGithub size={28} />
                </Link>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus iste incidunt nulla accusamus omnis voluptates ad
                officia fuga nobis id, modi excepturi. Inventore accusantium
                voluptatem commodi illum laudantium odio ducimus?
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <PortfolioPiece piece={work[2]} />
              <div className="grid grid-rows-2 gap-3">
                <PortfolioPiece piece={work[0]} />
                <PortfolioPiece piece={work[3]} />
              </div>
            </div>
            <PortfolioPiece piece={work[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
