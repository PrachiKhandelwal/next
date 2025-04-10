"use client";

import React, { use } from "react";

const Article = ({ params, searchParams }) => {
  const articleId = use(params).articleId;
  const language = use(searchParams).lang || "en";

  return (
    <h3>
      Article {articleId} in {language} language
    </h3>
  );
};

export default Article;
