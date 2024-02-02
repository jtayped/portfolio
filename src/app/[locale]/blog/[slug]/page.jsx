"use client";

import React, { useEffect, useState } from "react";
import Posts from "../posts.json";
import { convertToUrl } from "../functions";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/me.jpg";

const Page = ({ params }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const parseMDX = async (string) => {
      const html = await unified()
        .use(remarkParse) // Convert into markdown AST
        .use(remarkRehype) // Transform to HTML AST
        .use(rehypeSanitize) // Sanitize HTML input
        .use(rehypeStringify) // Convert AST into serialized HTML
        .process(string);
      return html.value;
    };

    const fetchPostContent = async (path) => {
      try {
        const response = await fetch(path);
        const content = await response.text();
        const htmlContent = await parseMDX(content);
        setPost({ ...matchingPost, htmlContent });

        // Dynamically update metadata for the current post
        document.title = matchingPost.title; // Update the title

        // Update meta tags
        const descriptionMetaTag = document.querySelector(
          'meta[name="description"]'
        );
        descriptionMetaTag.content = matchingPost.description;
        const keywords = document.querySelector('meta[name="keywords"]');
        keywords.content = matchingPost.keywords;
      } catch (error) {
        console.error("Error fetching or processing MDX file:", error);
        notFound();
      }
    };

    const slug = params.slug;
    const matchingPost = Posts.posts.find(
      (post) => convertToUrl(post.title) === slug
    );

    if (matchingPost) {
      fetchPostContent(matchingPost.path);
    } else {
      notFound();
    }
  }, [params.slug]);

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[75px] sm:mt-[100px]">
      <main className="flex items-center justify-center">
        {post && (
          <div className="flex flex-col gap-4 max-w-prose">
            <Image
              src={post.cover}
              width={900}
              height={350}
              alt="Post cover"
              className="w-full h-[200px] md:h-[350px] object-cover"
            ></Image>
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
            <article className="prose prose-zinc max-w-prose mx-auto prose-pre:bg-slate-300 prose-code:text-black prose-pre:border prose-pre:shadow">
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                {post.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
            </article>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
