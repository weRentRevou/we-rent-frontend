import { customTheme } from "@/themes/customTheme";
import { Dialog, DialogBody, ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";

export default function ImageModal({
  open,
  handleOpen,
  image,
}: {
  open: boolean;
  image: any;
  handleOpen: () => void;
}) {
  return (
    <ThemeProvider value={customTheme}>
      <Dialog
        open={open}
        handler={handleOpen}
        className="w-auto min-w-0 bg-transparent shadow-none focus:border-none focus:outline-none"
      >
        <DialogBody>
          <Image src={image} alt="Product Image" />
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
}
