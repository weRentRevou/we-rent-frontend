import Link from "next/link";
import HorizontalDivider from "../../_components/dividers/HorizontalDivider";
import Stars from "../../_components/stars/Stars";
import Image from "next/image";

export default function Details({
  name,
  totalReview,
  size,
  averageRating,
  designer_photo,
}: {
  name: string;
  totalReview: number;
  size: string;
  averageRating: number;
  designer_photo: string;
}) {
  return (
    <div>
      <h1 className="w-2/3 text-lg font-semibold capitalize leading-4.5">
        {name}
      </h1>
      <div className="flex items-center gap-2 mt-4.5">
        <Stars rating={Math.floor(averageRating)} size="text-lg" />
        <span className="text-xxs text-gray">{totalReview} REVIEWS</span>
      </div>
      <div className="flex justify-between items-center mt-6 text-xxs">
        <span className="uppercase">{size}</span>
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
        <div className="w-full h-16 bg-gray text-light-gray relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-5 text-black text-2xl font-medium">
            {" "}
            n artelier
          </span>
          <Image
            src={designer_photo}
            alt="Designer Photo"
            width={353}
            height={62}
            priority
            className="w-full h-full object-cover object-[100%_17%]"
          />
        </div>
      </div>
      <HorizontalDivider className="mt-6 mb-4" height="h-0.5" />
    </div>
  );
}
