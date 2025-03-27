import Stars from "@/_components/stars/Stars";

export default function SummaryReview({
  average_rating,
  fit_scale,
}: {
  average_rating: number;
  fit_scale: { small: number; true_to_size: number; large: number };
}) {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center gap-5">
        <div className="text-xl font-number font-bold">{average_rating}</div>
        <Stars rating={Math.floor(average_rating)} />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-4">Fit Scale</h3>
        <div className="grid grid-cols-3 gap-10">
          {[
            { label: "Small", percentage: fit_scale.small },
            { label: "True To Size", percentage: fit_scale.true_to_size },
            { label: "Large", percentage: fit_scale.large },
          ].map((item, index) => (
            <div key={index}>
              <div className="text-xxs mb-2">{item.percentage}%</div>
              <div className="h-[5px] bg-gray mb-2">
                <div
                  className="h-full bg-accent"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className="text-xxs font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
