"use client";

import { useReviewContext } from "@/providers/ReviewProvider";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const lastPath = pathname.split("/").pop();

  const { totalReview } = useReviewContext();

  return (
    <header className="sticky top-0 left-0 z-50 ">
      <div className="w-screen h-[60px] flex items-center px-5 bg-white border-b border-b-light-gray relative">
        {pathname !== "/" && (
          <button onClick={() => router.back()}>
            <FaChevronLeft className="text-xl" />
          </button>
        )}
        {lastPath === "reviews" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <p className="font-bold">Reviews ({totalReview})</p>
          </div>
        )}
      </div>
    </header>
  );
}
