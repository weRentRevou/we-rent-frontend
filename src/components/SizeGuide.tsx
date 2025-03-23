import { fetchProduct } from "@/providers/Api";
import { Suspense } from "react";

interface Product {
  size: string;
  bust: number;
  length: number;
}

async function getProductData(): Promise<Product> {
  const data = await fetchProduct();
  return { size: data.size, bust: data.bust, length: data.length };
}

export default async function SizeGuide() {
  const product = await getProductData();

  return (
    <div className=" bg-white rounded-lg max-w-sm mx-0">
        <div>
            <h3 className="text-md font-medium mb-1">SIZE GUIDE</h3>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-300">
                    <th className="p-2 text-xs">SIZE</th>
                    <th className="p-2 text-xs">BUST</th>
                    <th className="p-2 text-xs">LENGTH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="p-2 border-t border-gray-300 text-center">
                        {product.size.toUpperCase()}
                    </td>
                    <td className="p-2 border-t border-gray-300 text-center">
                        {product.bust} cm
                    </td>
                    <td className="p-2 border-t border-gray-300 text-center">
                        {product.length} cm
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="w-full border-1 border-gray-300 my-5"></div>
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