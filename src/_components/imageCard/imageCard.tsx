import React from "react";
import Image from "next/image";

export default function imageCard() {
  return (
    <div>
      <div className="relative w-full flex-1 bg-black">
        <Image
          src="/images/Photo.png"
          alt="Black Kaftan with Embellishment"
          width={500}
          height={700}
          quality={100}
          className="w-full h-full object-cover"
          priority
        />
        <p className="absolute bottom-3 right-5 text-white text-xs">
          source: Amina Moroccan Abaya
        </p>
      </div>
    </div>
  );
}
