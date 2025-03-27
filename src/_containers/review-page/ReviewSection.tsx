"use client";

import FilterButton from "@/_components/button/FilterButton";
import ReviewListLoading from "@/_components/loadings/ReviewListLoading";
import RatingModal from "@/_components/modals/RatingModal";
import { useReviewContext } from "@/providers/ReviewProvider";
import { Review } from "@/types/types";
import React, { Suspense, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ReviewList from "./ReviewList";
import { fetchFilteredReviews } from "@/services/api";

type FilterTypes =
  | "All Reviews"
  | "Newest Reviews"
  | "Photos/ Videos"
  | "By Rating";

const labels = [
  {
    label: "All Reviews",
  },
  {
    label: "Photos/ Videos",
  },
  {
    label: "Newest Reviews",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return <span>{rating === 0 ? "All" : `${rating} ★`}</span>;
};

export default function ReviewSection({
  productId,
  reviews,
}: {
  productId: number;
  reviews: Review[];
}) {
  const { setTotalReview } = useReviewContext();
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [selectedFilter, setSelectedFilter] =
    useState<FilterTypes>("All Reviews");
  const [isOpen, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  console.log(reviews);

  useEffect(() => {
    setTotalReview(filteredReviews.length);
  }, [filteredReviews.length, setTotalReview]);

  const handleFilterClick = async (filter: FilterTypes) => {
    if (!productId) {
      console.error("Error: productId is undefined");
      return;
    }

    setSelectedFilter(filter);
    setSelectedRating(0);

    let updatedReviews = reviews;

    if (filter === "Photos/ Videos") {
      updatedReviews = await fetchFilteredReviews({
        productId,
        hasPhoto: true,
      });
    } else if (filter === "Newest Reviews") {
      updatedReviews = await fetchFilteredReviews({
        productId,
        sortBy: "newest",
      });
    } else {
      updatedReviews = await fetchFilteredReviews({ productId });
    }

    setFilteredReviews(updatedReviews);
  };

  const handleRatingFilter = async (rating: number) => {
    if (!productId) {
      console.error("Error: productId is undefined");
      return;
    }

    setSelectedFilter("By Rating");
    setSelectedRating(rating);
    setOpen(false);

    const updatedReviews = await fetchFilteredReviews({ productId, rating });

    setFilteredReviews(updatedReviews);
  };

  return (
    <section>
      <div className="grid grid-cols-4 gap-2 px-3">
        {labels.map((label, index) => (
          <FilterButton
            key={index}
            isActive={selectedFilter === label.label}
            onClick={() => handleFilterClick(label.label as FilterTypes)}
          >
            {label.label}
          </FilterButton>
        ))}
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
      </div>
      <Suspense fallback={<ReviewListLoading />}>
        <ReviewList reviews={filteredReviews} />
      </Suspense>
    </section>
  );
}
