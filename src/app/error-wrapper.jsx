"use client";

import { useState } from "react";

const ErrorSimulator = ({ message = "An error occured" }) => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error(message);
  }
  return (
    <>
      <button onClick={() => setError(true)}>Simulate an error</button>
    </>
  );
};

const ErrorWrapper = ({ children }) => {
  return (
    <div>
      <ErrorSimulator message="simulated error in root layout"/>
      {children}
    </div>
  );
};

export default ErrorWrapper;
