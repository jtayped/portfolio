import React from "react";
import { Hero, Skills, Timeline, FLL } from "./components";

const page = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-[25px] sm:gap-[100px] sm:mb-14 sm:mt-10">
        <Skills />
        <FLL />
        <Timeline />
      </div>
    </main>
  );
};

export default page;
