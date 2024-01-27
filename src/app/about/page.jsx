import React from "react";
import { Hero, Skills, Timeline, FLL } from "./components";

const page = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-[25px] sm:gap-[100px] sm:mb-14">
        <Skills />
        <FLL />
        <Timeline />
      </div>
      <div className="mt-[1000px]"></div>
    </main>
  );
};

export default page;
