export function OverallReviewsSkeleton() {
    return (
        <div className="mt-4 animate-pulse">
            <div className="flex justify-between items-center mb-4">
                <div className="bg-light-gray h-4 w-24 rounded animate-pulse"></div>
                <div className="bg-light-gray h-4 w-16 rounded animate-pulse"></div>
            </div>
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="bg-light-gray h-4 w-4 rounded animate-pulse"></div>
                ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 w-full">
                <div className="h-4 bg-light-gray rounded animate-pulse"></div>
                <div className="h-4 bg-light-gray rounded animate-pulse"></div>
                <div className="h-4 bg-light-gray rounded animate-pulse"></div>
            </div>
        </div>
    );
}  