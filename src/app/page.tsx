import ImageCard from "@/_components/imageCard/imageCard";
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
      </div>
    </div>
  );
}
