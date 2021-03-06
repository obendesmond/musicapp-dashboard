import React from "react";
import { BsFillPersonFill, BsPlayFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import Artist from "./Artist";
import PlayBtn from "./PlayBtn";

export default function TrendingSingle({ title, artist, type, len, position }) {
  const bottoms = () => (
    <>
      <BsFillPersonFill />
      <p>{artist}</p>
      <p>.</p>
      <p>{type}</p>
    </>
  );

  return (
    <div className="flex flex-row justify-between items-center space-x-2 ">
      {/* first part */}
      <Artist title={title} bottoms={bottoms()} position={position} />

      {/* second part */}
      <div className="flex-[0.3] flex flex-row justify-between items-center">
        <p className="text-myDark">{len}</p>
        <PlayBtn Icon={BsPlayFill} reverseColor />
        <GoKebabVertical />
      </div>
    </div>
  );
}
