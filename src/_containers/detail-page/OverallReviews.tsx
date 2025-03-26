import ProgressBar from "@/_components/bars/ProgressBar";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import Stars from "@/_components/stars/Stars";
import Link from "next/link";
import { Suspense } from "react";
import { OverallReviewsSkeleton } from "@/_components/loadings/OverallReviewsLoading";

interface ProductReviewData {
  average_rating : number;
  fitscale : {small : number, true_to_size : number, large : number};
}

export default function OverallReviews({ reviewData }: { reviewData: ProductReviewData }) {
  return (
    <Suspense fallback={<OverallReviewsSkeleton />}>
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold">REVIEWS (7)</h3>
        <Link
          href="/1/reviews"
          className="text-accent text-sm font-semibold underline"
        >
          View More &gt;
        </Link>
      </div>
      <Stars rating={reviewData.average_rating} size="text-sm" gap="gap-1.5" />
      <div className="mt-4 flex flex-col gap-2 w-full">
        <ProgressBar label="Small" value={reviewData.fitscale.small} />
        <ProgressBar label="True To Size" value={reviewData.fitscale.true_to_size} />
        <ProgressBar label="Large" value={reviewData.fitscale.large} />
      </div>
      <div className="px-5">
        <HorizontalDivider className="mt-4" />
      </div>
    </div>
    </Suspense>
  );
}
