"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const ErrorBoundary = ({ error, reset }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div>Error in review id {error.message}</div>
      <button
        //works only for client side components onClick={()=>reset()}
        onClick={reload}
      >
        Retry
      </button>
    </>
  );
};

export default ErrorBoundary;
