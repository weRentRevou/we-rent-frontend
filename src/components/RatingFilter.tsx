"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function RatingFilter() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-[#C7AA5C] hover:text-white transition-colors flex items-center justify-between"
      >
        <span>
          Rating: {selectedRating ? `${selectedRating} Star${selectedRating > 1 ? "s" : ""}` : "All"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <button
            onClick={() => {
              setSelectedRating(null);
              setShowDropdown(false);
            }}
            className="w-full px-3 py-2 text-sm text-left hover:bg-[#C7AA5C] hover:text-white transition-colors"
          >
            All
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => {
                setSelectedRating(rating);
                setShowDropdown(false);
              }}
              className="w-full px-3 py-2 text-sm text-left hover:bg-[#C7AA5C] hover:text-white transition-colors flex items-center"
            >
              <div className="flex">
                {Array(rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                {Array(5 - rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
