"use client";

import FilterButton from "@/_components/button/FilterButton";
import ReviewListLoading from "@/_components/loadings/ReviewListLoading";
import RatingModal from "@/_components/modals/RatingModal";
import { useReviewContext } from "@/providers/ReviewProvider";
import { Review } from "@/types/types";
import React, { Suspense, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ReviewList from "./ReviewList";

type FilterTypes =
  | "All Reviews"
  | "Newest Reviews"
  | "Photos/ Videos"
  | "By Rating";

const labels = [
  {
    label: "All Reviews",
    action: () => {
      console.log("all reviews");
    },
  },
  {
    label: "Photos/ Videos",
    action: () => {
      console.log("Photos/ Videos");
    },
  },
  {
    label: "Newest Reviews",
    action: () => {
      console.log("newest reviews");
    },
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return <span>{rating === 0 ? "All" : `${rating} ★`}</span>;
};

export default function ReviewSection({ reviews }: { reviews: Review[] }) {
  const { setTotalReview } = useReviewContext();

  useEffect(() => {
    setTotalReview(reviews.length);
  }, [reviews.length, setTotalReview]);

  const [selectedFilter, setSelectedFilter] =
    useState<FilterTypes>("All Reviews");

  const [isOpen, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleFilterClick = (filter: FilterTypes, action: () => void) => {
    setSelectedFilter(filter);
    setSelectedRating(0);
    action();
  };

  const handleRatingFilter = (rating: number) => {
    setSelectedFilter("By Rating");
    setSelectedRating(rating);
    setOpen(false);
  };

  return (
    <section>
      <div className="grid grid-cols-4 gap-2 px-3">
        {labels.map((label, index) => (
          <FilterButton
            key={index}
            isActive={selectedFilter === label.label}
            onClick={() =>
              handleFilterClick(label.label as FilterTypes, label.action)
            }
          >
            {label.label}
          </FilterButton>
        ))}
        <>
          <FilterButton
            onClick={() => setOpen(true)}
            isActive={selectedFilter === "By Rating"}
            className="flex items-center gap-0.5"
          >
            <span>
              Rating: <StarRating rating={selectedRating} />
            </span>
            <FaChevronDown className="text-xs" />
          </FilterButton>
          <RatingModal
            open={isOpen}
            handleOpen={() => setOpen(false)}
            handleClick={handleRatingFilter}
          />
        </>
      </div>
      <Suspense fallback={<ReviewListLoading />}>
        <ReviewList reviews={reviews} />
      </Suspense>
    </section>
  );
}
