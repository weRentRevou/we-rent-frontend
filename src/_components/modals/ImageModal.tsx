import { customTheme } from "@/themes/customTheme";
import { Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicThemeProvider = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.ThemeProvider),
  { ssr: false }
);
export default function ImageModal({
  open,
  handleOpen,
  image,
}: {
  open: boolean;
  image: string;
  handleOpen: () => void;
}) {
  return (
    <DynamicThemeProvider value={customTheme}>
      <Dialog
        open={open}
        handler={handleOpen}
        className="w-auto min-w-0 bg-transparent shadow-none focus:border-none focus:outline-none"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Image
            src={image}
            alt="Product Image"
            className="w-full h-full"
            width={393}
            height={393}
            quality={100}
            loading="lazy"
          />
        </DialogBody>
      </Dialog>
    </DynamicThemeProvider>
  );
}
