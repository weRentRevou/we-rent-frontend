import Stars from "@/_components/stars/Stars";

export default function RatingDisplay() {
  return (
    <div className="mb-6">
      <div className="text-3xl font-bold mb-2">3.8</div>
      <div className="flex items-center gap-1 mb-4">
        <Stars rating={4} />
      </div>
    </div>
  );
}
