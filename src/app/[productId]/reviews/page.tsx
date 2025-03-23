import OverallReviews from "@/_containers/review-page/OverallReview";
import ReviewList from "@/_containers/review-page/ReviewList";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pb-5">
      <OverallReviews />
      <ReviewList />
    </main>
  );
}
