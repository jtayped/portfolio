import React from "react";
import Image from "next/image";
import Me from "@/@/../../public/about/me.png";

const Hero = () => {
  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[100px] sm:mt-[200px]">
      <div className="w-[900px] flex items-center justify-center">
        <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:grid sm:grid-cols-2 items-center">
          <div className="w-full h-full flex items-center justify-center">
            <Image src={Me} width={200} height={400} alt="Joel Taylor"></Image>
          </div>

          <div className="max-w-[400px] text-center sm:text-left">
            <h1 className="text-6xl font-bold">About Me</h1>
            <p>
              I'm Joel Taylor, a 17-year-old from Catalonia, Spain, studying a
              Baccalaureate with a passion for Computer Science. Fluent in
              Spanish, Catalan, and English, I'm driven by curiosity and
              immersed in coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
