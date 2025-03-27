import { formatPrice } from "@/utils/utils";

export default function FloatButton({ price }: { price: number }) {
  const formatedPrice = formatPrice(price);
  return (
    <div className="fixed bottom-0 left-0 right-0 w-screen h-[104px] px-5 bg-white shadow-md flex justify-between items-center z-50 border-t border-t-light-gray">
      <div>
        <p className="text-xs">Rent Fee</p>
        <h3 className="font-semibold">{formatedPrice}/4 Day</h3>
      </div>
      <button className="px-12 py-2 text-xs rounded-sm bg-primary">ADD</button>
    </div>
  );
}
