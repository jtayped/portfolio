import React from "react";
import Link from "next/link";
import Image from "next/image";
import FLLIcon from "@/@/../../public/icons/fll.png";
import Team from "@/@/../../public/fll/torremolinos-teams.png";

const FLL = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-8 sm:gap-4 sm:grid sm:grid-cols-2">
        <Image
          src={Team}
          width={700}
          height={700}
          className="object-cover max-w-[400px] aspect-square rounded"
        ></Image>
        <div>
          <h2 className="text-3xl font-bold">First Lego League</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
            sint quidem exercitationem? Explicabo voluptate nesciunt quas
            voluptatibus soluta molestias voluptatum suscipit! Possimus culpa,
            consequuntur consequatur cumque quas officiis molestiae voluptatibus
            incidunt expedita at veritatis excepturi non modi iusto sapiente!
          </p>
          <Link
            href="https://www.firstlegoleague.org/"
            className="border border-black text-black px-2 rounded w-fit gap-2 flex items-center mt-3 group hover:text-white hover:bg-black transition-colors duration-[25ms]"
          >
            <Image
              src={FLLIcon}
              width={35}
              height={35}
              className="group-hover:invert-0 invert transition-all duration-[25ms]"
            ></Image>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FLL;
