import React from "react";
import { PostPreview } from "./previews";

const generateOrderedPosts = (posts, numColumns) => {
  return posts.reduce((acc, post, index) => {
    const columnIndex = index % numColumns;
    acc[columnIndex] = [...(acc[columnIndex] || []), post];
    return acc;
  }, []);
};

const Posts = ({ posts }) => {
  // Define the number of columns for large screens
  const numColumnsLarge = 3;
  const orderedPostsLarge = generateOrderedPosts(posts, numColumnsLarge);
  const numColumnsMedium = 2;
  const orderedPostsMedium = generateOrderedPosts(posts, numColumnsMedium);

  return (
    <ol className="">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:hidden">
        {orderedPostsMedium.map((columnPosts, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {columnPosts.map((post, i) => (
              <li key={i}>
                <PostPreview post={post} />
              </li>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {orderedPostsLarge.map((columnPosts, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {columnPosts.map((post, i) => (
              <li key={i}>
                <PostPreview post={post} />
              </li>
            ))}
          </div>
        ))}
      </div>
    </ol>
  );
};

export default Posts;
