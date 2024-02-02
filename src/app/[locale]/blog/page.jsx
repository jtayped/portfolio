"use client";

import React, { useState, useEffect } from "react";
import { Posts, Search } from "./components";
import PostsData from "./posts";

const Page = () => {
  const [posts, setPosts] = useState(PostsData.posts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Update filteredPosts whenever searchQuery or posts change
    const filtered = PostsData.posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query.toLowerCase());
      const keywordMatch = post.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase())
      );
      return titleMatch || keywordMatch;
    });
    setPosts(filtered);
  }, [query]);

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[100px] sm:mt-[200px]">
      <main className="max-w-[900px] flex items-center justify-center">
        <div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Check out my blog!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              debitis. Eius expedita illum vel similique cupiditate accusamus,
              voluptates magnam enim dolor commodi, asperiores, sint fuga
              tenetur dolorum perferendis quo possimus!
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-10">
            <Search setQuery={setQuery} />
            <Posts posts={posts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
