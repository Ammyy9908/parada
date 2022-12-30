import React from "react";

function index({ children }) {
  return (
    <div className="cursor-pointer relative group overflow-hidden w-full h-[465px] sm:h-[868px]">
      {children}
    </div>
  );
}

export default index;
