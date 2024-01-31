"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { work } from "@/constants/portfolio";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { motion, useMotionValue } from "framer-motion";

const DRAG_BUFFER = 25;

const Images = () => {
  return (
    <>
      {work.map((piece, i) => (
        <div
          key={i}
          style={{ "--image-url": `url(${piece.image})` }}
          className="bg-[image:var(--image-url)] bg-cover h-[130px] w-[225px] shrink-0 bg-neutral-900"
        ></div>
      ))}
    </>
  );
};

const MockupViewer = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setIndex] = useState(0);

  const dragX = useMotionValue(0);

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

  return (
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
            transition={{ stiffness: 0.75 }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="flex items-center h-full cursor-grab active:cursor-grabbing"
          >
            <Images />
          </motion.div>
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] w-[261px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] bg-gray-800"></div>
      </div>
    </div>
  );
};

export default MockupViewer;
