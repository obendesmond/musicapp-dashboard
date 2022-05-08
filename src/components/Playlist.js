import React from "react";
import CategoryTitle from "./CategoryTitle";
import PlaylistSingle from "./PlaylistSingle";

export default function Playlist() {
  return (
    <div className="flex flex-col space-y-4">
      <CategoryTitle title="Playlist" />
      <div className="">
        <div className="flex flex-row space-x-2 ">
          <PlaylistSingle />
          <PlaylistSingle />
          <PlaylistSingle />
          <PlaylistSingle />
        </div>
      </div>
    </div>
  );
}
