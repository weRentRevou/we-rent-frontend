import Link from "next/link";
import HorizontalDivider from "../../_components/dividers/HorizontalDivider";
import Stars from "../../_components/stars/Stars";

export default function Details({ name }: { name: string }) {
  return (
    <div>
      <h1 className="w-2/3 text-lg font-semibold capitalize leading-4.5">
        {name}
      </h1>
      <div className="flex items-center gap-2 mt-4.5">
        <Stars rating={4} size="text-lg" />
        <span className="text-xxs text-gray">7 REVIEWS</span>
      </div>
      <div className="flex justify-between items-center mt-6 text-xxs">
        <span>M</span>
        <Link href="*" className="text-black uppercase">
          VIEW SIZE GUIDE
        </Link>
      </div>
      <HorizontalDivider className="my-2" />
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase">DESIGNERS</h2>
        <Link href="*" className="text-black text-xxs uppercase">
          VIEW THE COLLECTION
        </Link>
      </div>
      <div className="mt-2">
        <div className="w-full h-16 bg-gray-100 text-light-gray"></div>
      </div>
      <HorizontalDivider className="mt-6 mb-4" height="h-0.5" />
    </div>
  );
}
