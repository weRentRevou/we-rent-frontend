import HorizontalDivider from "@/_components/dividers/HorizontalDivider";

export function SizeGuideSkeleton() {
    return (
        <div className="mt-4 animate-pulse">
            <div>
                <h3 className="text-xs font-bold mb-2 bg-light-gray w-24 h-4 rounded animate-pulse"></h3>
                <table className="w-full border-collapse border border-light-gray">
                    <thead>
                        <tr className="border-b border-b-light-gray text-xs">
                        <th className="w-1/3 p-2 bg-light-gray h-4 rounded animate-pulse"></th>
                        <th className="w-1/3 p-2 bg-light-gray h-4 rounded animate-pulse"></th>
                        <th className="w-1/3 p-2 bg-light-gray h-4 rounded animate-pulse"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-xs font-light">
                        <td className="p-2 text-center bg-light-gray h-4 rounded animate-pulse"></td>
                        <td className="p-2 text-center bg-light-gray h-4 rounded animate-pulse"></td>
                        <td className="p-2 text-center bg-light-gray h-4 rounded animate-pulse"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <HorizontalDivider className="mt-6" height="h-0.5" />
        </div>
        
    );
}