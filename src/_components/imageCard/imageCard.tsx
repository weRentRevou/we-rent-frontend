import React from "react";
import Image from "next/image";
import { extractDomain } from "@/utils/utils";

export default function imageCard({ image }: { image: string }) {
  const domain = extractDomain(image);
  return (
    <div>
      <div className="relative w-full flex-1">
        <Image
          src={image}
          alt="Black Kaftan with Embellishment"
          width={500}
          height={700}
          quality={100}
          className="w-full h-full object-cover"
          priority
        />
        <p className="absolute bottom-3 right-5 text-white text-xs">
          source: {domain}
        </p>
      </div>
    </div>
  );
}
