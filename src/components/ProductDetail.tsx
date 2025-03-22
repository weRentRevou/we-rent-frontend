import { fetchProduct } from "@/providers/Api";

async function getProductData() {
  const data = await fetchProduct();
  return { fabric: data.fabric, fit: data.fit };
}

export default async function ProductDetail() {
  const product = await getProductData();

  return (
    <div className="bg-white rounded-lg max-w-sm mx-0">
      <div>
        <h2 className="text-lg font-semibold">PRODUCT DETAIL</h2>
        <div className="flex justify-between text-sm text-black">
          <span className="font-semibold">FABRIC</span>
          <span className="text-gray-800">{product.fabric}</span>
        </div>
        <div className="flex justify-between text-sm text-black mt-1">
          <span className="font-semibold">FIT</span>
          <span className="text-gray-800">{product.fit}</span>
        </div>
      </div>
    </div>
  );
}

