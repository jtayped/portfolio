import React from "react";
import { PostPreview } from "./previews";

const Posts = ({ posts }) => {
  const numColumns = 3;
  // Create a new array with the desired order of posts
  const orderedPosts = posts.reduce((acc, post, index) => {
    const columnIndex = index % numColumns;
    acc[columnIndex] = [...(acc[columnIndex] || []), post];
    return acc;
  }, []);

  // Create an array of columns, each containing a slice of ordered posts
  const columns = orderedPosts.map((columnPosts, columnIndex) => (
    <div key={columnIndex} className="flex flex-col gap-4">
      {columnPosts.map((post, i) => (
        <li key={i}>
          <PostPreview post={post} />
        </li>
      ))}
    </div>
  ));

  return <ol className="grid grid-cols-3 gap-3">{columns}</ol>;
};

export default Posts;
