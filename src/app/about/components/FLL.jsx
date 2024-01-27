import React from "react";
import Link from "next/link";
import Image from "next/image";
import FLLIcon from "@/@/../../public/icons/fll.png";
import Team from "@/@/../../public/fll/team-1.jpg";

const FLL = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-8 sm:gap-4 sm:grid sm:grid-cols-2">
        <div className="grid grid-rows-2 h-[200px] gap-4">
          <Image
            src={Team}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          ></Image>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Team}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            ></Image>
            <div className="grid grid-rows-2 gap-4">
              <Image
                src={Team}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              ></Image>
              <Image
                src={Team}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              ></Image>
            </div>
          </div>
        </div>
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
            className="border border-black text-black px-2 rounded w-fit gap-2 flex items-center mt-3"
          >
            <Image
              src={FLLIcon}
              width={40}
              height={40}
              className="invert"
            ></Image>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FLL;
