import React from "react";

const getRandomInt = (upper) => {
  return Math.floor(Math.random() * upper);
};
const ProductLayout = ({ children }) => {
  const randomNum = getRandomInt(2);
  if (randomNum === 1) {
    throw new Error("error loading product");
  }
  return (
    <div>
      <h2>Featured</h2>
      {children}
    </div>
  );
};
export default ProductLayout;
