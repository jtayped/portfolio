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

  // Create a new array with the desired order of posts for large screens
  const orderedPostsLarge = generateOrderedPosts(posts, numColumnsLarge);

  // Define the number of columns for medium screens
  const numColumnsMedium = 2;

  // Create a new array with the desired order of posts for medium screens
  const orderedPostsMedium = generateOrderedPosts(posts, numColumnsMedium);

  return (
    <ol className="">
      {/* For medium screens, display 2 columns */}
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

      {/* For large screens, display 3 columns */}
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
