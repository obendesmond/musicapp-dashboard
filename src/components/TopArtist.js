import React from "react";
import Artist from "./Artist";
import { RiHeartsFill } from "react-icons/ri";
import { BsSoundwave } from "react-icons/bs";
import { topArtist } from "../data/topArtist";

export default function TopArtist() {
  const bottoms = (followers, plays) => (
    <>
      <p>
        <RiHeartsFill />
        {followers} Fls
      </p>
      <p>.</p>
      <p>
        <BsSoundwave />
        {plays} Plays
      </p>
    </>
  );
  return (
    <div className="flex flex-col space-y-5">
      <p className="text-2xl text-myDark font-bold">Top Artist</p>
      {topArtist.splice(0, 3).map(({ artist, followers, plays }, i) => (
        <Artist title={artist} bottoms={bottoms(followers, plays)} />
      ))}
      <p className="text-gray-400 cursor-pointer">See More</p>
    </div>
  );
}
