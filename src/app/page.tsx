"use client";

import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import RatingModal from "@/_components/modals/RatingModal";
import ReviewItem from "@/_components/review/ReviewItem";
import { useState } from "react";
import Product from "@/_container/product";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen p-5">
      <Product />
      {/* Example calling the modal and ReviewItems component
      <HorizontalDivider className="mb-4" height="h-0.5" />
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
      />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <RatingModal open={isOpen} handleOpen={() => setIsOpen(!isOpen)} /> */}
    </div>
  );
}
