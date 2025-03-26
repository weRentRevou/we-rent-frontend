import { Suspense } from "react";
import { fetchProductById } from "@/services/api";

async function getProductData() {
  const data = await fetchProductById(1);
  return { fabric: data.fabric, fit: data.fit };
}

export default async function ProductDetail() {
  const data = await getProductData();

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <div>
        <h2 className="text-sm font-bold mb-2">PRODUCT DETAIL</h2>
        <div className="flex justify-between text-xs">
          <span className="font-bold">FABRIC</span>
          <span className="uppercase">{data.fabric}</span>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className="font-bold">FIT</span>
          <span className="uppercase">{data.fit}</span>
        </div>
      </div>
    </Suspense>
  );
}
