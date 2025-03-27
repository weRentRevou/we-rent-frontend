export default function SummaryReviewLoading() {
  return (
    <div className="px-5 py-4 ">
      <div className="flex items-center gap-5 h-7">
        <div className="w-8 h-full bg-light-gray rounded animate-pulse"></div>
        <div className="w-36 h-full bg-light-gray rounded animate-pulse"></div>
      </div>
      <h3 className="text-sm font-semibold my-4">Fit Scale</h3>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <div className="h-2 w-10 bg-light-gray rounded animate-pulse mb-2"></div>
            <div className="h-[5px] bg-light-gray animate-pulse mb-2"></div>
            <div className="h-2 w-20 bg-light-gray rounded animate-pulse font-semibold"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
