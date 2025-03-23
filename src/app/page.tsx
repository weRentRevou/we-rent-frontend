import Details from "@/_components/details/details";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import ImageCard from "@/_components/imageCard/imageCard";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ImageCard />
      <Details />
      <HorizontalDivider className="my-6" height="h-0.5" />
    </div>
  );
}
