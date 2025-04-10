"use client";
//since we want to use a hook, we need to make this file a client component

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const reviewId = pathname.split("/")[4];
  return <div>Review {reviewId} Not Found!!!</div>;
};

export default NotFound;
