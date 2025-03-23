import React from "react";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-2  flex items-center">
      <button className="text-black-400">
        <ArrowLeft size={24} />
      </button>
    </div>
  );
};

export default Navbar;
