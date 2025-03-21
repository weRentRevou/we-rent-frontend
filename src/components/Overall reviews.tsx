'use client';
import * as Progress from "@radix-ui/react-progress";

export default function Reviews() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
            <div>
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-medium">REVIEWS (7)</h3>
                <a href="#" className="text-green-600 text-sm">View More &gt;</a>
                </div>
                <div className="flex items-center space-x-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
                </div>
                <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Small</span>
                    <Progress.Root className="relative w-3/4 h-2 bg-gray-300 overflow-hidden">
                    <Progress.Indicator className="h-full bg-[#3B6549] transition-all" style={{ width: "2%" }} />
                    </Progress.Root>
                    <span>2%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>True To Size</span>
                    <Progress.Root className="relative w-3/4 h-2 bg-gray-300 overflow-hidden">
                    <Progress.Indicator className="h-full bg-[#3B6549] transition-all" style={{ width: "100%" }} />
                    </Progress.Root>
                    <span>100%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                    <span>Large</span>
                    <Progress.Root className="relative w-3/4 h-2 bg-gray-300 overflow-hidden">
                    <Progress.Indicator className="h-full bg-[#3B6549] transition-all" style={{ width: "70%" }} />
                    </Progress.Root>
                    <span>70%</span>
                </div>
                </div>
            </div>
        </div>
    );
}