interface ProgressBarProps {
    label: string;
    value: number;
    maxValue?: number;
}
  
export default function ProgressBar({ label, value, maxValue = 100 }: ProgressBarProps) {
    const percentage = (value / maxValue) * 100;
  
    return (
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span className="w-22">{label}</span>
        <div className="relative w-2/3 h-2 bg-gray-300 overflow-hidden">
          <div
            className="h-full bg-[#3B6549] transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="w-5">{percentage.toFixed(0)}%</span>
      </div>
    );
}  