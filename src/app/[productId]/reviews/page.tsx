import OverallReviews from "@/_containers/review-page/OverallReview";
import ReviewList from "@/_containers/review-page/ReviewList";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  console.log(productId);
  return (
    <main className="min-h-screen pb-5">
      <OverallReviews />
      <ReviewList />
    </main>
  );
}
