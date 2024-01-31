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
          alt="FLL teams in Torremolinos"
          className="object-cover sm:max-w-[400px] aspect-square rounded"
        ></Image>
        <div>
          <h2 className="text-3xl font-bold">First Lego League</h2>
          <p>
            The First Lego League has been a rewarding journey, fostering STEM
            learning and teamwork. As a three-time finalist in the top 50 teams
            in Spain, the experience goes beyond competition—it's about hands-on
            exploration and personal growth. Joining this community has been a
            valuable part of my journey, and I invite others to explore its
            possibilities.
          </p>
          <Link
            href="https://www.firstlegoleague.org/"
            className="border border-black text-black px-2 rounded w-fit gap-2 flex items-center mt-3 group hover:text-white hover:bg-black transition-colors duration-[25ms]"
          >
            <Image
              src={FLLIcon}
              width={35}
              height={35}
              alt="FLL Logo"
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
