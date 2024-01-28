import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "@/../../public/me.jpg";

const PostPreview = ({ post }) => {
  return (
    <div className="bg-black text-white flex flex-col justify-between h-full p-4 rounded-lg">
      <div>
        <Image
          src={post.cover}
          width={300}
          height={200}
          className="object-cover w-full h-[150px] rounded-sm"
        ></Image>
        <div className="flex items-center gap-3 mt-2">
          <Image
            src={Me}
            width={35}
            height={35}
            className="rounded-full"
          ></Image>
          <div className="flex flex-col text-xs">
            <p className="font-bold">Joel Taylor</p>
            <time>{post.date}</time>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-2">{post.title}</h2>
        <p className="text-sm">{post.description}</p>
      </div>
      <Link
        href="/a"
        className="bg-white rounded w-fit text-black px-2 py-0.5 mt-3 text-sm"
      >
        Read more
      </Link>
    </div>
  );
};

export default PostPreview;
