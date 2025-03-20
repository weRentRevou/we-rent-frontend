export default function HorizontalDivider({
  width = "w-full",
  height = "h-[1px]",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div className={`${className} ${width} ${height} bg-light-gray`}></div>
  );
}
