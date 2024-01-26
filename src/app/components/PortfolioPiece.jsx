"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioPiece = ({ piece }) => {
  return (
    <Link href={piece.href} className="relative shadow">
      <Image
        className="w-full h-full object-cover rounded shadow"
        src={piece.image}
        alt={`${piece.name} Website`}
        height={500}
        width={500}
      />
      <div className="absolute bottom-0 right-0 bg-white px-2 py-0.5 rounded-tl-sm rounded-br-sm shadow">
        <p className="text-black text-[10px] sm:text-sm">{piece.name}</p>
      </div>
    </Link>
  );
};

export default PortfolioPiece;
