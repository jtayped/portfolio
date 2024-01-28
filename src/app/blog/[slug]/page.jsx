"use client";
import React, { useEffect, useState } from "react";
import Posts from "../posts.json";
import { convertToUrl } from "../functions";

const page = ({ params }) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const slug = params.slug;

    // Find the post that matches the URL
    const matchingPost = Posts.posts.find(
      (post) => convertToUrl(post.title) === slug
    );
    
    
  }, [params.slug]);
  return <div>BlogPost</div>;
};

export default page;
