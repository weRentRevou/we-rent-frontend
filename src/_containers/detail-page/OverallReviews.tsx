import ProgressBar from "@/_components/bars/ProgressBar";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import Stars from "@/_components/stars/Stars";
import Link from "next/link";
import { fetchReviewProduct } from "@/services/api";

interface ProductReviewData {
  average_rating : number;
  fitscale : {small : number, true_to_size : number, large : number};
}

async function getProductData(): Promise<ProductReviewData> {
  const data = await fetchReviewProduct(1);
  return { average_rating : data.average,
    fitscale : {
      small : data.small,
      true_to_size : data.true_to_size,
      large : data.large,
    },
  };
}

export default async function OverallReviews() {
  const data = await getProductData();
  return (
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
      <Stars rating={data.average_rating} size="text-sm" gap="gap-1.5" />
      <div className="mt-4 flex flex-col gap-2 w-full">
        <ProgressBar label="Small" value={data.fitscale.small} />
        <ProgressBar label="True To Size" value={data.fitscale.true_to_size} />
        <ProgressBar label="Large" value={data.fitscale.large} />
      </div>
      <div className="px-5">
        <HorizontalDivider className="mt-4" />
      </div>
    </div>
  );
}
