import HorizontalDivider from "../../_components/dividers/HorizontalDivider";

export default function DetailsSkeleton() {
  return (
    <div>
      <div className="w-2/3 h-6 bg-light-gray animate-pulse rounded"></div>
      <div className="flex items-center gap-2 mt-4.5">
        <div className="w-24 h-5 bg-light-gray animate-pulse rounded"></div>
        <div className="w-16 h-4 bg-light-gray animate-pulse rounded"></div>
      </div>
      <div className="flex justify-between items-center mt-6 text-xxs">
        <div className="w-10 h-4 bg-light-gray animate-pulse rounded"></div>
        <div className="w-24 h-4 bg-light-gray animate-pulse rounded"></div>
      </div>
      <HorizontalDivider className="my-2" />
      <div className="flex justify-between items-center">
        <div className="w-24 h-5 bg-light-gray animate-pulse rounded"></div>
        <div className="w-32 h-4 bg-light-gray animate-pulse rounded"></div>
      </div>
      <div className="mt-2">
        <div className="w-full h-16 bg-light-gray animate-pulse rounded"></div>
      </div>
      <HorizontalDivider className="mt-6 mb-4" height="h-0.5" />
    </div>
  );
}
