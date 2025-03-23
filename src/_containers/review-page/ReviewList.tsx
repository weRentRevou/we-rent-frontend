import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import ReviewItem from "@/_components/review/ReviewItem";
import React from "react";

function FilterButton({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick?: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-xxs font-bold px-5 py-1.5 leading-2.5 text-white"
    >
      {children}
    </button>
  );
}

export default function ReviewList() {
  return (
    <section>
      <div className="grid grid-cols-4 gap-2 px-3">
        <FilterButton>All Reviews</FilterButton>
        <FilterButton>All Reviews</FilterButton>
        <FilterButton>All Reviews</FilterButton>
        <FilterButton>All Reviews</FilterButton>
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
