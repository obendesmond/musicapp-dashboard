import React from "react";
import { BsFillPersonFill, BsPlayFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import profile from "../assets/desmond.png";

export default function TrendingSingle() {
  return (
    <div className="flex flex-row justify-between items-center space-x-2 ">
      {/* first part */}
      <div className="flex-[0.7] flex flex-row space-x-10 items-center">
        <p className="text-myMain">01</p>
        <div className="h-16 w-16 rounded-[20px] bg-gradient-to-l from-myMain to-myLightMain overflow-hidden shadow-xl shadow-myDark/20">
          <img src={profile} alt="profile" />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-myDark font-bold">Balonku Ada 5 Master</p>
          <div className="flex flex-row space-x-2 items-center text-[13px] text-gray-400">
            <BsFillPersonFill />
            <p>Mamank</p>
            <p>.</p>
            <p>Dance Beat</p>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="flex-[0.3] flex flex-row justify-between items-center">
        <p className="text-myDark">3:20</p>
        <div className="rounded-full shadow-inner p-2 bg-myMain cursor-pointer">
          <BsPlayFill className="text-white" />
        </div>
        <GoKebabVertical />
      </div>
    </div>
  );
}
