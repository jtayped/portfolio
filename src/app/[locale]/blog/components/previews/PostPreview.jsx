import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Me from "@/../../public/me.jpg";
import { convertToUrl } from "../../functions";

const PostPreview = ({ post }) => {
  return (
    <div className="bg-white text-black flex flex-col justify-between h-full shadow-lg">
      <div>
        <div className="relative">
          {post.tag ? (
            <p className="absolute top-0 left-0 m-4 bg-black/50 backdrop-blur text-white text-xs p-1 rounded">
              {post.tag}
            </p>
          ) : null}

          <Link href={`/blog/${convertToUrl(post.title)}`}>
            <Image
              src={post.cover}
              width={300}
              height={200}
              alt="Post cover"
              className="object-cover w-full max-h-[200px]"
            ></Image>
          </Link>
        </div>

        <div className="px-4 pt-2 mt-1">
          <div className="flex items-center gap-3">
            <Link href="/about">
              <Image
                src={Me}
                width={33}
                height={33}
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
      </div>

      <Link
        href={`/blog/${convertToUrl(post.title)}`}
        aria-label={`Read ${post.title}`}
        className="bg-black w-fit text-white px-2 py-1 text-sm hover:bg-black/90 transition-colors m-4 rounded-sm shadow"
      >
        Read more
      </Link>
    </div>
  );
};

export default PostPreview;
