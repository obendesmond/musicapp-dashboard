import React from "react";
import profile from "../assets/desmond.png";

export default function Artist({ title, position, bottoms }) {
  return (
    <div className="flex flex-row space-x-5 items-center">
      {position && <p className="text-myMain">{position}</p>}

      <div className="h-16 w-16 rounded-[20px] bg-gradient-to-l from-myMain to-myLightMain overflow-hidden shadow-xl shadow-myDark/20">
        <img src={profile} alt="profile" />
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-myDark font-bold capitalize cursor-pointer">
          {title}
        </p>
        <div className="flex flex-row space-x-2 items-center text-[13px] text-gray-400">
          {bottoms}
        </div>
      </div>
    </div>
  );
}
