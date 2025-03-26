import Image from "next/image";
import ReviewStar from "../stars/ReviewStar";
import ThumbsUpIcon from "@/../public/icons/thumbs-up.svg";

export default function ReviewItemLoading() {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-3">
          <div className="bg-light-gray size-[30px] rounded-full animate-pulse"></div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <ReviewStar key={index} />
              ))}
            </div>
            <div className="bg-light-gray h-2.5 w-24 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button>
            <Image src={ThumbsUpIcon} width={24} height={24} alt="Thumbs Up" />
          </button>
          <span className="text-xs">(0)</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full h-3 bg-light-gray rounded animate-pulse"></div>
        <div className="w-full h-3 bg-light-gray rounded animate-pulse mt-2"></div>
        <div className="w-full h-3 bg-light-gray rounded animate-pulse mt-2"></div>
        <div className="w-1/3 h-3 bg-light-gray rounded animate-pulse mt-2"></div>
      </div>
      <div></div>
      <p className="text-gray font-medium text-xxs mt-1"></p>
    </div>
  );
}
