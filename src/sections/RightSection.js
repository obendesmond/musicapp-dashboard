import React from "react";
import Index from "../pages/Index";

export default function RightSection() {
  return (
    <div className="relative">
      <div className="fixed bg-white  mx-4 my-4  rounded-[40px]  w-[76%] h-[95vh] shadow-xl shadow-myMain/20 overflow-y-scroll">
        <Index />
        <div className="fixed bottom-4 rounded-bl-[40px] w-[50%] h-10 bg-gradient-to-t from-white"></div>
      </div>
    </div>
  );
}
