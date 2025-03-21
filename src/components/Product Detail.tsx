'use client';

export default function ProductDetail() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
        <div className="border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">PRODUCT DETAIL</h2>
            <div className="flex justify-between text-sm text-gray-600">
            <span>FABRIC</span>
            <span className="text-gray-800">SILK</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>FIT</span>
            <span className="text-gray-800">TRUE TO SIZE</span>
            </div>
        </div>
        </div>
    );
}