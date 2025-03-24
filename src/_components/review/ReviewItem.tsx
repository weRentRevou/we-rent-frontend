"use client";

import ThumbsUpIcon from "@/../public/icons/thumbs-up.svg";
import Image from "next/image";
import { useState } from "react";
import { Review } from "@/types/types";
import ImageModal from "../modals/ImageModal";
import ReviewStar from "../stars/ReviewStar";
import { formatDate } from "@/utils/utils";

interface ReviewItemProps extends Review {
  index: number;
}

const ReviewText = ({ review }: { review: string }) => {
  const maxLength = 200;
  const [isTruncated, setIsTruncated] = useState(review.length > maxLength);
  const truncatedReview = isTruncated
    ? review.slice(0, maxLength) + "..."
    : review;

  const handleReadMore = () => setIsTruncated(false);

  return (
    <p className="font-medium text-xs leading-5">
      {truncatedReview}{" "}
      {isTruncated && (
        <span>
          <button
            onClick={handleReadMore}
            className="font-semibold text-xs leading-5 text-accent underline"
          >
            Read More &gt;
          </button>
        </span>
      )}
    </p>
  );
};

export default function ReviewItem({
  rating,
  likes,
  user,
  review_text,
  review_photo,
  created_at,
  index,
}: ReviewItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatedDate = formatDate(created_at);
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3">
            <div className="size-[30px]">
              <Image
                src={user.profile_image}
                width={40}
                height={40}
                alt="User Profile Image"
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                {Array.from({ length: rating }).map((_, index) => (
                  <ReviewStar key={index} />
                ))}
              </div>
              <span className="flex gap-1 text-xxs text-gray uppercase">
                <span>{user.height} CM</span>
                <span>{user.weight} KG</span>
                <span>0 CM</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button>
              <Image
                src={ThumbsUpIcon}
                width={24}
                height={24}
                alt="Thumbs Up"
              />
            </button>
            <span className="text-xs">({likes})</span>
          </div>
        </div>
        <div className="mt-4">
          <ReviewText review={review_text} />
        </div>
        {review_photo && (
          <div className="my-2">
            <div
              className="size-14 border border-black"
              onClick={() => setIsOpen(true)}
            >
              <Image
                width={90}
                height={90}
                src={review_photo}
                alt="Product Image"
                className="w-full h-full object-cover object-center"
                priority={index < 3}
              />
            </div>
            <ImageModal
              open={isOpen}
              handleOpen={() => setIsOpen(!isOpen)}
              image={review_photo}
            />
          </div>
        )}
        <p className="text-gray font-medium text-xxs mt-1">{formatedDate}</p>
      </div>
    </>
  );
}
