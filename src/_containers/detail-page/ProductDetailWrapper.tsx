"use client";

import ImageCard from "@/_components/imageCard/imageCard";
import Details from "./Details";
import ProductDetail from "./ProductDetail";
import SizeGuide from "./SizeGuide";
import OverallReviews from "./OverallReviews";
import ReviewItem from "@/_components/review/ReviewItem";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/services/api";

export default function ProductDetailWrapper({
  productId,
}: {
  productId: number;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
  });

  // liat data untuk debugging
  console.log(data);

  // pake isLoading buat gantiin suspense
  // contoh nya seperti ini. Bisa diterapkan di komponen masing-masing
  if (isLoading) return <div>Loading...</div>;

  // pake error kalau gagal fetch untuk nampilin error ui

  return (
    <main className="min-h-screen pb-32 relative">
      <ImageCard />
      <div className="px-5 pt-4.5">
        <section>
          <Details name={data.data.name} />
        </section>
        <section>
          <ProductDetail />
          <SizeGuide />
        </section>
        <section>
          <OverallReviews />
        </section>
        <section className="mt-4">
          <ReviewItem
            review="This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it's incredibly versatile. I've worn it to brunch with friends, to the beach as a cover-up, and even to a formal dinner with the right accessories. It's so comfortable and easy to style. I can't recommend it enough! ps. btw im using my"
            rating={5}
            weight="70"
            height="170"
            fit="80"
            date="Nov 26, 2025"
            profileImage=""
            id={1}
            likes={5}
            images={null}
          />
        </section>
      </div>
    </main>
  );
}
