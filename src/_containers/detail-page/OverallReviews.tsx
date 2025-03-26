import ProgressBar from "@/_components/bars/ProgressBar";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import Stars from "@/_components/stars/Stars";
import { Review } from "@/types/types";
import Link from "next/link";

interface ProductReviewData {
  average_rating: number;
  fit_scale: { small: number; true_to_size: number; large: number };
  reviews: Review[];
}

export default function OverallReviews({
  reviewData,
}: {
  reviewData: ProductReviewData;
}) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold">
          REVIEWS ({reviewData.reviews.length})
        </h3>
        <Link
          href="/1/reviews"
          className="text-accent text-sm font-semibold underline"
        >
          View More &gt;
        </Link>
      </div>
      <Stars
        rating={Math.floor(reviewData.average_rating)}
        size="text-sm"
        gap="gap-1.5"
      />
      <div className="mt-4 flex flex-col gap-2 w-full">
        <ProgressBar label="Small" value={reviewData.fit_scale.small} />
        <ProgressBar
          label="True To Size"
          value={reviewData.fit_scale.true_to_size}
        />
        <ProgressBar label="Large" value={reviewData.fit_scale.large} />
      </div>
      <div className="px-5">
        <HorizontalDivider className="mt-4" />
      </div>
    </div>
  );
}
