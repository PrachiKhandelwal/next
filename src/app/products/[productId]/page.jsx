import React from "react";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
  };
};

const ProductDetail = async ({ params }) => {
  const productId = (await params).productId;
  return <div>Product {productId} Detail page</div>;
};

export default ProductDetail;
