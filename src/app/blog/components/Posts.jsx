import React from "react";
import { PostPreview } from "./previews";

const Posts = ({ posts }) => {
  return (
    <ol className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-3">
      {posts.map((post, i) => (
        <li key={i}>
          <PostPreview post={post} />
        </li>
      ))}
    </ol>
  );
};

export default Posts;
