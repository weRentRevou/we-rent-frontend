import ImageCard from "@/_components/imageCard/imageCard";
import ReviewItem from "@/_components/review/ReviewItem";
import Details from "@/_containers/detail-page/Details";
import OverallReviews from "@/_containers/detail-page/OverallReviews";
import ProductDetail from "@/_containers/detail-page/ProductDetail";
import SizeGuide from "@/_containers/detail-page/SizeGuide";

export default function Home() {
  return (
    <div className="min-h-screen h-[5000px] relative">
      <ImageCard />
      <div className="px-5 pt-4.5">
        <section>
          <Details />
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
    </div>
  );
}
