import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "@/../../public/me.jpg";
import { convertToUrl } from "../../functions";

const PostPreview = ({ post }) => {
  return (
    <div className="bg-black text-white flex flex-col justify-between h-full p-4 rounded-lg">
      <div>
        <Link href={`blog/${convertToUrl(post.title)}`}>
          <Image
            src={post.cover}
            width={300}
            height={200}
            alt="Post cover"
            className="object-cover w-full h-[150px] rounded-sm"
          ></Image>
        </Link>

        <div className="flex items-center gap-3 mt-2">
          <Link href="/about">
            <Image
              src={Me}
              width={35}
              height={35}
              alt="Joel Taylor"
              className="rounded-full"
            ></Image>
          </Link>
          <div className="flex flex-col text-xs select-none">
            <Link href="/about" className="font-bold hover:underline">
              Joel Taylor
            </Link>
            <time>{post.date}</time>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-2 leading-snug">{post.title}</h2>
        <p className="text-sm mt-1">{post.description}</p>
      </div>
      <Link
        href={`blog/${convertToUrl(post.title)}`}
        className="bg-white rounded w-fit text-black px-2 py-0.5 mt-3 text-sm"
      >
        Read more
      </Link>
    </div>
  );
};

export default PostPreview;
