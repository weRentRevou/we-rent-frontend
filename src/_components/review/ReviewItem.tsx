"use client";

import ThumbsUpIcon from "@/../public/icons/thumbs-up.svg";
import Image from "next/image";
import { useState } from "react";
import { Review } from "@/types/types";
import DummyImage from "@/../public/images/dummy.webp";
import ImageModal from "../modals/ImageModal";
import ReviewStar from "../stars/ReviewStar";

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
  profileImage,
  rating,
  fit,
  weight,
  height,
  date,
  review,
  likes,
  images,
}: Review) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3">
            <div className="bg-light-gray size-[30px] rounded-full"></div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                {Array.from({ length: rating }).map((_, index) => (
                  <ReviewStar key={index} />
                ))}
              </div>
              <span className="flex gap-1 text-xxs text-gray uppercase">
                <span>{height} CM</span>
                <span>{weight} KG</span>
                <span>{fit} CM</span>
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
          <ReviewText review={review} />
        </div>
        {images && (
          <div className="my-2">
            <div
              className="size-14 border border-black"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={DummyImage}
                alt="Product Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <ImageModal
              open={isOpen}
              handleOpen={() => setIsOpen(!isOpen)}
              image={DummyImage}
            />
          </div>
        )}
        <p className="text-gray font-medium text-xxs mt-1">{date}</p>
      </div>
    </>
  );
}
