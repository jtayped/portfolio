import React from "react";
import { events } from "@/constants/timeline";
import Image from "next/image";
import Link from "next/link";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const birthYear = 2006;
const birthMonth = 8;
const birthDay = 3;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1

// Calculate age considering birth month and day
const age =
  currentMonth > birthMonth ||
  (currentMonth === birthMonth && currentDate.getDate() >= birthDay)
    ? currentYear - birthYear
    : currentYear - birthYear - 1;

const currentMonthYear = `${
  months[new Date().getMonth()]
} ${new Date().getFullYear()}`;

const Timeline = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">My Story</h2>
        </div>
        <ol class="relative border-s border-black max-w-[600px]">
          {events.map((event, i) => (
            <li key={i} class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5"></div>
              <div>
                <div>
                  <div className="flex items-center mb-1 text-sm leading-none text-black/80 gap-2">
                    <time>{event.year}</time>
                    <p className="font-bold">({event.age} y.o.)</p>
                  </div>

                  <h3 class="text-lg font-semibold">{event.name}</h3>
                  <p class="mb-4 text-base">{event.description}</p>
                </div>
                {event.image ? (
                  <Image
                    src={event.image}
                    height={200}
                    width={400}
                    className="h-[160px] max-w-[350px] object-cover rounded"
                  ></Image>
                ) : null}
              </div>
            </li>
          ))}
          <li class="mb-4 ms-4">
            <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5"></div>
            <div>
              <div>
                <div className="flex items-center mb-1 text-sm leading-none text-black/80 gap-2">
                  <time>{currentMonthYear}</time>
                  <p className="font-bold">({age} y.o.)</p>
                </div>

                <h3 class="text-lg font-semibold">Today</h3>
                <p class="text-base mb-1">
                  Today, I stand as a passionate web developer, ready to turn
                  your digital dreams into reality. From building my first
                  computer at 13 to thriving as a freelancer on Fiverr, my
                  journey embodies a commitment to innovation and continuous
                  learning.
                </p>
                <p className="text-base mb-3">
                  Let's collaborate, innovate, and bring your digital
                  aspirations to life. Today is not just another day; it's an
                  opportunity to create something extraordinary. Let's make it
                  happen together.
                </p>
                <Link
                  href="/#contact"
                  className="px-2 py-1 bg-black text-yellow rounded"
                >
                  Take action!
                </Link>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
