import ProgressBar from "@/_components/bars/ProgressBar";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import Stars from "@/_components/stars/Stars";
import Link from "next/link";

export default function OverallReviews() {
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
      <Stars rating={4} size="text-sm" gap="gap-1.5" />
      <div className="mt-4 flex flex-col gap-2 w-full">
        <ProgressBar label="Small" value={2} />
        <ProgressBar label="True To Size" value={100} />
        <ProgressBar label="Large" value={70} />
      </div>
      <div className="px-5">
        <HorizontalDivider className="mt-4" />
      </div>
    </div>
  );
}
