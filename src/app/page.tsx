"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/1">
        <Button
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Go to Product Detail
        </Button>
      </Link>
    </main>
  );
}
