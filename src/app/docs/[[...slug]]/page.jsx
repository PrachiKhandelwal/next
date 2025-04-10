import React from "react";

const Docs = async ({ params }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return `Visiting concept ${slug[1]} for feature ${slug[0]}`;
  } else if (slug?.length === 1) return `Visiting feature ${slug[0]}`;
  return "Docs";
};
//to keep slug optional we can wrap filename [...slug] into one more square bracket
export default Docs;
