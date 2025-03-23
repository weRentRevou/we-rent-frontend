import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 ">
      <div className="w-screen h-[60px] flex items-center px-5 bg-white">
        <Link href="/">
          <FaChevronLeft className="text-xl" />
        </Link>
      </div>
    </header>
  );
}
