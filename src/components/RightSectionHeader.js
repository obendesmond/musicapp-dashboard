import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";

export default function RightSectionHeader() {
  return (
    <div className="sticky top-0 z-10 bg-white flex flex-row px-10 pt-5 pb-2 justify-between items-center">
      <p className="flex-[0.7] text-3xl text-myDark font-bold">Home</p>
      <div className="flex-[0.3]  flex flex-row items-center space-x-5">
        <BsBell className="text-xl cursor-pointer" />
        <span className="text-gray-300">|</span>
        <div className="flex flex-row py-2 px-3 items-center border border-gray-300 rounded-full">
          <BsSearch className="text-xl cursor-pointer" />
          <input
            className="flex-1 pl-4 text-sm border-none outline-none "
            placeholder="Type here to search"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
