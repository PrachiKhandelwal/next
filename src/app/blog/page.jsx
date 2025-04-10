import React from "react";

const Blog = async () => {
  //to demonstrate loading UI
  await new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise resolved");
    }, 5000);
  });
  return <div>Blog page</div>;
};

export default Blog;
