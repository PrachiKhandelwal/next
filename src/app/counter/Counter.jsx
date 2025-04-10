"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      {count}
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

export default Counter;