import { notFound, redirect } from "next/navigation";

const getRandomNumber = (upper) => {
  return Math.floor(Math.random() * upper);
};

const ReviewDetail = async ({ params }) => {
  const randomNum = getRandomNumber(2);
  if (randomNum === 1) {
    throw new Error("Error loading review");
  }
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
