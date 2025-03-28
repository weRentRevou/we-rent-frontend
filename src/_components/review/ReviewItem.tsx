"use client";

import ThumbsUpIcon from "@/../public/icons/thumbs-up.svg";
import ThumbsUpIconGreen from "@/../public/icons/thumbs-up-fill.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Review, ReviewReply } from "@/types/types";
import ImageModal from "../modals/ImageModal";
import ReviewStar from "../stars/ReviewStar";
import { formatDate } from "@/utils/utils";
import { fetchReviewReply, likeReview } from "@/services/api";

const user_id = 3;

interface ReviewItemProps extends Review {
  reviewIndex: number;
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
  reviewIndex,
  id,
}: ReviewItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const formatedDate = formatDate(created_at);

  const [totalLike, setTotalLike] = useState(likes);
  const [isLiked, setLiked] = useState(user.id === user_id);

  useEffect(() => {
    const getReviewReplies = async (review_id: number) => {
      try {
        const replies = await fetchReviewReply(review_id);
        const hasLiked = replies.some(
          (reply: ReviewReply) =>
            reply.user.id === user_id && reply.is_liked === true
        );
        setLiked(hasLiked);
      } catch (error) {
        console.error("Error fetching review replies:", error);
        throw Error;
      }
    };

    if (id) {
      getReviewReplies(id);
    }
  }, [id]);

  const handleLike = async () => {
    try {
      setTotalLike(isLiked ? totalLike - 1 : totalLike + 1);
      setLiked(!isLiked);

      await likeReview(id, {
        user_id,
        is_liked: isLiked ? "True" : "False",
        comment_text: review_text,
      });
    } catch (error) {
      setTotalLike(likes);
      setLiked(user.id === user_id);

      console.error("Error fetching product:", error);
      throw Error;
    }
  };

  const formatImage = (image: string) => {
    return image.replace(/[{}]/g, "");
  };

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
                <span>{user.body_size} CM</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={handleLike}>
              <Image
                src={isLiked ? ThumbsUpIconGreen : ThumbsUpIcon}
                width={24}
                height={24}
                alt="Thumbs Up"
              />
            </button>
            <span className="text-xs">({totalLike})</span>
          </div>
        </div>
        <div className="mt-4">
          <ReviewText review={review_text} />
        </div>
        {review_photo && (
          <div className="my-2 flex items-center flex-wrap gap-1">
            {review_photo.map((image, index) => (
              <div
                key={index}
                className="size-14 border border-black"
                onClick={() => {
                  setSelectedImage(image);
                  setIsOpen(true);
                }}
              >
                <Image
                  width={90}
                  height={90}
                  src={formatImage(image)}
                  alt="Product Image"
                  className="w-full h-full object-cover object-center"
                  priority={reviewIndex < 3}
                />
              </div>
            ))}
            <ImageModal
              open={isOpen}
              handleOpen={() => setIsOpen(!isOpen)}
              image={formatImage(selectedImage)}
            />
          </div>
        )}
        <p className="text-gray font-medium text-xxs mt-1">{formatedDate}</p>
      </div>
    </>
  );
}
