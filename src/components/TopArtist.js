import React, { useState, useEffect } from "react";
import Artist from "./Artist";
import { RiHeartsFill } from "react-icons/ri";
import { BsSoundwave } from "react-icons/bs";
import { topArtist } from "../data/topArtist";

export default function TopArtist() {
  const [topArtistList, setTopArtistList] = useState([]);

  useEffect(() => {
    setTopArtistList(topArtist.slice(0, 3));
  }, [topArtistList]);

  const bottoms = (followers, plays) => (
    <>
      <span className="flex flex-wrap space-x-1 items-center">
        <RiHeartsFill />
        <p>{followers}</p>
        <p>Fls</p>
        <p>.</p>
        <BsSoundwave />
        <p>{plays}</p>
        <p>Plays</p>
      </span>
    </>
  );
  return (
    <div className="flex flex-col space-y-5">
      <p className="text-2xl text-myDark font-bold">Top Artist</p>
      {topArtistList.map(({ artist, followers, plays }, i) => (
        <Artist key={i} title={artist} bottoms={bottoms(followers, plays)} />
      ))}
      <p className="text-gray-400 cursor-pointer">See More</p>
    </div>
  );
}
