import React from "react";
import { Hero } from "./components";

const page = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-[25px] sm:gap-[100px] sm:mb-14"></div>
    </main>
  );
};

export default page;
