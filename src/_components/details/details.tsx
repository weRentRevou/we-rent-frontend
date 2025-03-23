import React from "react";
import { Star } from "lucide-react";
import HorizontalDivider from "../dividers/HorizontalDivider";

export default function details() {
  return (
    <div>
      <h2 className="py-2 text-2xl font-bold">Black Kaftan with Embellishment</h2>

      <div className="flex items-center mt-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
        ))}
        <Star size={16} className="text-gray-300" />
        <span className="text-sm text-gray-500 ml-2">7 REVIEWS</span>
      </div>

      <div className="flex justify-between items-center mt-4 text-xs">
        <span>M</span>
        <a href="#" className="text-black-100">
          VIEW SIZE GUIDE
        </a>
      </div>

      <HorizontalDivider className="my-2" />

      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold">DESIGNERS</h2>
        <a href="#" className="text-black-100 text-xs">
          VIEW THE COLLECTION
        </a>
      </div>

      <div className="mt-4">
        <div className="p-7 bg-gray-100 text-gray-500 text-center cursor-pointer"></div>
      </div>
    </div>
  );
}
