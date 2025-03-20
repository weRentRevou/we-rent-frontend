import { customTheme } from "@/themes/customTheme";
import {
  Dialog,
  DialogBody,
  Radio,
  ThemeProvider,
} from "@material-tailwind/react";
import Star from "../stars/Star";

export default function RatingModal({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
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
                <Radio name="rating" onClick={() => console.log(rating)} />
                <div className="flex items-center gap-2 pr-3">
                  {Array.from({ length: 5 - index }).map((_, starIndex) => (
                    <Star key={starIndex} size="size-4" />
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
