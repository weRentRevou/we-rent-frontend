import OverallReviews from "@/_containers/review-page/OverallReview";
import ReviewSection from "@/_containers/review-page/ReviewSection";
import { fetchReviewProduct } from "@/services/api";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = Number((await params).productId);
  const review = await fetchReviewProduct(productId);

  return (
    <main className="min-h-screen pb-5">
      <OverallReviews />
      <ReviewSection productId={productId} reviews={review.reviews} />
    </main>
  );
}
