interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
}

export default function ProgressBar({
  label,
  value,
  maxValue = 100,
}: ProgressBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="flex items-center justify-between text-xs w-full gap-2">
      <span className="min-w-22">{label}</span>
      <div className="relative w-full h-2.5 bg-light-gray overflow-hidden">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="min-w-7.5">{percentage.toFixed(0)}%</span>
    </div>
  );
}
