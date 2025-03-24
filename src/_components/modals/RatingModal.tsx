"use client";

import { Dialog, DialogBody, Radio } from "@material-tailwind/react";
import ReviewStar from "../stars/ReviewStar";
import dynamic from "next/dynamic";
import { customTheme } from "@/themes/customTheme";

const DynamicThemeProvider = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export default function RatingModal({
  open,
  handleOpen,
  handleClick,
}: {
  open: boolean;
  handleOpen: () => void;
  handleClick: (rating: number) => void;
}) {
  return (
    <DynamicThemeProvider value={customTheme}>
      <Dialog
        open={open}
        handler={handleOpen}
        className="w-auto min-w-0 rounded-3xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {Array.from({ length: 5 }, (_, index) => {
            const rating = 5 - index;

            return (
              <div key={index} className="flex items-center">
                <Radio
                  name="rating"
                  onClick={() => handleClick(rating)}
                  className="w-5.5! h-5.5! border-black!"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <div className="flex items-center gap-2 pr-3">
                  {Array.from({ length: rating }).map((_, starIndex) => (
                    <ReviewStar key={starIndex} size="size-4" />
                  ))}
                </div>
              </div>
            );
          })}
        </DialogBody>
      </Dialog>
    </DynamicThemeProvider>
  );
}
