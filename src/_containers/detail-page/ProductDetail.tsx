import { Suspense } from "react";

export default function ProductDetail() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <div>
        <h2 className="text-sm font-bold mb-2">PRODUCT DETAIL</h2>
        <div className="flex justify-between text-xs">
          <span className="font-bold">FABRIC</span>
          <span className="uppercase">Silk</span>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className="font-bold">FIT</span>
          <span className="uppercase">True To Size</span>
        </div>
      </div>
    </Suspense>
  );
}
