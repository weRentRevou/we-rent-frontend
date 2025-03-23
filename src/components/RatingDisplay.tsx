import { Star } from "lucide-react";

export default function RatingDisplay() {
  return (
    <div className="mb-6">
      <div className="text-3xl font-bold mb-2">3.8</div>
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        <Star className="w-5 h-5 text-gray-300" />
      </div>
    </div>
  );
}
