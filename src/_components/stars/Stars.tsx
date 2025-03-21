import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Stars({
  size = "text-xs",
  rating,
  className,
  gap = "gap-2",
}: {
  size?: string;
  className?: string;
  rating: number;
  gap?: string;
}) {
  return (
    <div className={`${gap} flex items-center`}>
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} className={`${size} ${className} text-yellow`} />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <FaRegStar key={index} className={`${size} ${className} text-gray`} />
      ))}
    </div>
  );
}
