import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillFileTextFill } from "react-icons/bs";
import SEOImage from "@/../public/research/seo.jpg";

const Research = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={SEOImage}
              width={400}
              height={200}
              className="shadow rounded"
            ></Image>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              Check out my Research Project!
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus mollitia facilis assumenda earum voluptatibus porro ad
              repellendus illo voluptates aspernatur. Sed eveniet perferendis
              excepturi quae quidem. Fuga earum iusto minima.
            </p>
            <Link
              href="/research"
              className="flex items-center gap-2 border border-black text-black w-fit px-2 py-1 rounded mt-2 text-sm hover:bg-black hover:text-white transition-colors duration-[25ms]"
            >
              <BsFillFileTextFill />
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
