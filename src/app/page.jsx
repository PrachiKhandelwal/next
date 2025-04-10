import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div>home page</div>
      <Link href="/blog">Blog</Link><br />
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
};

export default Home;
