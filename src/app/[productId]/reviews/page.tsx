import SummaryReviewLoading from "@/_components/loadings/SummaryReviewLoading";
import ReviewSection from "@/_containers/review-page/ReviewSection";
import { fetchReviewProduct } from "@/services/api";
import SummaryReview from "@/_containers/review-page/SummaryReview";
import { Suspense } from "react";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = Number((await params).productId);
  const review = await fetchReviewProduct(productId);

  return (
    <main className="min-h-screen pb-5">
      <Suspense fallback={<SummaryReviewLoading />}>
        <SummaryReview
          average_rating={review.average_rating}
          fit_scale={review.fit_scale}
        />
      </Suspense>
      <ReviewSection productId={productId} reviews={review.reviews} />
    </main>
  );
}
