import ProgressBar from "./Bars";
import Stars from "../_components/stars/Stars";

export default function OverallReviews() {
    return (
        <div className="bg-white max-w-sm mx-auto">
            <div>
                <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-medium">REVIEWS (7)</h3>
                <a href="#" className="text-green-600 text-sm">View More &gt;</a>
                </div>
                <div className="flex items-center space-x-1">
                <Stars rating={4} size="text-lg" className="text-yellow" gap="gap-1" />
                </div>
                <div className="mt-2 space-y-2">
                    <div>
                        <ProgressBar label="Small" value={2} />
                    </div>
                    <div >
                        <ProgressBar label="True To Size" value={100} />
                    </div>
                    <div >
                        <ProgressBar label="Large" value={70} />
                    </div>
                </div>
            </div>
        </div>
    );
}