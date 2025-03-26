import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import { Suspense } from "react";
import { fetchProductById } from "@/services/api";

interface Product {
  size: string;
  bust: number;
  length: number;
}

async function getProductData(): Promise<Product> {
  const data = await fetchProductById(1);
  return { size: data.size, bust: data.bust, length: data.length };
}

export default async function SizeGuide() {
  const data = await getProductData();
  
  return (
    <div className="mt-4">
      <div>
        <h3 className="text-xs font-bold mb-2">SIZE GUIDE</h3>
        <table className="w-full border-collapse border border-light-gray">
          <thead>
            <tr className="border-b border-b-light-gray text-xs">
              <th className="w-1/3 p-2">SIZE</th>
              <th className="w-1/3 p-2">BUST</th>
              <th className="w-1/3 p-2 ">LENGTH</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs font-light">
              <td className="p-2 text-center">{data.size}</td>
              <td className="p-2 text-center">{data.bust} cm</td>
              <td className="p-2 text-center">{data.length} cm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <HorizontalDivider className="mt-6" height="h-0.5" />
    </div>
  );
}

export function SizeGuideWrapper() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <SizeGuide />
    </Suspense>
  );
}
