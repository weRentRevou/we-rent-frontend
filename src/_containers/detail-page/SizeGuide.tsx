import HorizontalDivider from "@/_components/dividers/HorizontalDivider";
import { Suspense } from "react";

interface Product {
  size: string;
  bust: number;
  length: number;
}

export default function SizeGuide({ productData }: { productData: Product }) {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
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
                <td className="p-2 text-center uppercase">
                  {productData.size}
                </td>
                <td className="p-2 text-center">{productData.bust} cm</td>
                <td className="p-2 text-center">{productData.length} cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <HorizontalDivider className="mt-6" height="h-0.5" />
      </div>
    </Suspense>
  );
}
