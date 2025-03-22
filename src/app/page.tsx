"use client";

import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import RatingModal from "@/_components/modals/RatingModal";
import ReviewItem from "@/_components/review/ReviewItem";
import Stars from "@/_components/stars/Stars";
import { button } from "@material-tailwind/react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen p-5">
      {/* Example calling the modal and ReviewItems component */}
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
      <Stars rating={4} />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <RatingModal open={isOpen} handleOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
}
