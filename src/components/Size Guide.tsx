'use client';

export default function SizeGuide() {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
            <div className="border-b pb-2 mb-2">
            <h3 className="text-md font-medium mb-1">SIZE GUIDE</h3>
                <div className="bg-gray-100 p-2 rounded-md">
                    <div className="flex justify-between text-sm font-medium">
                    <span>SIZE</span>
                    <span>BUST</span>
                    <span>LENGTH</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1 text-gray-700">
                    <span>M</span>
                    <span>69 cm</span>
                    <span>69 cm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}