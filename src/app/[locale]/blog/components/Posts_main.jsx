"use client";

import React, { useState, useEffect } from "react";
import { Search, Posts } from ".";
import PostsData from "../posts";

const Posts_main = () => {
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
    <div className="flex flex-col gap-6 mt-10">
      <Search setQuery={setQuery} />
      <Posts posts={posts} />
    </div>
  );
};

export default Posts_main;
