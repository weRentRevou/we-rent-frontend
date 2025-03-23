"use client";

import FilterButton from "@/_components/button/FilterButton";
import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import RatingModal from "@/_components/modals/RatingModal";
import ReviewItem from "@/_components/review/ReviewItem";
import React, { useCallback, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

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

export default function ReviewList() {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterTypes>("All Reviews");

  const [isOpen, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleFilterClick = (filter: FilterTypes, action: () => void) => {
    setSelectedFilter(filter);
    setSelectedRating(0);
    action();
  };

  const handleRatingFilter = useCallback((rating: number) => {
    setSelectedFilter("By Rating");
    setSelectedRating(rating);
    setOpen(false);
  }, []);

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
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <React.Fragment key={index}>
            <HorizontalDivider className="my-5" />
            <div className="px-5">
              <ReviewItem
                review="This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it's incredibly versatile. I've worn it to brunch with friends, to the beach as a cover-up, and even to a formal dinner with the right accessories. It's so comfortable and easy to style. I can't recommend it enough! ps. btw im using my"
                rating={5}
                weight="70"
                height="170"
                fit="80"
                date="Nov 26, 2025"
                profileImage=""
                id={1}
                likes={5}
                images={null}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
