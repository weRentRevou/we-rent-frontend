"use client";

import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import ReviewItem from "@/_components/review/ReviewItem";
import { Review } from "@/types/types";
import React from "react";

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <React.Fragment key={index}>
            <HorizontalDivider className="my-5" />
            <div className="px-5">
              <ReviewItem {...review} index={index} />
            </div>
          </React.Fragment>
        ))
      ) : (
        <>
          <HorizontalDivider className="my-5" />
          <p className="text-center px-5">This product has not been reviewed</p>
        </>
      )}
    </div>
  );
}
