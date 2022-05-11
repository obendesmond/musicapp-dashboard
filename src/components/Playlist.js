import React from "react";
import CategoryTitle from "./CategoryTitle";
import PlaylistSingle from "./PlaylistSingle";
import { playListData } from "../data/playListData";

export default function Playlist() {
  return (
    <div className="flex flex-col space-y-4">
      <CategoryTitle title="Playlist" />
      <div className="">
        <div className="flex flex-row space-x-2 ">
          {playListData.map(({ title, bgImg, trackNumber }, i) => (
            <PlaylistSingle
              key={i}
              title={title}
              bgImg={bgImg}
              trackNumber={trackNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
