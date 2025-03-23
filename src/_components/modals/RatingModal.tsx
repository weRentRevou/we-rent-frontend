import { customTheme } from "@/themes/customTheme";
import {
  Dialog,
  DialogBody,
  Radio,
  ThemeProvider,
} from "@material-tailwind/react";
import ReviewStar from "../stars/ReviewStar";

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
    <ThemeProvider value={customTheme}>
      <Dialog
        open={open}
        handler={handleOpen}
        className="w-auto min-w-0 rounded-3xl"
      >
        <DialogBody>
          {Array.from({ length: 5 }, (_, index) => {
            const rating = 5 - index;

            return (
              <div key={index} className="flex items-center">
                <Radio
                  name="rating"
                  onClick={() => handleClick(rating)}
                  className="w-5.5! h-5.5! border-black!"
                />
                <div className="flex items-center gap-2 pr-3">
                  {Array.from({ length: 5 - index }).map((_, starIndex) => (
                    <ReviewStar key={starIndex} size="size-4" />
                  ))}
                </div>
              </div>
            );
          })}
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
}
