"use client";

import { createContext, useContext, useState } from "react";

const ReviewContext = createContext<{
  totalReview: number;
  setTotalReview: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [totalReview, setTotalReview] = useState(0);

  return (
    <ReviewContext.Provider value={{ totalReview, setTotalReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export const useReviewContext = () => {
  const contex = useContext(ReviewContext);

  if (!contex) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }
  return contex;
};
