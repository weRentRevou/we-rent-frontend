export default function FilterButton({
  children,
  onClick,
  isActive,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} text-xxs px-5 py-1.5 leading-2.5 transition-all ${
        isActive ? "bg-primary font-bold text-white" : "bg-light-gray "
      }`}
    >
      {children}
    </button>
  );
}
