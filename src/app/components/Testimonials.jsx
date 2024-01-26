import React from "react";
import Image from "next/image";
import { testimonials } from "@/constants/testimonials";
import { BsFillStarFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px]">
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <h2 className="text-center text-3xl font-bold">Testimonials</h2>
          <ul className="flex flex-col md:grid md:grid-cols-3 md:items-center gap-4">
            {testimonials.map((testimonial, i) => (
              <li key={i}>
                <div className="bg-white/80 text-black p-4 rounded-lg shadow">
                  <ul className="flex items-start gap-1">
                    {Array.from({ length: testimonial.stars }).map(
                      (_, index) => (
                        <li key={index}>
                          <BsFillStarFill className="text-yellow" />
                        </li>
                      )
                    )}
                  </ul>
                  <p className="text-xl font-bold mt-2">{testimonial.title}</p>
                  <p className="text-sm">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Image
                      src={testimonial.image}
                      width={30}
                      height={30}
                      className="rounded-full bg-white"
                    ></Image>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-xs leading-tight">
                        {testimonial.from}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;