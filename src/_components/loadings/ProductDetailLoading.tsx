export function ProductDetailSkeleton() {
    return (
        <div className="mt-4 animate-pulse">
            <h2 className="text-sm font-bold mb-2 bg-light-gray h-4 w-32 rounded animate-pulse"></h2>
            <div className="flex justify-between text-xs">
                <div className="bg-light-gray h-4 w-20 rounded animate-pulse"></div>
                <div className="bg-light-gray h-4 w-20 rounded animate-pulse"></div>
            </div>
            <div className="flex justify-between text-xs mt-2">
                <div className="bg-light-gray h-4 w-20 rounded animate-pulse"></div>
                <div className="bg-light-gray h-4 w-20 rounded animate-pulse"></div>
            </div>
        </div>
    );
}