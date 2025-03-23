import Stars from "@/_components/stars/Stars";

export default function OverallReviews() {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center gap-5">
        <div className="text-xl font-number font-bold">3.8</div>
        <Stars rating={4} />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-4">Fit Scale</h3>
        <div className="grid grid-cols-3 gap-10">
          {[
            { label: "Small", percentage: 2 },
            { label: "True To Size", percentage: 100 },
            { label: "Large", percentage: 80 },
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
