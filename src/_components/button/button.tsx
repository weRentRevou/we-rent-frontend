import React from "react";

function button() {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[400px] bg-white shadow-md p-4 pb-6 flex justify-between items-center ">
      <div>
        <p className="text-gray-500 text-sm">Rent Fee</p>
        <h3 className="text-black font-bold">Rp 300.000/4 Day</h3>
      </div>
      <button className="text-black px-6 py-2 rounded-md" style={{ backgroundColor: "#C7AB55" }}>
        <p className="px-4">ADD</p>
      </button>
    </div>
  );
}

export default button;
