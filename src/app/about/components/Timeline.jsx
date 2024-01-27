import React from "react";
import { events } from "@/constants/timeline";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className="text-black px-8 py-10 flex items-center justify-center">
      <div className="w-[900px] flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Timeline</h2>
        </div>
        <ol class="relative border-s border-black">
          {events.map((event, i) => (
            <li key={i} class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5"></div>
              <div
                className={`${event.image ? "grid grid-cols-2 gap-10" : null}`}
              >
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
                    className="h-[200px] w-full object-cover rounded"
                  ></Image>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
