"use client";

import React, { useState, useEffect } from "react";
import { work } from "@/constants/portfolio";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const DRAG_BUFFER = 25;
const AUTO_DELAY = 5000;

const ImageComponent = ({ piece }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setClicked(false);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <motion.div
      style={{ "--image-url": `url(${piece.image})` }}
      className="bg-[image:var(--image-url)] bg-cover h-[130px] w-[225px] shrink-0 bg-neutral-900"
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      draggable="false"
      onClick={() => setClicked(true)}
    >
      <div className="relative w-full h-full">
        <a
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          href={piece.href}
          aria-label={`Visit the ${piece.name} website`}
          className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg text-sm md:text-lg transition-colors hover:bg-white/90"
        >
          <LuExternalLink />
        </a>
      </div>
    </motion.div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-3 flex items-center w-full justify-center gap-2">
      {work.map((_, i) => (
        <button
          key={i}
          onClick={() => setImgIndex(i)}
          className={`h-1.5 w-10 rounded-full duration-100 transition-colors ${
            i === imgIndex ? "bg-black" : "bg-black/25 hover:bg-black/40"
          }`}
          aria-label={`View the ${work[imgIndex].name} website preview`}
        />
      ))}
    </div>
  );
};

const MockupViewer = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0);
    }
  });

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(true);

    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < work.length - 1) {
      setIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setIndex((pv) => pv - 1);
    }
  };

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setIndex((pv) => {
          if (pv === work.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragXProgress]);

  return (
    <div className="flex flex-col">
      <div style={{ overflow: "hidden" }}>
        <div className="relative mx-auto overflow-hidden border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[149px] w-[241px]">
          <div className="rounded-lg h-[130px] bg-black/50">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragX }}
              animate={{
                translateX: `-${imgIndex * 100}%`,
              }}
              transition={{ stiffness: 0.75, duration: 0.25 }}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              className="flex items-center h-full cursor-grab active:cursor-grabbing"
            >
              {work.map((piece, i) => (
                <ImageComponent key={i} piece={piece} />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] w-[261px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] bg-gray-800"></div>
        </div>
      </div>
      <Dots imgIndex={imgIndex} setImgIndex={setIndex} />
    </div>
  );
};

export default MockupViewer;
