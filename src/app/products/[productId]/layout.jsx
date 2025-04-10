import React from "react";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <h2>Featured</h2>
      {children}
    </div>
  );
};
export default ProductLayout;
