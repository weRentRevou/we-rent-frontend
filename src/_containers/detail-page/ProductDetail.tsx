import { Suspense } from "react";
import { ProductDetailSkeleton } from "@/_components/loadings/ProductDetailLoading";

interface Product {
  fabric: string;
  fit: string;
}

export default function ProductDetail({ productInfo }: { productInfo: Product }) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <div>
        <h2 className="text-sm font-bold mb-2">PRODUCT DETAIL</h2>
        <div className="flex justify-between text-xs">
          <span className="font-bold">FABRIC</span>
          <span className="uppercase">{productInfo.fabric}</span>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className="font-bold">FIT</span>
          <span className="uppercase">{productInfo.fit}</span>
        </div>
      </div>
    </Suspense>
  );
}
