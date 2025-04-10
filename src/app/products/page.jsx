import Link from "next/link";
import React from "react";

export const metadata={
  title:"Product"
}
const ProductList = () => {
  return (
    <>
      <div>Product List</div>
      {[1,2,3,4,5].map(id=><h1 key={id}><Link href={`/products/${id}`}>{`Product ${id}`}</Link></h1>)}
      <Link href={"/"} replace>Home</Link>
    </>
  );
};

export default ProductList;
