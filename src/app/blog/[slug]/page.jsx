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
    <div>
      {post && <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />}
    </div>
  );
};

export default Page;
