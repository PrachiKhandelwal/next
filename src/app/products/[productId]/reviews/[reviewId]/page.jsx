import { notFound, redirect } from "next/navigation";

const ReviewDetail = async ({ params }) => {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    //nextjs uses the most specific not found page
    // notFound();
    redirect("/products");
  }

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetail;
