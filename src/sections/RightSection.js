import React from "react";

export default function RightSection() {
  return (
    <div className="py-5 px-5">
      <div className="bg-white flex flex-row space-x-10 items-start justify-between rounded-[40px] px-10 py-10 w-full min-h-[117vh] shadow-xl shadow-myMain/20">
        <div className="flex-[0.7] border border-myDark"></div>
        <div className="flex-[0.3] border border-myMain"></div>
      </div>
    </div>
  );
}
