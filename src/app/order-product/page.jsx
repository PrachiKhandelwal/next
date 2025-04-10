"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Order = () => {
  const router = useRouter();
  const handleConfirm = () => {
    // router.push("/");
    router.replace("/");
  };
  return (
    <>
      <div>Order page</div>
      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
};

export default Order;
