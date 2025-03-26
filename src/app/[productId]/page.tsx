import ImageCard from "@/_components/imageCard/imageCard";
import ReviewItemLoading from "@/_components/loadings/ReviewItemLoading";
import ReviewItem from "@/_components/review/ReviewItem";
import Details from "@/_containers/detail-page/Details";
import OverallReviews from "@/_containers/detail-page/OverallReviews";
import ProductDetail from "@/_containers/detail-page/ProductDetail";
import SizeGuide from "@/_containers/detail-page/SizeGuide";
import { fetchProductById, fetchReviewProduct } from "@/services/api";
import { Suspense } from "react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = Number((await params).productId);

  const [product, review] = await Promise.all([
    fetchProductById(productId),
    fetchReviewProduct(productId),
  ]);
  // For debugging
  console.log(review);

  return (
    <main className="min-h-screen pb-32 relative">
      <ImageCard />
      <div className="px-5 pt-4.5">
        <section>
          <Details name={product.name} />
        </section>
        <section>
          <ProductDetail />
          <SizeGuide />
        </section>
        <section>
          <OverallReviews />
        </section>
        <section className="mt-4">
          <Suspense fallback={<ReviewItemLoading />}>
            <ReviewItem {...review.reviews[0]} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
