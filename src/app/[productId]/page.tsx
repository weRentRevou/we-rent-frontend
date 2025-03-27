import FloatButton from "@/_components/button/FloatButton";
import ImageCard from "@/_components/imageCard/imageCard";
import DetailsSkeleton from "@/_components/loadings/DetailsLoading";
import ReviewItemLoading from "@/_components/loadings/ReviewItemLoading";
import ReviewItem from "@/_components/review/ReviewItem";
import Details from "@/_containers/detail-page/Details";
import OverallReviews from "@/_containers/detail-page/OverallReviews";
import ProductDetail from "@/_containers/detail-page/ProductDetail";
import SizeGuide from "@/_containers/detail-page/SizeGuide";
import { fetchProductById, fetchReviewProduct } from "@/services/api";
import { Suspense } from "react";

export default async function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const productId = Number((await params).productId);

  const [product, review] = await Promise.all([fetchProductById(productId), fetchReviewProduct(productId)]);

  return (
    <main className="min-h-screen pb-32 relative">
      <FloatButton price={product.price} />
      <ImageCard image={product.product_image} />
      <div className="px-5 pt-4.5">
        <section>
          <Suspense fallback={<DetailsSkeleton />}>
            <Details name={product.name} totalReview={review.reviews.length} averageRating={review.average_rating} size={product.size} />
          </Suspense>
        </section>
        <section>
          <ProductDetail productInfo={product} />
          <SizeGuide productData={product} />
        </section>
        <section>
          <OverallReviews reviewData={review} />
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
